// src/app/admin/logout/page.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();
  
  useEffect(() => {
    // Clear authentication
    localStorage.removeItem('hellbentcraft_auth');
    // Redirect to login
    router.push('/admin/login');
  }, [router]);
  
  return (
    <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
      <div className="animate-spin h-8 w-8 border-4 border-purple-500 rounded-full border-t-transparent"></div>
    </div>
  );
}