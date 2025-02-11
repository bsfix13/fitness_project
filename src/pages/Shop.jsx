import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Premium Yoga Mat',
    category: 'Equipment',
    price: 49.99,
    image: '/products/yoga-mat.jpg',
    description: 'High-quality, non-slip yoga mat perfect for all types of workouts.'
  },
  {
    id: 2,
    name: 'Performance T-Shirt',
    category: 'Apparel',
    price: 29.99,
    image: '/products/tshirt.jpg',
    description: 'Moisture-wicking fabric keeps you cool during intense workouts.'
  },
  {
    id: 3,
    name: 'Whey Protein Powder',
    category: 'Supplements',
    price: 39.99,
    image: '/products/protein.jpg',
    description: 'Premium whey protein for muscle recovery and growth.'
  }
]

const categories = ['All', 'Equipment', 'Apparel', 'Supplements']

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <>
      <Helmet>
        <title>Shop - FitLife</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Shop</h1>
          <div className="flex gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
