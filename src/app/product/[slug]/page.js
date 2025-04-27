// src/app/product/[slug]/page.js
import Image from "next/image";
import { getProduct, getRelatedProducts } from "@/lib/sanity";
import AddToCartButton from "@/components/AddToCartButton";
import RelatedProducts from "@/components/RelatedProducts";
import { PortableText } from "@portabletext/react";

export default async function ProductPage({ params }) {
  const { slug } = params;
  const product = await getProduct(slug);
  const relatedProducts = await getRelatedProducts(product._id, product.categories[0]._id);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  return (
    <div className="min-h-screen bg-black text-gray-200 pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
              <Image 
                src={product.images[0].url} 
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                    <Image 
                      src={image.url} 
                      alt={`${product.title} ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-purple-300">
              {product.title}
            </h1>
            
            <p className="text-2xl mb-6">${product.price.toFixed(2)}</p>
            
            <div className="prose prose-invert max-w-none mb-8">
              <PortableText value={product.description} />
            </div>
            
            {product.dimensions && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Dimensions</h3>
                <p className="text-gray-400">{product.dimensions}</p>
              </div>
            )}
            
            {product.materials && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Materials</h3>
                <p className="text-gray-400">{product.materials}</p>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Availability</h3>
              {product.stock > 0 ? (
                <p className="text-green-500">{product.stock} in stock</p>
              ) : (
                <p className="text-red-500">Sold Out</p>
              )}
            </div>
            
            {product.stock > 0 && (
              <AddToCartButton product={product} />
            )}
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 font-serif text-purple-300">
              You May Also Like
            </h2>
            <RelatedProducts products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
}