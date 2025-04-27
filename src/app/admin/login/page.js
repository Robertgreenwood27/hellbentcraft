'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // For testing purposes - hardcoded credentials
      // In production, use your API endpoint
      if (email === 'admin@hellbentcraft.com' && password === 'securepassword') {
        localStorage.setItem('hellbentcraft_auth', 'true');
        router.push('/admin');
        return;
      }

      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();

      if (data.success) {
        localStorage.setItem('hellbentcraft_auth', 'true');
        router.push('/admin');
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-900 rounded-lg p-8 border border-gray-800">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-serif text-purple-300">
            Admin Login
          </h1>
          <p className="mt-2 text-gray-400">Enter your credentials to access the admin dashboard</p>
        </div>

        {error && (
          <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-800 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium transition-colors border border-purple-600 flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-purple-400 hover:text-purple-300">
            ← Return to Shop
          </Link>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>For demo purposes, use: admin@hellbentcraft.com / securepassword</p>
        </div>
      </div>
    </div>
  );
}