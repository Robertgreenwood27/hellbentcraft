// src/components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/hellbent-logo.png" 
                alt="Hellbent Craft" 
                width={40} 
                height={40}
              />
              <span className="font-bold text-xl text-purple-300">Hellbent Craft</span>
            </Link>
            
            <p className="text-sm text-gray-400">
              Handcrafted gothic art and curiosities for the darkly inclined. Each piece is 
              meticulously created to bring a touch of the macabre to your space.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-300">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="hover:text-purple-300 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=sculptures" className="hover:text-purple-300 transition-colors">
                  Sculptures
                </Link>
              </li>
              <li>
                <Link href="/shop?category=jewelry" className="hover:text-purple-300 transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link href="/shop?category=art" className="hover:text-purple-300 transition-colors">
                  Art Prints
                </Link>
              </li>
              <li>
                <Link href="/shop?category=oddities" className="hover:text-purple-300 transition-colors">
                  Oddities
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-300">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-purple-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-purple-300 transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-purple-300 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-purple-300 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-300">Connect</h3>
            
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 011.141.195v3.325a8.623 8.623 0 00-.653-.036 26.805 26.805 0 00-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 00-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z"/>
                </svg>
              </a>
              <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.56 3.46c0-.893.028-1.16.356-1.76.223-.372 1.254-1.285 3.75-1.285 2.94 0 4.303 1.248 4.303 3.802 0 1.514-.892 3.655-2.368 3.655-.558 0-.893-.446-.893-.96 0-.96.967-1.636.967-2.632 0-.762-.558-1.34-1.636-1.34-1.34 0-2.107 1.116-2.107 3.096 0 .596.074 1.23.223 1.862l.967 5.576c.223 1.415.967 2.83.967 4.08 0 1.675-1.043 2.83-2.733 2.83-2.46 0-4.006-2.01-4.82-4.894-.148-.558-.446-1.974-.818-3.913-.372-1.938-.67-3.506-.818-4.302C3.38 3.05 1.744 2.1.33 2.1v-.967h4.6c1.16 0 1.79.893 1.937 2.33l1.693 8.33z"/>
                </svg>
              </a>
            </div>
            
            <h3 className="text-lg font-bold mb-4 text-purple-300">Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-800 hover:bg-purple-700 text-white rounded-md border border-purple-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
        <Link href="/admin/login" className="hover:no-underline">
  <p>&copy; {new Date().getFullYear()} Hellbent Craft. All rights reserved.</p>
</Link>
        </div>
      </div>
    </footer>
  );
}