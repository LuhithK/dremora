import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search data:', searchData);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Discover the Beauty of
              <span className="block text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sri Lanka
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Experience unforgettable adventures with our expertly crafted tour packages. 
              From pristine beaches to ancient temples, create memories that last a lifetime.
            </motion.p>
          </div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                {/* Destination */}
                <div className="space-y-2">
                  <label className="block text-white text-sm font-medium">Destination</label>
                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      value={searchData.destination}
                      onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select destination</option>
                      <option value="kandy">Kandy</option>
                      <option value="galle">Galle</option>
                      <option value="ella">Ella</option>
                      <option value="sigiriya">Sigiriya</option>
                      <option value="nuwara-eliya">Nuwara Eliya</option>
                    </select>
                  </div>
                </div>

                {/* Check In */}
                <div className="space-y-2">
                  <label className="block text-white text-sm font-medium">Check In</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      value={searchData.checkIn}
                      onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Check Out */}
                <div className="space-y-2">
                  <label className="block text-white text-sm font-medium">Check Out</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      value={searchData.checkOut}
                      onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="block text-white text-sm font-medium">Guests</label>
                  <div className="relative">
                    <UserGroupIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      value={searchData.guests}
                      onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                  <span>Search Tours</span>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-gray-300 text-sm">Tour Packages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
              <div className="text-gray-300 text-sm">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">5</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;