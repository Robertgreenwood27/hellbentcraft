// src/app/admin/page.js
import { getOrders } from '@/lib/sanity';
import AdminDashboardStats from '@/components/admin/AdminDashboardStats';
import RecentOrders from '@/components/admin/RecentOrders';

export default async function AdminDashboard() {
  const orders = await getOrders();
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 font-serif text-purple-300">
        Dashboard
      </h1>
      
      <AdminDashboardStats orders={orders} />
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 font-serif text-purple-300">
          Recent Orders
        </h2>
        
        <RecentOrders orders={orders.slice(0, 5)} />
      </div>
    </div>
  );
}