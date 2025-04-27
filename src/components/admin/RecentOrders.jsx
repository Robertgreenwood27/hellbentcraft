// src/components/admin/RecentOrders.jsx
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

export default function RecentOrders({ orders }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full whitespace-nowrap">
        <thead className="bg-gray-900 text-left">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {orders.map((order) => (
            <tr key={order._id} className="hover:bg-gray-900/50">
              <td className="px-6 py-4">{order.orderId}</td>
              <td className="px-6 py-4">{order.customer.name}</td>
              <td className="px-6 py-4">{formatDate(order.createdAt)}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  order.status === 'pending' ? 'bg-yellow-900/50 text-yellow-200' :
                  order.status === 'processing' ? 'bg-blue-900/50 text-blue-200' :
                  order.status === 'shipped' ? 'bg-purple-900/50 text-purple-200' :
                  order.status === 'delivered' ? 'bg-green-900/50 text-green-200' :
                  'bg-red-900/50 text-red-200'
                }`}>
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4">${order.total.toFixed(2)}</td>
              <td className="px-6 py-4 text-right">
                <Link
                  href={`/admin/orders/${order._id}`}
                  className="text-purple-400 hover:text-purple-300"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {orders.length === 0 && (
        <div className="text-center py-12 bg-gray-900">
          <p className="text-gray-400">No orders found</p>
        </div>
      )}
    </div>
  );
}