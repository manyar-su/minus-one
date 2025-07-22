import React, { useState } from 'react';
import { Mail, Gift, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      setSuccess(false);
      return;
    }
    setError('');
    setSuccess(true);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 400);
    setTimeout(() => setSuccess(false), 2000);
    setEmail('');
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Gift className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get 15% Off Your First Order
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and be the first to know about new arrivals, 
            exclusive offers, and fashion tips.
          </p>
          <form className="max-w-md mx-auto" onSubmit={handleSubscribe}>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className={`bg-white text-black px-8 py-4 rounded-lg font-semibold transition-colors relative overflow-hidden ${isAnimating ? 'scale-110' : ''}`}
                style={{ transition: 'transform 0.2s' }}
              >
                {success ? (
                  <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500 animate-bounce" /> Subscribed!</span>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
            {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;