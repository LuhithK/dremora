import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  ClockIcon,
  MapPinIcon,
  StarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Packages' },
    { id: 'cultural', name: 'Cultural Tours' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'beach', name: 'Beach & Coastal' },
    { id: 'wildlife', name: 'Wildlife Safari' },
    { id: 'hill-country', name: 'Hill Country' },
    { id: 'honeymoon', name: 'Honeymoon' }
  ];

  const packages = [
    {
      id: 1,
      title: "Cultural Triangle Adventure",
      description: "Explore ancient kingdoms, magnificent temples, and rich heritage sites including Sigiriya, Polonnaruwa, and Anuradhapura.",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "7 Days",
      location: "Sigiriya, Polonnaruwa",
      price: 850,
      originalPrice: 1200,
      rating: 4.8,
      reviews: 124,
      maxGuests: 8,
      category: 'cultural',
      highlights: ["Ancient Sigiriya Rock", "Temple of the Tooth", "Elephant Safari"]
    },
    {
      id: 2,
      title: "Hill Country Escape",
      description: "Journey through misty mountains, tea plantations, and charming colonial towns in Sri Lanka's beautiful hill country.",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "5 Days",
      location: "Kandy, Ella, Nuwara Eliya",
      price: 650,
      originalPrice: 900,
      rating: 4.9,
      reviews: 89,
      maxGuests: 6,
      category: 'hill-country',
      highlights: ["Nine Arch Bridge", "Tea Factory Visit", "Little Adam's Peak"]
    },
    {
      id: 3,
      title: "Coastal Paradise",
      description: "Relax on pristine beaches, explore historic Galle Fort, and enjoy water sports along Sri Lanka's stunning coastline.",
      image: "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "6 Days",
      location: "Galle, Mirissa, Unawatuna",
      price: 750,
      originalPrice: 1000,
      rating: 4.7,
      reviews: 156,
      maxGuests: 10,
      category: 'beach',
      highlights: ["Whale Watching", "Galle Fort", "Beach Activities"]
    },
    {
      id: 4,
      title: "Wildlife Safari Experience",
      description: "Encounter Sri Lanka's incredible wildlife including elephants, leopards, and exotic birds in their natural habitat.",
      image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4 Days",
      location: "Yala, Udawalawe",
      price: 580,
      originalPrice: 750,
      rating: 4.6,
      reviews: 98,
      maxGuests: 6,
      category: 'wildlife',
      highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching"]
    },
    {
      id: 5,
      title: "Adventure Seeker's Paradise",
      description: "Thrilling adventures including white water rafting, zip-lining, and trekking through Sri Lanka's diverse landscapes.",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "8 Days",
      location: "Kitulgala, Ella, Kandy",
      price: 950,
      originalPrice: 1300,
      rating: 4.8,
      reviews: 76,
      maxGuests: 8,
      category: 'adventure',
      highlights: ["White Water Rafting", "Zip Lining", "Rock Climbing"]
    },
    {
      id: 6,
      title: "Romantic Honeymoon Getaway",
      description: "Perfect romantic escape with luxury accommodations, private dinners, and breathtaking sunset views.",
      image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "7 Days",
      location: "Bentota, Kandy, Nuwara Eliya",
      price: 1200,
      originalPrice: 1600,
      rating: 4.9,
      reviews: 145,
      maxGuests: 2,
      category: 'honeymoon',
      highlights: ["Luxury Resorts", "Private Dinners", "Couple Spa"]
    }
  ];

  // Filter packages based on search and filters
  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
    
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'budget' && pkg.price < 600) ||
                        (priceRange === 'mid' && pkg.price >= 600 && pkg.price < 1000) ||
                        (priceRange === 'luxury' && pkg.price >= 1000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      default:
        return b.reviews - a.reviews; // popular
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tour Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of Sri Lankan tour packages, 
            each designed to offer unique experiences and unforgettable memories.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search packages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="budget">Under $600</option>
                <option value="mid">$600 - $1000</option>
                <option value="luxury">$1000+</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-gray-600">
            Showing {sortedPackages.length} of {packages.length} packages
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${pkg.originalPrice - pkg.price}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <div className="flex items-center space-x-1">
                      <StarSolidIcon className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-semibold">{pkg.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>

                {/* Package Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <ClockIcon className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <UserGroupIcon className="h-4 w-4" />
                      <span>Max {pkg.maxGuests}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{pkg.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.slice(0, 2).map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                    {pkg.highlights.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                        +{pkg.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(pkg.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({pkg.reviews} reviews)</span>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${pkg.price}</span>
                      <span className="text-sm text-gray-500 line-through">${pkg.originalPrice}</span>
                    </div>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                  <Link
                    to={`/booking/${pkg.id}`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {sortedPackages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <FunnelIcon className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No packages found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters to find more packages.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange('all');
                setSortBy('popular');
              }}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Packages;