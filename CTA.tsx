import React from 'react';
import { ArrowRight, CreditCard, Phone } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <CreditCard className="h-8 w-8 text-red-200 mr-3 animate-pulse" />
              <span className="text-red-200 font-medium">Siap Memulai?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bergabung dengan Cardinal Hari Ini
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Ribuan bisnis Indonesia telah mempercayai Cardinal untuk mengelola pembayaran digital mereka. 
              Saatnya Anda bergabung dan rasakan perbedaannya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group focus:ring-2 focus:ring-white/50 active:scale-95" aria-label="Daftar Gratis">
                Daftar Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center focus:ring-2 focus:ring-white/50 active:scale-95" aria-label="Hubungi Sales">
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Sales
              </button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group hover:shadow-2xl transition-shadow duration-300">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="transition-transform duration-200 group-hover:scale-105">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-red-200">Customer Support</div>
                </div>
                <div className="transition-transform duration-200 group-hover:scale-105">
                  <div className="text-3xl font-bold text-white mb-2">0%</div>
                  <div className="text-red-200">Setup Fee</div>
                </div>
                <div className="transition-transform duration-200 group-hover:scale-105">
                  <div className="text-3xl font-bold text-white mb-2">5 Menit</div>
                  <div className="text-red-200">Quick Integration</div>
                </div>
                <div className="transition-transform duration-200 group-hover:scale-105">
                  <div className="text-3xl font-bold text-white mb-2">Bank Indonesia</div>
                  <div className="text-red-200">Regulated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;