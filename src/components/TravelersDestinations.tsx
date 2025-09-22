import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  MapPinIcon,
  ClockIcon,
  StarIcon,
  CameraIcon
} from '@heroicons/react/24/outline';

const TravelersDestinations = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      location: "Central Province",
      image: "/images/destinations/sigiriya.jpg",
      description: "Ancient rock fortress with stunning frescoes and panoramic views",
      rating: 4.9,
      duration: "Half Day",
      category: "Cultural"
    },
    {
      id: 2,
      name: "Temple of Sacred Tooth",
      location: "Kandy",
      image: "/images/destinations/kandy.jpg",
      description: "Sacred Buddhist temple housing the tooth relic of Buddha",
      rating: 4.8,
      duration: "2-3 Hours",
      category: "Cultural"
    },
    {
      id: 3,
      name: "Nuwara Eliya",
      location: "Central Province",
      image: "/images/destinations/nuwara-eliya.jpg",
      description: "Cool climate hill station with tea plantations and colonial charm",
      rating: 4.7,
      duration: "1-2 Days",
      category: "Nature"
    },
    {
      id: 4,
      name: "Ella",
      location: "Uva Province",
      image: "/images/destinations/ella.jpg",
      description: "Scenic hill town with Nine Arch Bridge and Little Adam's Peak",
      rating: 4.8,
      duration: "1-2 Days",
      category: "Nature"
    },
    {
      id: 5,
      name: "Galle Dutch Fort",
      location: "Southern Province",
      image: "/images/destinations/galle.jpg",
      description: "Historic Dutch colonial fort with charming cobblestone streets",
      rating: 4.6,
      duration: "Half Day",
      category: "Cultural"
    },
    {
      id: 6,
      name: "Yala National Park",
      location: "Southern Province",
      image: "/images/destinations/yala.jpg",
      description: "Premier wildlife destination famous for leopard sightings",
      rating: 4.7,
      duration: "Full Day",
      category: "Wildlife"
    }
  ];

  const handleDestinationClick = () => {
    navigate('/destinations');
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Traveler's Favorite Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most popular destinations in Sri Lanka, carefully selected 
            based on traveler reviews and experiences.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={handleDestinationClick}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {destination.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <StarIcon className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium">{destination.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {destination.name}
                </h3>
                
                <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{destination.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <ClockIcon className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-600">
                    <CameraIcon className="h-4 w-4" />
                    <span className="text-sm font-medium">Explore</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={handleDestinationClick}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Destinations
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelersDestinations;