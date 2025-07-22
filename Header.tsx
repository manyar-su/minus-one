import React from 'react';
import { Menu, X, Search, ShoppingBag, User, Heart, Mail, Lock, Eye, EyeOff, ChevronDown } from 'lucide-react';
import SearchModal from './SearchModal';
import { useCart } from './CartContext';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isRegisterOpen: boolean;
  setIsRegisterOpen: (open: boolean) => void;
  products: any[];
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, isRegisterOpen, setIsRegisterOpen, products }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const categoryMenus = {
    'New Arrivals': [
      'Latest Drops',
      'Trending Now',
      'Pre-Order',
      'Limited Edition'
    ],
    'Women': [
      'Dresses',
      'Tops & Blouses',
      'Jackets & Coats',
      'Pants & Jeans',
      'Skirts',
      'Activewear',
      'Lingerie',
      'Shoes',
      'Bags',
      'Jewelry'
    ],
    'Men': [
      'T-Shirts',
      'Shirts',
      'Jackets',
      'Hoodies & Sweaters',
      'Pants & Jeans',
      'Shorts',
      'Suits',
      'Activewear',
      'Shoes',
      'Accessories'
    ],
    'Accessories': [
      'Bags & Purses',
      'Jewelry',
      'Watches',
      'Sunglasses',
      'Hats & Caps',
      'Belts',
      'Scarves',
      'Tech Accessories'
    ],
    'Sale': [
      'Up to 30% Off',
      'Up to 50% Off',
      'Up to 70% Off',
      'Clearance',
      'End of Season'
    ]
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration data:', formData);
    setIsRegisterOpen(false);
  };

  const openRegister = () => {
    setIsRegisterOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeRegister = () => {
    setIsRegisterOpen(false);
    document.body.style.overflow = 'unset';
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleMouseEnter = (category: string) => {
    setActiveDropdown(category);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const { cartCount, openCart, cartBounce } = useCart();

  return (
    <>
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">Cardinal</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 relative">
            {Object.keys(categoryMenus).map((category) => (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => handleMouseEnter(category)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center group"
                >
                  {category}
                  <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
                </a>
                
                {/* Dropdown Menu */}
                {activeDropdown === category && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    {categoryMenus[category as keyof typeof categoryMenus].map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={openSearch}
              className="text-gray-700 hover:text-black p-2 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-black p-2 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button 
              onClick={openRegister}
              className="text-gray-700 hover:text-black p-2 transition-colors"
            >
              <User className="h-5 w-5" />
            </button>
            <button className={`text-gray-700 hover:text-black p-2 transition-colors relative ${cartBounce ? 'animate-bounce' : ''}`}
              onClick={openCart}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none focus:text-black p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              New Arrivals
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Women
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Men
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Accessories
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Sale
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200 flex justify-center space-x-6">
              <button 
                onClick={openSearch}
                className="text-gray-700 hover:text-black p-2"
              >
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-black p-2">
                <Heart className="h-5 w-5" />
              </button>
              <button 
                onClick={openRegister}
                className="text-gray-700 hover:text-black p-2"
              >
                <User className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-black p-2 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>

    {/* Search Modal */}
    <SearchModal 
      isOpen={isSearchOpen}
      onClose={closeSearch}
      products={products}
    />

    {/* Registration Modal */}
    {isRegisterOpen && (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
            <button
              onClick={closeRegister}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                required
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-black hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-black hover:underline">Privacy Policy</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Create Account
            </button>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <button type="button" className="text-black hover:underline font-medium">
                  Sign In
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    )}
    </>
  );
};

export default Header;