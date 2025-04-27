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

  const src = `https://www.youtube.com/embed/bS6KWNB5NEo?autoplay=1&mute=${muted ? 1 : 0}&controls=0&loop=1&playlist=bS6KWNB5NEo&showinfo=0&rel=0&modestbranding=1`;

  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe
          className="w-full h-full"
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            pointerEvents: 'none'
          }}
          title="Goth bats dancing"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 text-center z-20 relative">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-purple-300 gothic-title">
          404: The Dance Floor is Empty
        </h1>

        <p className="text-xl mb-8">
          You've wandered into the wrong part of the club. The page you&apos;re looking for is hanging out somewhere else.
        </p>

        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 border border-purple-800 mb-8 max-w-md mx-auto pulse-border">
          <h2 className="text-xl font-bold mb-4 text-purple-300">Did the DJ play the wrong track?</h2>
          <ul className="text-left text-gray-300 mb-4">
            <li className="mb-2">• The URL might be hanging upside down</li>
            <li className="mb-2">• Perhaps this page flew away at dawn</li>
            <li className="mb-2">• Even goths get lost sometimes</li>
          </ul>

          <button
            onClick={() => setMuted(!muted)}
            className="mt-2 px-4 py-2 bg-purple-800 hover:bg-purple-700 rounded-md text-white border border-purple-600 hover-glow"
          >
            Toggle Music
          </button>
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="/"
            className="inline-block bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors border border-purple-600 hover-glow"
          >
            Back to the Main Floor
          </Link>

          <Link
            href="/shop"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors border border-gray-700 hover-glow"
          >
            Browse Our Dark Artifacts
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-400 spooky-text">
          <p>"Just because you&apos;re lost doesn't mean you can&apos;t dance..."</p>
        </div>
      </div>
    </div>
  );
}
