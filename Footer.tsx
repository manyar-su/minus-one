import React from 'react';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">C</span>
              </div>
              <span className="ml-3 text-xl font-bold" itemProp="name">Cardinal</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed" itemProp="description">
              Premium fashion destination offering curated collections of contemporary 
              and timeless pieces for the modern lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110" aria-label="Instagram" itemProp="sameAs">
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110" aria-label="Twitter" itemProp="sameAs">
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110" aria-label="Facebook" itemProp="sameAs">
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110" aria-label="Email" itemProp="email">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Shop */}
          <nav aria-label="Shop">
            <h3 className="text-lg font-semibold mb-6">Shop</h3>
            <ul className="space-y-4">
              {['New Arrivals', 'Women', 'Men', 'Accessories', 'Shoes', 'Sale'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline" aria-label={item}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Customer Care */}
          <nav aria-label="Customer Care">
            <h3 className="text-lg font-semibold mb-6">Customer Care</h3>
            <ul className="space-y-4">
              {['Size Guide', 'Shipping Info', 'Returns & Exchanges', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline" aria-label={item}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Press', 'Sustainability', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline" aria-label={item}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-3" aria-hidden="true" />
              <span className="text-gray-400" itemProp="address">123 Fashion Street, Jakarta 12345, Indonesia</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-3" aria-hidden="true" />
              <span className="text-gray-400" itemProp="telephone">+62 21 1234 5678</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 <span itemProp="name">Cardinal Fashion</span>. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline" aria-label="Privacy Policy">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline" aria-label="Terms of Service">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline" aria-label="Cookie Policy">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;