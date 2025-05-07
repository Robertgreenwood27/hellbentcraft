'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cartContext';

export default function Header() {
  const { cart, cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/hellbent-logo.png" 
            alt="Hellbent Craft" 
            width={40} 
            height={40}
          />
          <span className="font-bold text-xl text-purple-300 hidden sm:inline">Hellbent Craft</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/cart"
            className="relative p-2"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
            
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-4 py-4 space-y-4">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/shop" onClick={() => setIsMenuOpen(false)}>Shop</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="text-gray-300 hover:text-purple-300 transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link 
      href={href} 
      className="block text-gray-300 hover:text-purple-300 transition-colors py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}