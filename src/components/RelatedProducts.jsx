// src/components/RelatedProducts.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function RelatedProducts({ products = [] }) {
  // Filter out products with missing required data
  const validProducts = products.filter(product => 
    product && 
    product._id && 
    product.title && 
    product.slug && 
    product.slug.current && 
    typeof product.price === 'number' && 
    product.images && 
    product.images.length > 0 && 
    product.images[0].url
  );

  if (validProducts.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {validProducts.map((product) => (
        <div key={product._id} className="group">
          <Link href={`/product/${product.slug.current}`}>
            <div className="relative aspect-square mb-3 overflow-hidden rounded-lg border border-gray-800 bg-gray-900 transition-all duration-300 group-hover:border-purple-600">
              <Image 
                src={product.images[0].url} 
                alt={product.images[0].alt || product.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {typeof product.stock === 'number' && product.stock <= 0 && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <span className="text-lg font-semibold text-red-500">Sold Out</span>
                </div>
              )}
            </div>
            <h3 className="text-lg font-semibold mb-1 group-hover:text-purple-300 transition-colors">
              {product.title}
            </h3>
            <p className="text-gray-400">${product.price.toFixed(2)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}