// src/app/admin/layout.js
'use client'
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminAuth from '@/components/admin/AdminAuth';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  
  // Don't apply authentication to the login page
  if (pathname === '/admin/login') {
    return <div className="min-h-screen bg-black text-gray-200">{children}</div>;
  }
  
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <AdminAuth>
        <div className="flex">
          <AdminSidebar />
          <main className="flex-1 p-8 pt-24 ml-64">
            {children}
          </main>
        </div>
      </AdminAuth>
    </div>
  );
}