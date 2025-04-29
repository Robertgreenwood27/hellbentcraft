// src/app/admin/page.js
import { getOrders, getProducts } from '@/lib/sanity';
import AdminDashboardStats from '@/components/admin/AdminDashboardStats';
import RecentOrders from '@/components/admin/RecentOrders';
import Link from 'next/link';

export default async function AdminDashboard() {
  const orders = await getOrders();
  const products = await getProducts({ limit: 100 });
  const lowStockProducts = products.filter(p => p.stock < 5);
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 font-serif text-purple-300">
        Dashboard
      </h1>
      
      <AdminDashboardStats orders={orders} products={products} />
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold font-serif text-purple-300">
              Recent Orders
            </h2>
            <Link href="/admin/orders" className="text-purple-400 hover:text-purple-300">
              View all →
            </Link>
          </div>
          <RecentOrders orders={orders.slice(0, 5)} />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold font-serif text-purple-300">
              Low Stock Products
            </h2>
            <Link href="/admin/inventory" className="text-purple-400 hover:text-purple-300">
              View all →
            </Link>
          </div>
          <div className="bg-gray-900 rounded-lg border border-gray-800">
            {lowStockProducts.length > 0 ? (
              <ul className="divide-y divide-gray-800">
                {lowStockProducts.map(product => (
                  <li key={product._id} className="p-4 hover:bg-gray-800">
                    <Link href={`/admin/inventory/${product._id}`} className="flex justify-between items-center">
                      <span>{product.title}</span>
                      <span className={`${product.stock === 0 ? 'text-red-400' : 'text-yellow-400'}`}>
                        {product.stock} in stock
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="p-6 text-center text-gray-400">All products are well-stocked</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold font-serif text-purple-300">
            Quick Actions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/inventory/new"
            className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg p-6 text-center"
          >
            <svg className="w-8 h-8 mx-auto mb-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span>Add New Product</span>
          </Link>
          
          <Link
            href={process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "/studio"} 
            className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg p-6 text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-8 h-8 mx-auto mb-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            <span>Open Sanity Studio</span>
          </Link>
          
          <Link
            href="/admin/settings"
            className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg p-6 text-center"
          >
            <svg className="w-8 h-8 mx-auto mb-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>Edit Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}