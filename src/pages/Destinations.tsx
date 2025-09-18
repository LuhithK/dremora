import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, CameraIcon, ClockIcon } from '@heroicons/react/24/outline';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      location: "Central Province",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Ancient rock fortress and palace ruins with stunning frescoes and panoramic views",
      highlights: ["Ancient Frescoes", "Lion's Gate", "Summit Views", "Water Gardens"],
      bestTime: "Year Round",
      duration: "Half Day"
    },
    {
      id: 2,
      name: "Ella Nine Arch Bridge",
      location: "Uva Province",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Iconic railway bridge surrounded by lush tea plantations and misty mountains",
      highlights: ["Railway Bridge", "Tea Plantations", "Mountain Views", "Train Spotting"],
      bestTime: "Dec - Mar",
      duration: "2-3 Hours"
    },
    {
      id: 3,
      name: "Galle Dutch Fort",
      location: "Southern Province",
      image: "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Historic fortified city with colonial architecture and ocean views",
      highlights: ["Dutch Architecture", "Lighthouse", "Rampart Walk", "Museums"],
      bestTime: "Nov - Apr",
      duration: "Half Day"
    },
    {
      id: 4,
      name: "Temple of the Tooth",
      location: "Kandy",
      image: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Sacred Buddhist temple housing the tooth relic of Buddha",
      highlights: ["Sacred Relic", "Buddhist Architecture", "Evening Prayers", "Cultural Shows"],
      bestTime: "Year Round",
      duration: "2-3 Hours"
    },
    {
      id: 5,
      name: "Yala National Park",
      location: "Southern Province",
      image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premier wildlife destination famous for leopards and elephants",
      highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching", "Safari Experience"],
      bestTime: "Feb - Jul",
      duration: "Full Day"
    },
    {
      id: 6,
      name: "Adam's Peak",
      location: "Central Province",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Sacred mountain peak with breathtaking sunrise views",
      highlights: ["Sunrise Views", "Pilgrimage Site", "Mountain Hiking", "Sacred Footprint"],
      bestTime: "Dec - May",
      duration: "Overnight"
    },
    {
      id: 7,
      name: "Mirissa Beach",
      location: "Southern Province",
      image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Pristine beach perfect for whale watching and relaxation",
      highlights: ["Whale Watching", "Beach Relaxation", "Coconut Hill", "Surfing"],
      bestTime: "Nov - Apr",
      duration: "Full Day"
    },
    {
      id: 8,
      name: "Polonnaruwa Ancient City",
      location: "North Central Province",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Medieval capital with well-preserved ruins and ancient statues",
      highlights: ["Ancient Ruins", "Gal Vihara", "Royal Palace", "Archaeological Museum"],
      bestTime: "Year Round",
      duration: "Half Day"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Sri Lanka's Destinations
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Discover the most beautiful and culturally rich destinations 
              that make Sri Lanka the Pearl of the Indian Ocean.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <MapPinIcon className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">{destination.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{destination.description}</p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <ClockIcon className="h-4 w-4" />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <CameraIcon className="h-4 w-4" />
                        <span>{destination.bestTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;