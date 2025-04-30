// src/app/about/page.js
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-gray-200 pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-purple-300">
            About Hellbent Craft
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        {/* Main Content */}
        <div className="mb-16">
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg">
              Hellbent Craft began as a passion project, born from a love of gothic aesthetics and 
              handcrafted artistry. Each piece in our collection is meticulously created by hand, 
              bringing a touch of the macabre to your space.
            </p>
            
            <p className="text-lg">
              Our creations draw inspiration from Victorian gothic sensibilities, horror classics, and 
              the mysterious beauty of the supernatural. We believe in quality craftsmanship and 
              attention to detail that celebrates the darker side of art.
            </p>
            
            <p className="text-lg">
              Every item is made with care in our studio, ensuring that when you bring a piece of 
              Hellbent Craft into your home, you&apos;re adding something truly unique and thoughtfully created.
            </p>
          </div>
        </div>
        
        {/* Shop Values */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-16">
          <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300 text-center">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-purple-400">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Handcrafted</h3>
              <p className="text-gray-400">Each piece is made by hand with careful attention to detail</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-purple-400">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic</h3>
              <p className="text-gray-400">True to gothic aesthetics and dark art traditions</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-purple-400">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Unique</h3>
              <p className="text-gray-400">One-of-a-kind pieces that stand out from mass production</p>
            </div>
          </div>
        </div>
        
        {/* Shop CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300">
            Ready to explore our collection?
          </h2>
          <Link 
            href="/shop" 
            className="inline-block bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors border border-purple-600"
          >
            Browse the Shop
          </Link>
        </div>
      </div>
    </div>
  );
}