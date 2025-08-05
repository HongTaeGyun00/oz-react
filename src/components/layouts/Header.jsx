import { Link } from 'react-router'

function Header() {
  return (
    <header className="bg-gray-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              🏠 Home
            </Link>
            <Link 
              to="/posts" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              📋 Posts
            </Link>
            <Link 
              to="/info/about" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              ℹ️ About
            </Link>
            <Link 
              to="/info/counter" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              ✅ Counter
            </Link>
            <Link 
              to="/info/location" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              📍 Location
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            My React App
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header 