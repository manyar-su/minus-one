import React from 'react';
import { useCart } from './CartContext';

const CartPopup: React.FC = () => {
  const { cart, setCart, isCartOpen, closeCart } = useCart();
  const popupRef = React.useRef<HTMLDivElement>(null);

  // Hitung total harga
  const total = cart.reduce((sum, item) => sum + (parseInt((item.price||'0').replace(/\D/g, '')) * (item.qty || 1)), 0);

  // Tutup popup jika klik di luar
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (isCartOpen && popupRef.current && !popupRef.current.contains(e.target as Node)) {
        closeCart();
      }
    }
    if (isCartOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isCartOpen, closeCart]);

  // Animasi show/hide
  return (
    <div
      className={`fixed top-20 right-4 z-50 transition-all duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`}
      style={{ minWidth: 320, maxWidth: '100%' }}
      ref={popupRef}
    >
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg w-80 max-w-full p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Keranjang</h3>
          <button onClick={closeCart} className="text-gray-500 hover:text-red-600 text-2xl">&times;</button>
        </div>
        <div className="mb-4 text-gray-800 min-h-[40px]">
          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">Keranjang kosong.</p>
          ) : (
            cart.map((item, idx) => (
              <div key={item.title+idx} className="flex justify-between items-center mb-2">
                <span>{item.title}</span>
                <div className="flex items-center gap-2">
                  <input type="number" min={1} value={item.qty} onChange={e => {
                    const val = Math.max(1, parseInt(e.target.value)||1);
                    setCart(cart => cart.map((c, i) => i === idx ? { ...c, qty: val } : c));
                  }} className="w-12 border rounded text-center transition-transform duration-200" />
                  <span className="font-bold text-red-600 ml-2">{item.price}</span>
                  <button className="text-xl text-gray-400 hover:text-red-600" title="Hapus" onClick={() => setCart(cart => cart.filter((_, i) => i !== idx))}>&#128465;</button>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <>
            <div className="font-bold text-right text-lg text-red-600 mb-2">Total: {total.toLocaleString('id-ID', {style:'currency', currency:'IDR'})}</div>
            <div className="flex justify-between items-center mb-2">
              <span></span>
              <button className="text-sm text-red-600 hover:underline" onClick={() => setCart([])}>Hapus Semua</button>
            </div>
            <div className="flex justify-end">
              <a href="/checkout" className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 text-center block">Checkout</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPopup; 