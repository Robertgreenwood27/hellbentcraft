'use client';
// src/app/product/[slug]/error.js - Product-specific error handler

import Link from 'next/link';

export default function ProductError({ error, reset }) {
  return (
    <div className="min-h-screen bg-black text-gray-200 pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-purple-300">
          Unable to Load Product
        </h1>
        
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8 max-w-md mx-auto">
          <p className="mb-4">
            We encountered an issue while trying to load this product. This could be due to:
          </p>
          <ul className="text-left text-gray-400 mb-6 list-disc pl-6">
            <li>The product no longer exists</li>
            <li>A temporary server issue</li>
            <li>An issue with your connection</li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-6 py-3 bg-purple-800 hover:bg-purple-700 text-white rounded-md font-medium transition-colors border border-purple-600"
            >
              Try Again
            </button>
            
            <Link
              href="/shop"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md font-medium transition-colors border border-gray-700"
            >
              Return to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}