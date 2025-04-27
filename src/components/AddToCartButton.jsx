// src/components/AddToCartButton.jsx
'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cartContext';

export default function AddToCartButton({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addToCart({
        _id: product._id,
        title: product.title,
        price: product.price,
        image: product.images[0].url,
        slug: product.slug.current,
        quantity
      });
      setIsAdding(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }, 500);
  };
  
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <label htmlFor="quantity" className="text-lg">Quantity:</label>
        <div className="flex items-center border border-gray-700 rounded-md">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="px-3 py-2 border-r border-gray-700 hover:bg-gray-800"
            disabled={quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
            max={product.stock}
            className="w-12 text-center bg-transparent border-none focus:outline-none py-2"
          />
          <button
            onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
            className="px-3 py-2 border-l border-gray-700 hover:bg-gray-800"
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>
      </div>
      
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="w-full bg-purple-800 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-colors border border-purple-600 flex items-center justify-center"
      >
        {isAdding ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Adding...
          </span>
        ) : showSuccess ? (
          <span className="flex items-center">
            <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Added to Cart
          </span>
        ) : (
          "Add to Cart"
        )}
      </button>
    </div>
  );
}