"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const src = `https://www.youtube.com/embed/bS6KWNB5NEo?autoplay=1&mute=${
    muted ? 1 : 0
  }&controls=0&loop=1&playlist=bS6KWNB5NEo&showinfo=0&rel=0&modestbranding=1`;

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen overflow-hidden text-gray-200">
      {/* Page content */}
      <div className="relative z-10 max-w-4xl w-full px-4 py-8 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-purple-300 gothic-title">
          404: The Dance Floor is Empty
        </h1>
        
        <p className="mb-6 text-base sm:text-lg md:text-xl">
          You&apos;ve wandered into the wrong part of the club. The page you&apos;re looking for is hanging out somewhere else.
        </p>

        {/* Video is positioned differently based on screen size */}
        <div className="sm:fixed sm:inset-0 sm:-z-10 w-full h-64 sm:h-screen sm:w-screen overflow-hidden mb-6 sm:mb-0">
          <iframe
            src={src}
            title="Goth bats dancing"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover sm:pointer-events-none"
          />
        </div>

        {/* Optional overlay for contrast—appears only on larger screens */}
        <div className="hidden sm:block fixed inset-0 -z-5 bg-black/40" />

        <div className="mb-6 mx-auto max-w-md bg-black/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-purple-800 pulse-border">
          <h2 className="mb-3 text-xl sm:text-2xl font-bold text-purple-300">
            Did the DJ play the wrong track?
          </h2>
          <ul className="mb-4 text-left text-sm text-gray-300">
            <li className="mb-1">• The URL might be hanging upside down</li>
            <li className="mb-1">• Perhaps this page flew away at dawn</li>
            <li className="mb-1">• Even goths get lost sometimes</li>
          </ul>
          <button
            onClick={() => setMuted(!muted)}
            className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base bg-purple-800 hover:bg-purple-700 rounded-md border border-purple-600 hover-glow text-white"
          >
            {muted ? "Unmute Music" : "Mute Music"}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2 text-base sm:text-lg font-medium text-white bg-purple-800 hover:bg-purple-700 border border-purple-600 rounded-md hover-glow transition-colors"
          >
            Back to the Main Floor
          </Link>
          <Link
            href="/shop"
            className="w-full sm:w-auto px-6 py-2 text-base sm:text-lg font-medium text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md hover-glow transition-colors"
          >
            Browse Our Dark Artifacts
          </Link>
        </div>

        <p className="text-xs sm:text-sm text-gray-400 spooky-text">
        &quot;Just because you&apos;re lost doesn&apos;t mean you can&apos;t dance...&quot;
        </p>
      </div>
    </div>
  );
}