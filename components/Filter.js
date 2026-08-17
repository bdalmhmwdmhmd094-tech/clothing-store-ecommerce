'use client'

export default function Filter({ selectedCategory, onCategoryChange }) {
  const categories = [
    { value: 'all', label: 'جميع المنتجات' },
    { value: 'قمصان', label: '👔 قمصان' },
    { value: 'بنطلونات', label: '👖 بنطلونات' },
    { value: 'فساتين', label: '👗 فساتين' },
    { value: 'جاكيتات', label: '🧥 جاكيتات' },
    { value: 'تنانير', label: '👛 تنانير' },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(category => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`px-4 py-2 rounded-lg border transition ${
            selectedCategory === category.value
              ? 'bg-secondary text-white border-secondary'
              : 'bg-white text-gray-800 border-gray-300 hover:border-secondary'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}