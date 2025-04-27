// src/app/page.js
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/sanity";

export default async function Home() {
  const featuredProducts = await getProducts({ featured: true, limit: 4 });
  
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-black"></div>
          <Image 
            src="/images/background.png" 
            alt="Gothic background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <Image 
            src="/images/hellbent-logo.png" 
            alt="Hellbent Craft" 
            width={800} 
            height={800}
            className="mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 font-serif">
            <span className="text-purple-300">Hellbent</span> Craft
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Handcrafted gothic art and curiosities for the darkly inclined
          </p>
          <Link 
            href="/shop" 
            className="inline-block bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors border border-purple-600"
          >
            Explore Collection
          </Link>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 font-serif text-center text-purple-300">About The Artist</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg mb-4">
                Hellbent Craft was born from a passion for the macabre and beautiful. Each piece is 
                handcrafted with attention to detail and a touch of the otherworldly.
              </p>
              <p className="text-lg mb-4">
                Drawing inspiration from Victorian gothic aesthetics, horror classics, and the 
                supernatural, every creation tells a story of darkness and wonder.
              </p>
              <Link 
                href="/about" 
                className="inline-block text-purple-400 hover:text-purple-300 font-medium"
              >
                Learn more about the artist →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-purple-300">Featured Creations</h2>
            <Link 
              href="/shop" 
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              View all →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product._id} className="group">
                <Link href={`/product/${product.slug.current}`}>
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-lg border border-gray-800 bg-gray-900 transition-all duration-300 group-hover:border-purple-600">
                    <Image 
                      src={product.images[0].url} 
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.stock <= 0 && (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                        <span className="text-xl font-semibold text-red-500">Sold Out</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400">${product.price.toFixed(2)}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-4 text-purple-300">Join Our Coven</h2>
          <p className="text-lg mb-8">
            Subscribe to receive updates on new creations, exclusive offers, and events.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-purple-800 hover:bg-purple-700 rounded-md font-medium transition-colors border border-purple-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}