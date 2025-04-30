'use client';
// src/app/error.js - Global error handler for Next.js App Router

export default function GlobalError({
  error,
  reset,
}) {
  return (
    <div className="min-h-screen bg-black text-gray-200 pt-24 flex items-center justify-center">
      <div className="max-w-xl w-full bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold font-serif text-purple-300 mb-4">
          Something went wrong
        </h1>
        
        <p className="text-gray-400 mb-6">
          We apologize for the inconvenience. An error occurred while loading this page.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-purple-800 hover:bg-purple-700 text-white rounded-md font-medium transition-colors border border-purple-600"
          >
            Try again
          </button>
          
          <a
            href="/"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md font-medium transition-colors border border-gray-700"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}