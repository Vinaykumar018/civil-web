import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Mission & Vision', path: '/mission' },
    { name: 'Our Philosophy', path: '/philosophy' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo with Image */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center rounded-lg p-1 border border-gray-300">
              <img 
                src="/images/0.png" 
                alt="Lallan Singh Contractor Logo" 
                className="h-12 w-12 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  // Fallback if image doesn't load
                  const fallback = document.createElement('div');
                  fallback.className = 'bg-blue-900 text-white p-2 rounded flex items-center justify-center font-bold monospace text-sm';
                  fallback.textContent = 'LSC';
                  e.target.parentNode.appendChild(fallback);
                }}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Lallan Singh</h1>
              <p className="text-sm text-gray-600">Contractor Pvt. Ltd.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition duration-300 ${
                  location.pathname === item.path
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact CTA - Desktop */}
          <div className="hidden lg:block">
            <Link 
              to="/contact" 
              className="bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 shadow-md hover:shadow-lg text-sm"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-2 px-4 rounded-lg transition duration-300 ${
                    location.pathname === item.path
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-200">
                <Link 
                  to="/contact" 
                  className="block bg-blue-900 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header