// src/app/product/[slug]/not-found.js
import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-black text-gray-200 pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="mb-8">
          <svg className="w-16 h-16 text-purple-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-purple-300">
          Product Not Found
        </h1>
        
        <p className="text-xl mb-2">We couldn&apos;t find the product you&apos;re looking for.</p>
        <p className="text-lg mb-8 text-gray-400">It may have been removed or the URL might be incorrect.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="px-6 py-3 bg-purple-800 hover:bg-purple-700 text-white rounded-md font-medium transition-colors border border-purple-600"
          >
            Browse All Products
          </Link>
          
          <Link
            href="/"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md font-medium transition-colors border border-gray-700"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}