// src/components/admin/AdminSearch.jsx
'use client';

import { useState } from 'react';

export default function AdminSearch({ placeholder = "Search..." }) {
  const [query, setQuery] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Will be implemented when we connect to real data
    alert(`Search functionality will be implemented with Sanity queries: ${query}`);
  };
  
  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 pl-10 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
      />
      <button
        type="submit"
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
      >
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </form>
  );
}