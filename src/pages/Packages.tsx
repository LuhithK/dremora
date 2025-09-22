import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  ClockIcon,
  MapPinIcon,
  StarIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Trips' },
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
      title: "Sri Lanka Holiday Package 3 Days",
      description: "Perfect short getaway covering Colombo city tour, Kandy Temple of Tooth, and scenic Peradeniya Botanical Gardens.",
      image: "/images/destinations/sigiriya.jpg",
      duration: "3 Days",
      nights: "2 Nights",
      location: "Colombo, Kandy",
      price: 280,
      originalPrice: 350,
      rating: 4.8,
      reviews: 124,
      maxGuests: 8,
      category: 'cultural',
      highlights: ["Colombo City Tour", "Temple of Tooth", "Botanical Gardens"],
      destinations: ["Colombo", "Kandy"]
    },
    {
      id: 2,
      title: "Sri Lanka Holiday Package 4 Days",
      description: "Quick cultural and nature tour covering Kandy, Sigiriya, and Dambulla with comfortable accommodations.",
      image: "/images/packages/adventure-tour.jpg",
      duration: "4 Days",
      nights: "3 Nights",
      location: "Kandy, Sigiriya, Dambulla",
      price: 350,
      originalPrice: 420,
      rating: 4.7,
      reviews: 112,
      maxGuests: 8,
      category: 'cultural',
      highlights: ["Sigiriya Rock", "Temple of Tooth", "Cave Temples"],
      destinations: ["Kandy", "Sigiriya", "Dambulla"]
    },
    {
      id: 3,
      title: "Sri Lanka Holiday Package 5 Days",
      description: "Explore cultural triangle with Sigiriya Rock Fortress, Polonnaruwa ancient city, and Dambulla Cave Temple.",
      image: "/images/packages/adventure-tour.jpg",
      duration: "5 Days",
      nights: "4 Nights",
      location: "Sigiriya, Polonnaruwa, Dambulla",
      price: 450,
      originalPrice: 550,
      rating: 4.9,
      reviews: 89,
      maxGuests: 6,
      category: 'cultural',
      highlights: ["Sigiriya Rock", "Ancient Polonnaruwa", "Dambulla Caves"],
      destinations: ["Sigiriya", "Polonnaruwa", "Dambulla"]
    },
    {
      id: 4,
      title: "Sri Lanka Holiday Package 6 Days",
      description: "Perfect blend of culture and beaches with Colombo, Kandy, Galle Fort, and southern coast relaxation.",
      image: "/images/packages/adventure-tour.jpg",
      duration: "6 Days",
      nights: "5 Nights",
      location: "Colombo, Kandy, Galle",
      price: 520,
      originalPrice: 620,
      rating: 4.8,
      reviews: 134,
      maxGuests: 10,
      category: 'beach',
      highlights: ["Cultural Sites", "Galle Fort", "Beach Time"],
      destinations: ["Colombo", "Kandy", "Galle"]
    },
    {
      id: 5,
      title: "Sri Lanka Holiday Package 7 Days",
      description: "Complete hill country experience with Kandy, Nuwara Eliya, Ella, and scenic train journey through tea plantations.",
      image: "/images/packages/adventure-tour.jpg",
      duration: "7 Days",
      nights: "6 Nights",
      location: "Kandy, Nuwara Eliya, Ella",
      price: 650,
      originalPrice: 750,
      rating: 4.7,
      reviews: 156,
      maxGuests: 10,
      category: 'hill-country',
      highlights: ["Tea Plantations", "Nine Arch Bridge", "Train Journey"],
      destinations: ["Kandy", "Nuwara Eliya", "Ella"]
    },
    {
      id: 6,
      title: "Sri Lanka Holiday Package 8 Days",
      description: "Adventure and wildlife tour with Yala Safari, Ella hiking, white water rafting, and scenic train rides.",
      image: "/images/packages/adventure-tour.jpg",
      duration: "8 Days",
      nights: "7 Nights",
      location: "Yala, Ella, Kitulgala",
      price: 750,
      originalPrice: 850,
      rating: 4.6,
      reviews: 87,
      maxGuests: 6,
      category: 'wildlife',
      highlights: ["Yala Safari", "Adventure Sports", "Scenic Railways"],
      destinations: ["Yala", "Ella", "Kitulgala"]
    },
    {
      id: 7,
      title: "Sri Lanka Holiday Package 10 Days",
      description: "Comprehensive Sri Lanka tour covering cultural sites, hill country, wildlife safari, and southern beaches.",
      image: "/images/packages/adventure-tour.jpg",
      duration: "10 Days",
      nights: "9 Nights",
      location: "Multiple Destinations",
      price: 950,
      originalPrice: 1100,
      rating: 4.6,
      reviews: 98,
      maxGuests: 6,
      category: 'adventure',
      highlights: ["Cultural Triangle", "Hill Country", "Wildlife Safari", "Beach Time"],
      destinations: ["Sigiriya", "Kandy", "Ella", "Yala", "Galle"]
    },
    {
      id: 8,
      title: "Sri Lanka Holiday Package 12 Days",
      description: "Ultimate Sri Lanka experience including all major attractions, wildlife parks, beaches, and cultural heritage sites.",
      image: "/images/packages/adventure-tour.jpg",
      duration: "12 Days",
      nights: "11 Nights",
      location: "Island Wide",
      price: 1200,
      originalPrice: 1400,
      rating: 4.8,
      reviews: 76,
      maxGuests: 8,
      category: 'adventure',
      highlights: ["Complete Island Tour", "All Major Sites", "Wildlife & Beaches"],
      destinations: ["Colombo", "Kandy", "Sigiriya", "Ella", "Yala", "Galle", "Mirissa"]
    },
    {
      id: 9,
      title: "Sri Lanka Holiday Package 14 Days",
      description: "Extended luxury tour with premium accommodations, private guides, and exclusive experiences across the island.",
      image: "/images/packages/adventure-tour.jpg",
      duration: "14 Days",
      nights: "13 Nights",
      location: "Premium Island Tour",
      price: 1500,
      originalPrice: 1750,
      rating: 4.9,
      reviews: 145,
      maxGuests: 2,
      category: 'honeymoon',
      highlights: ["Luxury Accommodations", "Private Guides", "Exclusive Experiences"],
      destinations: ["Colombo", "Kandy", "Sigiriya", "Ella", "Yala", "Galle", "Mirissa", "Bentota"]
    },
    {
      id: 10,
      title: "Sri Lanka Holiday Package 15 Days",
      description: "Ultimate luxury experience covering every corner of Sri Lanka with premium hotels, private transfers, and exclusive access.",
      image: "/images/packages/adventure-tour.jpg",
      duration: "15 Days",
      nights: "14 Nights",
      location: "Complete Sri Lanka",
      price: 1800,
      originalPrice: 2100,
      rating: 5.0,
      reviews: 67,
      maxGuests: 4,
      category: 'honeymoon',
      highlights: ["Complete Island", "Luxury Experience", "Private Services"],
      destinations: ["Colombo", "Kandy", "Sigiriya", "Polonnaruwa", "Ella", "Yala", "Galle", "Mirissa", "Bentota", "Negombo"]
    }
  ];

  // Filter packages
  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All Trips
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our comprehensive collection of Sri Lankan tour packages, 
              each designed to offer unique experiences and unforgettable memories.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search trips..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
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
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-gray-600 text-sm">
            Showing {filteredPackages.length} of {packages.length} trips
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    ${pkg.originalPrice - pkg.price} OFF
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-white rounded px-2 py-1 flex items-center space-x-1">
                    <StarSolidIcon className="h-3 w-3 text-yellow-400" />
                    <span className="text-xs font-medium">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {pkg.title}
                </h3>

                {/* Duration and Location */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{pkg.duration} / {pkg.nights}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>Max {pkg.maxGuests}</span>
                  </div>
                </div>

                {/* Destinations */}
                <div className="mb-3">
                  <div className="flex items-center space-x-1 text-sm text-gray-600 mb-2">
                    <MapPinIcon className="h-4 w-4" />
                    <span>Destinations:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {pkg.destinations.slice(0, 3).map((dest, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                      >
                        {dest}
                      </span>
                    ))}
                    {pkg.destinations.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{pkg.destinations.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {pkg.description}
                </p>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">${pkg.price}</span>
                      <span className="text-sm text-gray-500 line-through">${pkg.originalPrice}</span>
                    </div>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      to={`/package/${pkg.id}`}
                      className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-2 rounded text-sm font-medium transition-colors duration-200"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/booking/${pkg.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>

                {/* Reviews */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarSolidIcon
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(pkg.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span>({pkg.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPackages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No trips found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters to find more trips.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Packages;