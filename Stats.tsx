import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { number: "1M+", label: "Merchant Aktif", description: "Bisnis yang bergabung" },
    { number: "Rp 2.5T+", label: "Volume Transaksi", description: "Total transaksi bulanan" },
    { number: "99.9%", label: "Success Rate", description: "Tingkat keberhasilan transaksi" },
    { number: "< 3 Detik", label: "Processing Time", description: "Waktu pemrosesan rata-rata" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dipercaya Ribuan Bisnis Indonesia
          </h2>
          <p className="text-xl text-gray-600">
            Melayani jutaan transaksi setiap hari dengan performa terbaik di kelasnya
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 group focus-within:ring-2 focus-within:ring-red-200" tabIndex={0} aria-label={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-200 animate-pulse">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Partner logos section */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm font-medium mb-8">DIPERCAYA OLEH BRAND TERKEMUKA</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Tokopedia', 'Shopee', 'Bukalapak', 'Blibli', 'JD.ID', 'Zalora'].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-400 hover:text-red-600 transition-colors duration-200 hover:scale-110 cursor-pointer" tabIndex={0} aria-label={company}>
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;