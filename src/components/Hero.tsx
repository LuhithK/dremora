import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://media1.thrillophilia.com/filestore/zpxe5aul83j9euqc020bjj8dwvcl_1579095457_7.png")`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight tracking-wide text-center"
            >
              Begin Your Dream Vacation with Dremora!
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed font-light tracking-wide text-center"
            >
              Discover hand-crafted journeys with Dremora — your trusted partner in unforgettable experiences.
            </motion.p>
          </div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          >
            <Link 
              to="/packages"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg tracking-wide text-center"
            >
              Explore Packages
            </Link>
            <a 
              href="#quote-section"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg tracking-wide text-center"
            >
              Get a Quote
            </a>
          </motion.div>

          {/* Simple Info Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 max-w-4xl mx-auto mt-16"
          >
            <div className="text-center">
              <div className="text-sm text-white/90 font-light tracking-wide">Best Price Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-white/90 font-light tracking-wide">24/7 Support</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-white/90 font-light tracking-wide">Expert Guides</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;