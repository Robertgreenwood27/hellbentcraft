// src/app/checkout/page.js
'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cartContext';
import { useRouter } from 'next/navigation';
import CheckoutForm from '@/components/CheckoutForm';
import OrderSummary from '@/components/OrderSummary';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  
  if (cart.length === 0) {
    router.push('/cart');
    return null;
  }
  
  const handleSubmit = async (formData) => {
    setIsProcessing(true);
    setError(null);
    
    try {
      // We'll implement this function in a separate file
      const { success, error: paymentError, orderId } = await createCheckoutSession(cart, formData);
      
      if (success) {
        clearCart();
        router.push(`/confirmation?orderId=${orderId}`);
      } else {
        setError(paymentError || 'An error occurred during checkout. Please try again.');
        setIsProcessing(false);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError('An unexpected error occurred. Please try again.');
      setIsProcessing(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-gray-200 pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-purple-300">
          Checkout
        </h1>
        
        {error && (
          <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3">
            <CheckoutForm onSubmit={handleSubmit} isProcessing={isProcessing} />
          </div>
          
          <div className="w-full lg:w-1/3">
            <OrderSummary cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
}