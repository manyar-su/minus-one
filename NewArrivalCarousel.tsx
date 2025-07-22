import React, { useRef, useEffect, useState } from 'react';

const images = [
  // Kemeja
  '/photo/kemeja/5235288.jpg',
  '/photo/kemeja/5235288 (1).jpg',
  '/photo/kemeja/5235289.jpg',
  '/photo/kemeja/5235290.jpg',
  // Jaket
  '/photo/jaket/4964140.jpg',
  '/photo/jaket/4964141.jpg',
  '/photo/jaket/4964142.jpg',
  // Duplikasi untuk infinite
  '/photo/kemeja/5235288.jpg',
  '/photo/kemeja/5235288 (1).jpg',
  '/photo/kemeja/5235289.jpg',
  '/photo/kemeja/5235290.jpg',
  '/photo/jaket/4964140.jpg',
  '/photo/jaket/4964141.jpg',
  '/photo/jaket/4964142.jpg',
];

const NewArrivalCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  let autoScrollId = useRef<number | null>(null);

  // Auto-scroll logic
  useEffect(() => {
    function getHalfScroll() {
      const el = carouselRef.current;
      return el ? el.scrollWidth / 2 : 0;
    }
    function step() {
      if (!isPaused && carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (carouselRef.current.scrollLeft >= getHalfScroll()) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      autoScrollId.current = requestAnimationFrame(step);
    }
    autoScrollId.current = requestAnimationFrame(step);
    return () => {
      if (autoScrollId.current) cancelAnimationFrame(autoScrollId.current);
    };
  }, [isPaused]);

  // Drag-to-scroll
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    function onMouseDown(e: MouseEvent) {
      if (!el) return;
      isDown = true;
      el.classList.add('cursor-grabbing');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      setIsPaused(true);
    }
    function onMouseLeave() {
      if (!el) return;
      isDown = false;
      el.classList.remove('cursor-grabbing');
      setIsPaused(false);
    }
    function onMouseUp() {
      if (!el) return;
      isDown = false;
      el.classList.remove('cursor-grabbing');
      setIsPaused(false);
    }
    function onMouseMove(e: MouseEvent) {
      if (!el) return;
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.2;
      el.scrollLeft = scrollLeft - walk;
    }
    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);
    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Touch support
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    let touchStartX = 0, touchScrollLeft = 0;
    function onTouchStart(e: TouchEvent) {
      if (!el) return;
      touchStartX = e.touches[0].pageX;
      touchScrollLeft = el.scrollLeft;
      setIsPaused(true);
    }
    function onTouchEnd() {
      if (!el) return;
      setIsPaused(false);
    }
    function onTouchMove(e: TouchEvent) {
      if (!el) return;
      const x = e.touches[0].pageX;
      const walk = (x - touchStartX) * 1.2;
      el.scrollLeft = touchScrollLeft - walk;
    }
    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('touchmove', onTouchMove);
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  // Arrow buttons
  const scrollBy = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            New Arrival Gallery
          </h2>
          <p className="text-xl text-gray-600">
            Koleksi terbaru kemeja dan jaket
          </p>
        </div>
        <div className="relative">
          <button onClick={() => scrollBy(-220)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border shadow rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-100">&#8592;</button>
          <button onClick={() => scrollBy(220)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border shadow rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-100">&#8594;</button>
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto scroll-smooth py-4 px-12 hide-scrollbar"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`New Arrival ${i+1}`}
                className="rounded-2xl shadow-lg w-60 h-60 object-cover transition-transform duration-300 hover:scale-105"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalCarousel; 