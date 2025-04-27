// src/components/admin/AdminAuth.jsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminAuth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    const authCheck = () => {
      const isAuth = localStorage.getItem('hellbentcraft_auth') === 'true';
      setIsAuthenticated(isAuth);
      setIsLoading(false);
      
      // Don't redirect if already on login page
      if (!isAuth && pathname !== '/admin/login') {
        router.push('/admin/login');
      }
    };
    
    authCheck();
  }, [router, pathname]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-purple-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }
  
  return isAuthenticated ? children : null;
}