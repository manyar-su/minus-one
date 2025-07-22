import React from 'react';
import { Store, Globe, Building2, Truck } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Store,
      title: "E-Commerce",
      description: "Solusi pembayaran lengkap untuk toko online dengan integrasi mudah ke platform populer seperti Shopify, WooCommerce, dan Magento.",
      features: ["Checkout yang mudah", "Multi-payment method", "Fraud protection", "Mobile optimized"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Globe,
      title: "Marketplace",
      description: "Platform pembayaran untuk marketplace dengan fitur split payment, escrow, dan manajemen seller yang komprehensif.",
      features: ["Split payment", "Escrow system", "Seller management", "Real-time reporting"],
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Building2,
      title: "Enterprise",
      description: "Solusi pembayaran enterprise dengan API yang robust, keamanan tingkat bank, dan dukungan volume transaksi tinggi.",
      features: ["Custom API", "White-label solution", "Dedicated support", "SLA guarantee"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Integrasi pembayaran untuk layanan logistik dan delivery dengan COD, instant settlement, dan tracking terintegrasi.",
      features: ["COD management", "Driver app", "Route optimization", "Instant settlement"],
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solusi untuk Setiap Industri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dari startup hingga enterprise, kami menyediakan solusi pembayaran yang disesuaikan 
            dengan kebutuhan spesifik industri Anda.
          </p>
        </div>
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div key={index} className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''} group hover:shadow-2xl transition-shadow duration-300`}> 
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mr-4 animate-pulse group-hover:scale-110 transition-transform duration-200">
                    <solution.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:ring-2 focus:ring-red-200 active:scale-95">
                  Pelajari Lebih Lanjut
                </button>
              </div>
              <div className={`mt-12 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <img
                  className="w-full rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                  src={solution.image}
                  alt={`Ilustrasi solusi ${solution.title}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;