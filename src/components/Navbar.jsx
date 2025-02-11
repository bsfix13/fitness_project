import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              FitLife
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="hover:text-gray-300 px-3 py-2">Home</Link>
              <Link to="/blog" className="hover:text-gray-300 px-3 py-2">Blog</Link>
              <Link to="/shop" className="hover:text-gray-300 px-3 py-2">Shop</Link>
              <Link to="/membership" className="hover:text-gray-300 px-3 py-2">Membership</Link>
              <Link to="/about" className="hover:text-gray-300 px-3 py-2">About</Link>
              <Link to="/contact" className="hover:text-gray-300 px-3 py-2">Contact</Link>
              <Link to="/cart" className="hover:text-gray-300 px-3 py-2">
                <ShoppingCartIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:text-gray-300 px-3 py-2">Home</Link>
            <Link to="/blog" className="block hover:text-gray-300 px-3 py-2">Blog</Link>
            <Link to="/shop" className="block hover:text-gray-300 px-3 py-2">Shop</Link>
            <Link to="/membership" className="block hover:text-gray-300 px-3 py-2">Membership</Link>
            <Link to="/about" className="block hover:text-gray-300 px-3 py-2">About</Link>
            <Link to="/contact" className="block hover:text-gray-300 px-3 py-2">Contact</Link>
            <Link to="/cart" className="block hover:text-gray-300 px-3 py-2">Cart</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
