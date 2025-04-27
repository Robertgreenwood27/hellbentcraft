// src/components/admin/OrdersTable.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

export default function OrdersTable({ orders: initialOrders }) {
  const [orders, setOrders] = useState(initialOrders);
  const [sortField, setSortField] = useState('createdAt');
  const [sortDirection, setSortDirection] = useState('desc');
  
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    
    const sortedOrders = [...orders].sort((a, b) => {
      let valueA = a[field];
      let valueB = b[field];
      
      if (field === 'customer') {
        valueA = a.customer.name;
        valueB = b.customer.name;
      } else if (field === 'total') {
        valueA = parseFloat(a.total);
        valueB = parseFloat(b.total);
      }
      
      if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    
    setOrders(sortedOrders);
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
            <SortableHeader field="orderId">Order ID</SortableHeader>
            <SortableHeader field="customer">Customer</SortableHeader>
            <SortableHeader field="createdAt">Date</SortableHeader>
            <SortableHeader field="status">Status</SortableHeader>
            <SortableHeader field="total">Total</SortableHeader>
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