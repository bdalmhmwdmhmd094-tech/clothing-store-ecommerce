'use client'

import ProductCard from '@/components/ProductCard'

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'قميص كاجوال أزرق', price: 199, category: 'قمصان', image: '/products/shirt1.jpg', rating: 4.5, reviews: 25 },
    { id: 2, name: 'بنطلون جينز أسود', price: 299, category: 'بنطلونات', image: '/products/jeans1.jpg', rating: 4.8, reviews: 42 },
    { id: 3, name: 'فستان أسود أنيق', price: 399, category: 'فساتين', image: '/products/dress1.jpg', rating: 4.6, reviews: 18 },
    { id: 4, name: 'جاكيت جلد بني', price: 599, category: 'جاكيتات', image: '/products/jacket1.jpg', rating: 4.7, reviews: 33 },
    { id: 5, name: 'تي شيرت رياضي', price: 149, category: 'قمصان', image: '/products/tshirt1.jpg', rating: 4.4, reviews: 15 },
    { id: 6, name: 'تنورة ميدي', price: 249, category: 'تنانير', image: '/products/skirt1.jpg', rating: 4.5, reviews: 22 },
  ]

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">جميع المنتجات</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}