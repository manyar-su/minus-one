import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from './CartContext';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  images: string[];
  brand?: string;
  color?: string;
  size?: string[];
}

interface ProductGridProps {
  onProductsLoad?: (products: Product[]) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductsLoad }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { cart, setCart, triggerCartBounce } = useCart();
  const [animatingId, setAnimatingId] = useState<number | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Silk Evening Dress",
      price: "$299",
      originalPrice: "$399",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Dresses",
      isSale: true,
      brand: "Cardinal",
      color: "Black",
      size: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 2,
      name: "Tailored Business Blazer",
      price: "$249",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Jackets & Coats",
      isNew: true,
      brand: "Premium",
      color: "Navy",
      size: ["S", "M", "L", "XL"],
      images: [
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 3,
      name: "Luxury Leather Handbag",
      price: "$149",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Bags",
      brand: "Luxury",
      color: "Brown",
      images: [
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 4,
      name: "Vintage Denim Jacket",
      price: "$89",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Jackets & Coats",
      brand: "Street",
      color: "Blue",
      size: ["M", "L", "XL", "XXL"],
      images: [
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 5,
      name: "Italian Leather Boots",
      price: "$249",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Shoes",
      isNew: true,
      brand: "Luxury",
      color: "Black",
      size: ["7", "8", "9", "10", "11"],
      images: [
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 6,
      name: "Bohemian Floral Maxi Dress",
      price: "$129",
      originalPrice: "$179",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Dresses",
      isSale: true,
      brand: "Cardinal",
      color: "Floral",
      size: ["XS", "S", "M", "L"],
      images: [
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 7,
      name: "Cotton Basic T-Shirt",
      price: "$39",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "T-Shirts",
      brand: "Classic",
      color: "White",
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      images: [
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 8,
      name: "Formal Dress Shirt",
      price: "$89",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Shirts",
      brand: "Premium",
      color: "Blue",
      size: ["S", "M", "L", "XL"],
      images: [
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 9,
      name: "High-Waisted Jeans",
      price: "$119",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Pants & Jeans",
      brand: "Modern",
      color: "Dark Blue",
      size: ["24", "26", "28", "30", "32"],
      images: [
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 10,
      name: "Statement Gold Necklace",
      price: "$199",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Jewelry",
      isNew: true,
      brand: "Luxury",
      color: "Gold",
      images: [
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 11,
      name: "Athletic Performance Top",
      price: "$69",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Activewear",
      brand: "Modern",
      color: "Black",
      size: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 12,
      name: "Silk Blouse",
      price: "$159",
      originalPrice: "$199",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Tops & Blouses",
      isSale: true,
      brand: "Cardinal",
      color: "Cream",
      size: ["XS", "S", "M", "L"],
      images: [
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ];

  React.useEffect(() => {
    if (onProductsLoad) {
      onProductsLoad(products);
    }
  }, [onProductsLoad]);

  const openPopup = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  // Fungsi add to cart
  const addToCart = (product: Product) => {
    setCart(prev => {
      const idx = prev.findIndex(item => item.title === product.name && item.price === product.price);
      if (idx !== -1) {
        // Sudah ada, tambah qty
        return prev.map((item, i) => i === idx ? { ...item, qty: (item.qty || 1) + 1 } : item);
      } else {
        return [...prev, { title: product.name, price: product.price, qty: 1 }];
      }
    });
    triggerCartBounce();
    setAnimatingId(product.id);
    setTimeout(() => setAnimatingId(null), 500);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated selection of premium fashion pieces 
              designed to elevate your wardrobe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${animatingId === product.id ? 'ring-4 ring-green-400 scale-105' : ''}`}>
                {/* Product Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        SALE
                      </span>
                    )}
                  </div>
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <button 
                        onClick={() => openPopup(product)}
                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors shadow-lg" onClick={() => addToCart(product)}>
                        <ShoppingBag className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-black transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Popup Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors shadow-lg"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image Gallery */}
              <div className="relative bg-gray-50">
                <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden">
                  <img
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors shadow-lg"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors shadow-lg"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Indicators */}
                  {selectedProduct.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProduct.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {selectedProduct.category}
                    </span>
                    {selectedProduct.isNew && (
                      <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {selectedProduct.isSale && (
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        SALE
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedProduct.name}
                  </h2>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl font-bold text-gray-900">{selectedProduct.price}</span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">{selectedProduct.originalPrice}</span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Experience luxury and comfort with this premium piece from our exclusive collection. 
                    Crafted with attention to detail and designed for the modern lifestyle.
                  </p>
                  
                  {/* Size Selection */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Size</h4>
                    <div className="flex gap-2">
                      {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                        <button
                          key={size}
                          className="border border-gray-300 hover:border-black px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Color Selection */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Color</h4>
                    <div className="flex gap-2">
                      {['bg-black', 'bg-gray-600', 'bg-blue-600', 'bg-red-600'].map((color, index) => (
                        <button
                          key={index}
                          className={`w-8 h-8 rounded-full ${color} border-2 border-gray-300 hover:border-gray-600 transition-colors`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="space-y-4">
                  <button className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center" onClick={() => addToCart(selectedProduct)}>
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Add to Cart
                  </button>
                  <button className="w-full border-2 border-gray-300 hover:border-black text-gray-700 hover:text-black py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
                    <Heart className="mr-2 h-5 w-5" />
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductGrid;