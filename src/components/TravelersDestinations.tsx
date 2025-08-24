import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from '@heroicons/react/24/outline';

const TravelersDestinations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const destinations = [
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      location: "Central Province",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Ancient rock fortress and palace ruins with stunning frescoes"
    },
    {
      id: 2,
      name: "Ella Nine Arch Bridge",
      location: "Uva Province",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Iconic railway bridge surrounded by lush tea plantations"
    },
    {
      id: 3,
      name: "Galle Dutch Fort",
      location: "Southern Province",
      image: "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Historic fortified city with colonial architecture"
    },
    {
      id: 4,
      name: "Temple of the Tooth",
      location: "Kandy",
      image: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Sacred Buddhist temple housing the tooth relic of Buddha"
    },
    {
      id: 5,
      name: "Yala National Park",
      location: "Southern Province",
      image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premier wildlife destination famous for leopards and elephants"
    },
    {
      id: 6,
      name: "Adam's Peak",
      location: "Central Province",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Sacred mountain peak with breathtaking sunrise views"
    },
    {
      id: 7,
      name: "Mirissa Beach",
      location: "Southern Province",
      image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Pristine beach perfect for whale watching and relaxation"
    },
    {
      id: 8,
      name: "Polonnaruwa Ancient City",
      location: "North Central Province",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Medieval capital with well-preserved ruins and statues"
    },
    {
      id: 9,
      name: "Nuwara Eliya Tea Country",
      location: "Central Province",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Cool climate hill station with scenic tea plantations"
    },
    {
      id: 10,
      name: "Anuradhapura Sacred City",
      location: "North Central Province",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Ancient capital with sacred Buddhist sites and stupas"
    }
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(destinations.length / itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return destinations.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
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
            Traveler's Favorite Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most beloved destinations in Sri Lanka, handpicked by thousands of satisfied travelers
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-orange-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronLeftIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-orange-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronRightIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((destination, index) => (
                        <motion.div
                          key={destination.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group cursor-pointer"
                          onMouseEnter={() => setIsAutoPlaying(false)}
                          onMouseLeave={() => setIsAutoPlaying(true)}
                        >
                          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                              <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              
                              {/* Location Badge */}
                              <div className="absolute top-4 left-4">
                                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                                  <MapPinIcon className="h-4 w-4 text-orange-600" />
                                  <span className="text-sm font-medium text-gray-700">{destination.location}</span>
                                </div>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <h3 className="text-xl font-bold mb-2 group-hover:text-orange-300 transition-colors duration-300">
                                {destination.name}
                              </h3>
                              <p className="text-sm text-gray-200 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                {destination.description}
                              </p>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-orange-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isAutoPlaying ? '⏸️ Auto-play ON' : '▶️ Auto-play OFF'}
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Explore These Amazing Destinations?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let us create a personalized itinerary that includes your favorite destinations
            </p>
            <button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Plan My Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelersDestinations;