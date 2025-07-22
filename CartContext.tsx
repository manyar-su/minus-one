import React, { createContext, useContext, useState, useCallback } from 'react';

interface CartItem {
  title: string;
  price: string;
  qty: number;
}

interface CartContextProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  cartCount: number;
  openCart: () => void;
  closeCart: () => void;
  isCartOpen: boolean;
  cartBounce: boolean;
  triggerCartBounce: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('cart_minusone') || '[]');
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const triggerCartBounce = useCallback(() => {
    setCartBounce(true);
    setTimeout(() => setCartBounce(false), 500);
  }, []);

  // Sync cart to localStorage
  React.useEffect(() => {
    localStorage.setItem('cart_minusone', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, cartCount, openCart, closeCart, isCartOpen, cartBounce, triggerCartBounce }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}; 