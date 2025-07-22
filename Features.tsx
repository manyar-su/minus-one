import React from 'react';
import { CreditCard, Smartphone, Shield, Users, Zap, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Payment Gateway",
      description: "Terima pembayaran dari berbagai metode seperti kartu kredit, e-wallet, dan transfer bank dengan keamanan tingkat enterprise.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Payment",
      description: "Solusi pembayaran mobile yang terintegrasi dengan semua platform e-wallet populer di Indonesia seperti GoPay, OVO, dan DANA.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Shield,
      title: "Keamanan Berlapis",
      description: "Sistem keamanan berlapis dengan enkripsi end-to-end dan sertifikasi PCI DSS untuk melindungi setiap transaksi.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Users,
      title: "Merchant Dashboard",
      description: "Dashboard lengkap untuk mengelola transaksi, laporan keuangan, dan analisis bisnis dalam satu platform terpadu.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Zap,
      title: "Instant Settlement",
      description: "Pencairan dana instan ke rekening bank Anda dengan biaya kompetitif dan proses yang transparan.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description: "Analisis mendalam tentang performa bisnis dengan insights real-time untuk mengoptimalkan strategi penjualan Anda.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fitur Lengkap untuk Bisnis Digital
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan semua yang Anda butuhkan untuk menjalankan bisnis digital yang sukses 
            dengan platform pembayaran terlengkap di Indonesia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 group focus-within:ring-2 focus-within:ring-red-200" tabIndex={0} aria-label={feature.title}>
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-focus:scale-110 transition-transform duration-200 animate-pulse`}>
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;