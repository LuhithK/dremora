import React from 'react';
import { motion } from 'framer-motion';
import {
  MapIcon,
  TruckIcon,
  HomeIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: MapIcon,
      title: "Custom Tours",
      description: "Personalized itineraries crafted just for you"
    },
    {
      icon: TruckIcon,
      title: "Premium Transport",
      description: "Luxury vehicles with expert drivers"
    },
    {
      icon: HomeIcon,
      title: "Luxury Stays",
      description: "Hand-picked premium accommodations"
    },
    {
      icon: StarIcon,
      title: "Expert Guides",
      description: "Local specialists with deep knowledge"
    },
    {
      icon: ShieldCheckIcon,
      title: "Travel Protection",
      description: "Comprehensive coverage for peace of mind"
    },
    {
      icon: ClockIcon,
      title: "24/7 Support",
      description: "Always here when you need us"
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
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-600 to-red-600 rounded-full translate-x-48 -translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Elegant Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-6 py-2 mb-4">
            <StarIcon className="h-5 w-5 text-orange-600" />
            <span className="text-orange-800 font-medium text-sm tracking-wide">Premium Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Dremora</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience luxury travel with our comprehensive suite of premium services
          </p>
        </motion.div>

        {/* Elegant Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 hover:border-orange-200"
            >
              {/* Elegant Icon */}
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Elegant CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-4">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
            <button className="border-2 border-gray-300 text-gray-700 hover:border-orange-600 hover:text-orange-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;