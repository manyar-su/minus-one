import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 min-h-[80vh]">
          {/* Content */}
          <div className="lg:col-span-5 flex items-center px-4 sm:px-6 lg:px-8 py-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="flex items-center bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="h-4 w-4 mr-2" />
                  New Collection 2025
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Elevate Your
                <span className="block text-gray-600"> Style</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Discover our curated collection of premium fashion pieces that blend 
                contemporary design with timeless elegance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 hover:border-black text-gray-700 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
                  View Lookbook
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">Free</span>
                  <span className="ml-1">Shipping</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">30 Days</span>
                  <span className="ml-1">Returns</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">24/7</span>
                  <span className="ml-1">Support</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:col-span-7 relative">
            <div className="h-full min-h-[500px] lg:min-h-[80vh]">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Fashion model wearing elegant outfit"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 via-transparent to-transparent lg:from-gray-50/60"></div>
              
              {/* Floating price tag */}
              <div className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-xl">
                <div className="text-sm text-gray-500">Starting from</div>
                <div className="text-2xl font-bold text-gray-900">$299</div>
                <div className="text-sm text-gray-500">Premium Collection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;