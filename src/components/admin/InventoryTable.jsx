// src/components/admin/InventoryTable.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function InventoryTable({ products: initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [sortField, setSortField] = useState('title');
  const [sortDirection, setSortDirection] = useState('asc');
  
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    
    const sortedProducts = [...products].sort((a, b) => {
      let valueA = a[field];
      let valueB = b[field];
      
      if (field === 'price' || field === 'stock') {
        valueA = parseFloat(a[field]);
        valueB = parseFloat(b[field]);
      }
      
      if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    
    setProducts(sortedProducts);
  };
  
  const SortableHeader = ({ field, children }) => (
    <th
      className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-1">
        {children}
        {sortField === field && (
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {sortDirection === 'asc' ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            )}
          </svg>
        )}
      </div>
    </th>
  );
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full whitespace-nowrap">
        <thead className="bg-gray-900 text-left">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Image</th>
            <SortableHeader field="title">Product</SortableHeader>
            <SortableHeader field="price">Price</SortableHeader>
            <SortableHeader field="stock">Stock</SortableHeader>
            <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Categories</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-900/50">
              <td className="px-6 py-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src={product.images[0].url}
                    alt={product.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </td>
              <td className="px-6 py-4">
                <Link href={`/admin/inventory/${product._id}`} className="hover:text-purple-300">
                  {product.title}
                </Link>
              </td>
              <td className="px-6 py-4">${product.price.toFixed(2)}</td>
              <td className="px-6 py-4">
                <span className={`${product.stock <= 0 ? 'text-red-400' : product.stock < 5 ? 'text-yellow-400' : 'text-green-400'}`}>
                  {product.stock}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1">
                  {product.categories?.map((category) => (
                    <span 
                      key={category._id} 
                      className="px-2 py-1 bg-gray-800 rounded-full text-xs"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/admin/inventory/${product._id}`}
                    className="text-purple-400 hover:text-purple-300"
                  >
                    Edit
                  </Link>
                  <button
                    className="text-red-400 hover:text-red-300"
                    onClick={() => {
                      if (confirm("Are you sure you want to delete this product?")) {
                        // Will handle delete functionality here
                        alert("Delete functionality will be implemented with Sanity mutations");
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {products.length === 0 && (
        <div className="text-center py-12 bg-gray-900">
          <p className="text-gray-400">No products found</p>
        </div>
      )}
    </div>
  );
}