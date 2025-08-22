import React from 'react';
import { motion } from 'framer-motion';
import {
  MapIcon,
  CameraIcon,
  TruckIcon,
  HomeIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: MapIcon,
      title: "Expert Tour Guides",
      description: "Professional local guides with deep knowledge of Sri Lankan culture, history, and hidden gems."
    },
    {
      icon: TruckIcon,
      title: "Comfortable Transportation",
      description: "Air-conditioned vehicles with experienced drivers for safe and comfortable journeys."
    },
    {
      icon: HomeIcon,
      title: "Premium Accommodations",
      description: "Carefully selected hotels and resorts that offer comfort, quality, and authentic experiences."
    },
    {
      icon: CameraIcon,
      title: "Photography Tours",
      description: "Specialized photography tours to capture the most scenic and culturally rich locations."
    },
    {
      icon: ShieldCheckIcon,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance coverage for peace of mind during your adventures."
    },
    {
      icon: ClockIcon,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you throughout your journey in Sri Lanka."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white">
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
            Why Choose Dremora Tours?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive travel services to ensure your Sri Lankan adventure 
            is seamless, memorable, and exceeds your expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Adventure?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let us create a personalized itinerary that matches your interests, 
              budget, and travel style for an unforgettable Sri Lankan experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Plan My Trip
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;