'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState([
    { id: 1, name: 'قميص أزرق', price: 199, quantity: 1 },
  ])

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-xl hover:text-secondary transition"
      >
        🛒
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-80 bg-white text-gray-800 rounded-lg shadow-xl z-50">
          <div className="p-4 border-b">
            <h3 className="text-lg font-bold">سلة التسوق</h3>
          </div>

          {items.length > 0 ? (
            <>
              <div className="max-h-64 overflow-y-auto p-4 space-y-3">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">الكمية: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{item.price * item.quantity} ريال</p>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-xs text-red-500 hover:text-red-700"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t bg-gray-50">
                <div className="flex justify-between mb-3 font-bold">
                  <span>الإجمالي:</span>
                  <span>{total} ريال</span>
                </div>
                <Link
                  href="/checkout"
                  className="w-full block text-center bg-secondary text-white py-2 rounded hover:bg-yellow-600 transition"
                >
                  الدفع
                </Link>
              </div>
            </>
          ) : (
            <div className="p-4 text-center text-gray-500">السلة فارغة</div>
          )}
        </div>
      )}
    </>
  )
}