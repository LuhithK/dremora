import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const FloatingQuoteButton = () => {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={scrollToQuote}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <ChatBubbleLeftRightIcon className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
      <div className="absolute -top-12 right-0 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Get a Quote
      </div>
    </motion.button>
  );
};

export default FloatingQuoteButton;