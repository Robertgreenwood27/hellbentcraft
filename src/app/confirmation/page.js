// src/app/confirmation/page.js

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);
  
  useEffect(() => {
    if (orderId) {
      // In a real implementation, you'd fetch the order details from your API
      setLoading(false);
      setOrder({
        id: orderId,
        status: 'processing'
      });
    } else {
      setLoading(false);
    }
  }, [orderId]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-gray-200 pt-24 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-purple-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }
  
  if (!order) {
    return (
      <div className="min-h-screen bg-black text-gray-200 pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-purple-300">
            Order Not Found
          </h1>
          <p className="text-xl mb-8">We couldn&apos;t find the order you&apos;re looking for.</p>
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
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="mb-8">
          <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-purple-300">
          Thank You for Your Order!
        </h1>
        
        <p className="text-xl mb-2">Your order has been received and is being processed.</p>
        <p className="text-lg mb-8 text-gray-400">Order #{order.id}</p>
        
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8 max-w-md mx-auto">
          <h2 className="text-xl font-bold mb-4">Order Status: {order.status}</h2>
          <p className="mb-4">We&apos;ll send an email confirmation with tracking information once your order ships.</p>
          <p className="text-sm text-gray-400">Please check your spam folder if you don&apos;t see the email.</p>
        </div>
        
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

export default function OrderConfirmation() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-gray-200 pt-24 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-purple-500 rounded-full border-t-transparent"></div>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}