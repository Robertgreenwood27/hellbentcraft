// src/app/shop/page.js
import Image from "next/image";
import Link from "next/link";
import { getProducts, getCategories } from "@/lib/sanity";

export default async function Shop({ searchParams }) {
  const { category } = searchParams;
  const products = await getProducts({ category });
  const categories = await getCategories();
  
  return (
    <div className="min-h-screen bg-black text-gray-200 pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-center text-purple-300">
          The Collection
        </h1>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link 
            href="/shop" 
            className={`px-4 py-2 rounded-md transition-colors ${!category ? 'bg-purple-800 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/shop?category=${cat.slug.current}`}
              className={`px-4 py-2 rounded-md transition-colors ${category === cat.slug.current ? 'bg-purple-800 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              {cat.title}
            </Link>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}