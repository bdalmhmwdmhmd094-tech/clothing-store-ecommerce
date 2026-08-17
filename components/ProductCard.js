'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const renderStars = (rating) => {
    return '⭐'.repeat(Math.round(rating))
  }

  return (
    <div className="card">
      <div className="mb-4 bg-gray-200 h-48 rounded-lg overflow-hidden flex items-center justify-center">
        <span className="text-4xl">👔</span>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        <Link href={`/products/${product.id}`} className="hover:text-secondary">
          {product.name}
        </Link>
      </h3>

      <div className="mb-2 text-sm">
        <span className="text-yellow-500">{renderStars(product.rating)}</span>
        <span className="text-gray-600 text-xs mr-2">({product.reviews} تقييم)</span>
      </div>

      <div className="mb-4">
        <span className="text-2xl font-bold text-primary">{product.price} ريال</span>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <label className="text-sm text-gray-600">الكمية:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="w-12 border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleAddToCart}
          className={`flex-1 btn-secondary text-sm ${isAdded ? 'bg-green-500' : ''}`}
        >
          {isAdded ? '✓ تمت الإضافة' : 'أضف للسلة'}
        </button>
        <Link href={`/products/${product.id}`} className="flex-1 btn-primary text-sm text-center">
          التفاصيل
        </Link>
      </div>
    </div>
  )
}