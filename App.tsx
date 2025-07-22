import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartPopup from './components/CartPopup';
import { CartProvider } from './components/CartContext';
import NewArrivalCarousel from './components/NewArrivalCarousel';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [products, setProducts] = useState<any[]>([]);

  return (
    <CartProvider>
      <Helmet>
        <title>Minus One - Fashion Premium</title>
        <meta name="description" content="Tingkatkan gaya Anda dengan koleksi fashion premium Minus One. Belanja mudah, harga terbaik, dan layanan profesional." />
        <meta property="og:title" content="Minus One - Fashion Premium" />
        <meta property="og:description" content="Tingkatkan gaya Anda dengan koleksi fashion premium Minus One. Belanja mudah, harga terbaik, dan layanan profesional." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen}
          isRegisterOpen={isRegisterOpen}
          setIsRegisterOpen={setIsRegisterOpen}
          products={products}
        />
        <CartPopup />
        <Hero />
        <Categories />
        <NewArrivalCarousel />
        <ProductGrid onProductsLoad={setProducts} />
        <Newsletter />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;