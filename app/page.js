'use client'

import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import SearchBar from '@/components/SearchBar'
import Filter from '@/components/Filter'

export default function Home() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const mockProducts = [
        { id: 1, name: 'قميص كاجوال أزرق', price: 199, category: 'قمصان', image: '/products/shirt1.jpg', rating: 4.5, reviews: 25 },
        { id: 2, name: 'بنطلون جينز أسود', price: 299, category: 'بنطلونات', image: '/products/jeans1.jpg', rating: 4.8, reviews: 42 },
        { id: 3, name: 'فستان أسود أنيق', price: 399, category: 'فساتين', image: '/products/dress1.jpg', rating: 4.6, reviews: 18 },
        { id: 4, name: 'جاكيت جلد بني', price: 599, category: 'جاكيتات', image: '/products/jacket1.jpg', rating: 4.7, reviews: 33 },
        { id: 5, name: 'تي شيرت رياضي', price: 149, category: 'قمصان', image: '/products/tshirt1.jpg', rating: 4.4, reviews: 15 },
        { id: 6, name: 'تنورة ميدي', price: 249, category: 'تنانير', image: '/products/skirt1.jpg', rating: 4.5, reviews: 22 },
      ]
      setProducts(mockProducts)
      setFilteredProducts(mockProducts)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching products:', error)
      setLoading(false)
    }
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    filterProducts(term, selectedCategory)
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    filterProducts(searchTerm, category)
  }

  const filterProducts = (term, category) => {
    let filtered = products

    if (term) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(term.toLowerCase())
      )
    }

    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category)
    }

    setFilteredProducts(filtered)
  }

  if (loading) {
    return (
      <div className="container py-12">
        <div className="text-center text-gray-500">جاري تحميل المنتجات...</div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <section className="mb-12 bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-2">مرحباً بك في متجرنا</h1>
        <p className="text-lg">اكتشف أجمل المجموعات والعروض الحصرية</p>
      </section>

      <div className="mb-8 space-y-4">
        <SearchBar onSearch={handleSearch} />
        <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryFilter} />
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">المنتجات ({filteredProducts.length})</h2>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            لا توجد منتجات مطابقة لبحثك
          </div>
        )}
      </section>
    </div>
  )
}