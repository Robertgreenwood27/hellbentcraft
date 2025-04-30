// src/components/Cart.jsx
'use client';

import { useCart } from '@/lib/cartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const router = useRouter();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  // Filter out any invalid cart items before calculating
  const validCart = Array.isArray(cart) ? cart.filter(item => 
    item && 
    item._id && 
    item.title && 
    typeof item.price === 'number' && 
    typeof item.quantity === 'number' && 
    item.image && 
    item.slug
  ) : [];
  
  const subtotal = validCart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  const handleCheckout = () => {
    if (validCart.length === 0) return;
    
    setIsCheckingOut(true);
    // Will connect with Stripe later
    setTimeout(() => {
      router.push('/checkout');
    }, 500);
  };
  
  if (!validCart.length) {
    return (
      <div className="min-h-screen bg-black text-gray-200 pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-purple-300">
            Your Cart is Empty
          </h1>
          <p className="text-xl mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link
            href="/shop"
            className="inline-block bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors border border-purple-600"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black text-gray-200 pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-purple-300">
          Your Cart
        </h1>
        
        <div className="mb-8">
          {validCart.map((item) => (
            <div key={item._id} className="flex flex-col sm:flex-row items-start gap-4 py-6 border-b border-gray-800">
              <div className="w-24 h-24 relative flex-shrink-0">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-gray-400 text-xs">No image</span>
                  </div>
                )}
              </div>
              
              <div className="flex-grow">
                <Link href={`/product/${item.slug}`} className="text-lg font-medium hover:text-purple-300">
                  {item.title}
                </Link>
                <p className="text-gray-400 mt-1">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center border border-gray-700 rounded-md mt-2 sm:mt-0">
                <button
                  onClick={() => item.quantity > 1 && updateQuantity(item._id, item.quantity - 1)}
                  className="px-3 py-2 border-r border-gray-700 hover:bg-gray-800"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="w-12 text-center py-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  className="px-3 py-2 border-l border-gray-700 hover:bg-gray-800"
                >
                  +
                </button>
              </div>
              
              <div className="text-right flex-shrink-0 mt-2 sm:mt-0">
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-400 hover:text-red-300 text-sm mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6 border-b border-gray-800">
          <button
            onClick={clearCart}
            className="text-red-400 hover:text-red-300 text-sm"
          >
            Clear Cart
          </button>
          
          <div className="text-right">
            <p className="text-lg font-medium">Subtotal: ${subtotal.toFixed(2)}</p>
            <p className="text-gray-400 text-sm mt-1">Shipping and taxes calculated at checkout</p>
          </div>
        </div>
        
        <div className="mt-8 text-right">
          <button
            onClick={handleCheckout}
            disabled={isCheckingOut}
            className="bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors border border-purple-600 flex items-center ml-auto"
          >
            {isCheckingOut ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Proceed to Checkout'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}