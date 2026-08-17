'use client'

import Link from 'next/link'
import { useState } from 'react'
import Cart from './Cart'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-white shadow-lg">
      <nav className="container py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          👕 متجر الملابس
        </Link>

        <ul className="hidden md:flex space-x-6 gap-4">
          <li>
            <Link href="/" className="hover:text-secondary transition">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-secondary transition">
              المنتجات
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-secondary transition">
              عن المتجر
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-secondary transition">
              اتصل بنا
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Cart />
          <button
            className="md:hidden text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-primary-dark px-4 py-2">
          <ul className="space-y-2">
            <li><Link href="/" className="block hover:text-secondary transition">الرئيسية</Link></li>
            <li><Link href="/products" className="block hover:text-secondary transition">المنتجات</Link></li>
            <li><Link href="/about" className="block hover:text-secondary transition">عن المتجر</Link></li>
            <li><Link href="/contact" className="block hover:text-secondary transition">اتصل بنا</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}