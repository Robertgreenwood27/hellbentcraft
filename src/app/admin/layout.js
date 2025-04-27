// src/app/admin/layout.js
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminAuth from '@/components/admin/AdminAuth';

export default function AdminLayout({ children }) {
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