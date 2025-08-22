import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden"
        >
          {/* Change gradient colors */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden absolute inset-0"></div>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-20 translate-y-20"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with Our Latest Offers
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about exclusive deals, 
                new destinations, and travel tips for your Sri Lankan adventure.
              </p>
            </motion.div>

            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
            >
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Subscribe Now
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center space-x-3 py-4"
                >
                  <CheckCircleIcon className="h-8 w-8 text-green-300" />
                  <span className="text-xl font-semibold">Thank you for subscribing!</span>
                </motion.div>
              )}
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm opacity-90"
            >
              <div className="flex items-center justify-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-300" />
                <span>Exclusive Deals</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-300" />
                <span>Travel Tips</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-300" />
                <span>New Destinations</span>
              </div>
            </motion.div>

            {/* Privacy Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-6 text-sm opacity-75"
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;