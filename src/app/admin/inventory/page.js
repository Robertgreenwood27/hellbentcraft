// src/app/admin/inventory/page.js
import { getProducts } from '@/lib/sanity';
import InventoryTable from '@/components/admin/InventoryTable';
import AdminSearch from '@/components/admin/AdminSearch';
import Link from 'next/link';

export default async function InventoryPage() {
  const products = await getProducts({ limit: 100 });
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-serif text-purple-300">
          Inventory
        </h1>
        
        <Link
          href="/admin/inventory/new"
          className="bg-purple-800 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium transition-colors border border-purple-600"
        >
          Add New Product
        </Link>
      </div>
      
      <AdminSearch placeholder="Search products..." />
      
      <div className="mt-6">
        <InventoryTable products={products} />
      </div>
    </div>
  );
}