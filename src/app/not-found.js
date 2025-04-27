// src/app/not-found.js
"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function NotFound() {
const [mounted, setMounted] = useState(false);
useEffect(() => {
setMounted(true);
}, []);
if (!mounted) return null;
return (
<div
className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center relative"
style={{
backgroundImage: 'url(/images/404.png)',
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
}}
>
{/* Overlay to ensure text is readable */}
<div className="absolute inset-0 bg-black/70"></div>
<div className="max-w-4xl mx-auto px-4 py-12 text-center z-10 relative">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-purple-300">
      Looks Like You're Lost in the Void
    </h1>
    
    <p className="text-xl mb-8">
      The page you're looking for has vanished into the darkness, consumed by 
      otherworldly forces, or simply never existed in this realm.
    </p>
    
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 mb-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-purple-300">Did you summon incorrectly?</h2>
      <ul className="text-left text-gray-300 mb-4">
        <li className="mb-2">• Check the URL for any misplaced incantations</li>
        <li className="mb-2">• Perhaps the page has been exorcised</li>
        <li className="mb-2">• Maybe your offering to the website gods was insufficient</li>
      </ul>
    </div>
    
    <div className="space-y-4">
      <Link 
        href="/"
        className="inline-block bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors border border-purple-600 mx-2"
      >
        Return to the Crypt
      </Link>
      
      <Link 
        href="/shop"
        className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors border border-gray-700 mx-2"
      >
        Browse Our Cursed Items
      </Link>
    </div>
    
    <div className="mt-12 text-sm text-gray-400">
      <p>"Not all who wander are lost, but you definitely are."</p>
    </div>
  </div>
</div>
);
}