import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Premium Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-3 px-4 text-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-300">
              <PhoneIcon className="h-4 w-4" />
              <span className="font-light tracking-wide">+94 11 234 5678</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-300">
              <EnvelopeIcon className="h-4 w-4" />
              <span className="font-light tracking-wide">info@dremoratours.com</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <span className="text-slate-300 font-light tracking-wide">
              Discover Sri Lanka's Hidden Treasures
            </span>
          </div>
        </div>
      </div>

      {/* Main Premium Navigation */}
      <nav className={`w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-xl border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-md shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Premium Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <span className="text-white font-bold text-xl tracking-wider">D</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-slate-800 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                  Dremora Tours
                </span>
                <span className="text-xs text-slate-500 font-light tracking-widest uppercase">
                  Luxury Travel
                </span>
              </div>
            </Link>

            {/* Desktop Premium Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium text-base tracking-wide transition-all duration-300 group ${
                    location.pathname === item.path
                      ? 'text-orange-600'
                      : 'text-slate-700 hover:text-orange-600'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
              
              {/* Premium CTA Button */}
              <button className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium text-sm py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                <span className="relative z-10 tracking-wide">Book Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-xl text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Premium Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-4 rounded-xl text-base font-medium tracking-wide transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-orange-600 bg-orange-50 border-l-4 border-orange-600'
                        : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-6 py-4">
                  <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium text-sm py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wide">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;