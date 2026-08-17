export async function GET(request) {
  try {
    const products = [
      { id: 1, name: 'قميص كاجوال أزرق', price: 199, category: 'قمصان', image: '/products/shirt1.jpg', rating: 4.5, reviews: 25 },
      { id: 2, name: 'بنطلون جينز أسود', price: 299, category: 'بنطلونات', image: '/products/jeans1.jpg', rating: 4.8, reviews: 42 },
      { id: 3, name: 'فستان أسود أنيق', price: 399, category: 'فساتين', image: '/products/dress1.jpg', rating: 4.6, reviews: 18 },
      { id: 4, name: 'جاكيت جلد بني', price: 599, category: 'جاكيتات', image: '/products/jacket1.jpg', rating: 4.7, reviews: 33 },
      { id: 5, name: 'تي شيرت رياضي', price: 149, category: 'قمصان', image: '/products/tshirt1.jpg', rating: 4.4, reviews: 15 },
      { id: 6, name: 'تنورة ميدي', price: 249, category: 'تنانير', image: '/products/skirt1.jpg', rating: 4.5, reviews: 22 },
    ]

    return Response.json({
      success: true,
      data: products,
      total: products.length,
    })
  } catch (error) {
    return Response.json({
      success: false,
      message: 'خطأ في جلب المنتجات',
      error: error.message,
    }, { status: 500 })
  }
}