// src/app/admin/orders/page.js
import { getOrders } from '@/lib/sanity';
import OrdersTable from '@/components/admin/OrdersTable';
import AdminSearch from '@/components/admin/AdminSearch';

export default async function OrdersPage() {
  const orders = await getOrders();
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 font-serif text-purple-300">
        Orders
      </h1>
      
      <AdminSearch placeholder="Search orders..." />
      
      <div className="mt-6">
        <OrdersTable orders={orders} />
      </div>
    </div>
  );
}