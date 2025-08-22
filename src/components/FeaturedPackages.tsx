import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ClockIcon, 
  MapPinIcon, 
  StarIcon,
  CurrencyDollarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const FeaturedPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Cultural Triangle Tour",
      description: "Explore Sri Lanka's ancient heritage with visits to Sigiriya Rock Fortress, Polonnaruwa ancient city, and the sacred city of Anuradhapura.",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "5 Days / 4 Nights",
      location: "Sigiriya, Polonnaruwa",
      price: 450,
      originalPrice: 550,
      rating: 4.8,
      reviews: 156,
      maxGuests: 8,
      highlights: ["Sigiriya Rock Fortress", "Ancient Polonnaruwa", "Minneriya Safari"]
    },
    {
      id: 2,
      title: "Hill Country Experience",
      description: "Journey through misty mountains, lush tea plantations, and charming hill stations including Kandy, Nuwara Eliya, and Ella.",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4 Days / 3 Nights",
      location: "Kandy, Ella, Nuwara Eliya",
      price: 380,
      originalPrice: 480,
      rating: 4.9,
      reviews: 142,
      maxGuests: 6,
      highlights: ["Temple of Tooth", "Tea Plantation", "Nine Arch Bridge"]
    },
    {
      id: 3,
      title: "Southern Coast Tour",
      description: "Discover pristine beaches, historic Galle Fort, and enjoy whale watching along Sri Lanka's stunning southern coastline.",
      image: "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "3 Days / 2 Nights",
      location: "Galle, Mirissa, Unawatuna",
      price: 280,
      originalPrice: 350,
      rating: 4.7,
      reviews: 198,
      maxGuests: 10,
      highlights: ["Galle Dutch Fort", "Whale Watching", "Beach Relaxation"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular destinations and experiences, carefully crafted to give you 
            the best of Sri Lanka's natural beauty and cultural heritage.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
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
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/packages"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Packages</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPackages;