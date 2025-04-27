// src/components/OrderSummary.jsx
import Image from 'next/image';

export default function OrderSummary({ cart }) {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 5.99; // Example shipping cost
  const tax = subtotal * 0.07; // Example tax rate (7%)
  const total = subtotal + shipping + tax;
  
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
      <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300">
        Order Summary
      </h2>
      
      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <div key={item._id} className="flex gap-4">
            <div className="w-16 h-16 relative flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            
            <div className="flex-grow">
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
            </div>
            
            <div className="text-right flex-shrink-0">
              <p className="font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-800 pt-4 space-y-2">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>${shipping.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between">
          <p>Tax</p>
          <p>${tax.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-800">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}