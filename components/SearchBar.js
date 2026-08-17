'use client'

import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث عن المنتجات..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary"
        />
        <button className="absolute left-3 top-3 text-gray-400 hover:text-gray-600">
          🔍
        </button>
      </div>
    </div>
  )
}