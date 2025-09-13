import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  MapPinIcon,
  HeartIcon,
  CheckCircleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Best Price Guarantee",
      description: "We match any competitor's price and ensure you get the best value for your Sri Lankan adventure.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: StarIcon,
      title: "Expert Local Guides",
      description: "Our certified guides have deep local knowledge and years of experience in Sri Lankan tourism.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: ClockIcon,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance throughout your journey, ensuring peace of mind at all times.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: UserGroupIcon,
      title: "Personalized Experiences",
      description: "Tailor-made itineraries designed specifically for your interests, preferences, and budget.",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Happy Travelers" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "5+", label: "Years Experience" },
    { number: "25+", label: "Diffrent tours" }
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
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-600 to-red-600 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-4">
            <GlobeAltIcon className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium text-sm tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Dremora Tours</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With over 5 years of experience, we create unforgettable journeys just for you. 
            Every trip is personalized to match your dreams, and our best price guarantee ensures 
            luxury doesn't break your budget. Our friendly team is available 24/7 to support you 
            wherever you are. From hidden gems to iconic destinations, Tremora takes you beyond 
            the ordinary to make memories that last a lifetime.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full text-center">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-16 translate-y-16"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Trusted by Travelers Worldwide
              </h3>
              <p className="text-lg opacity-90">
                Our commitment to excellence is reflected in these numbers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-white">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 font-medium text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Planning Now
            </button>
            </a>
            <a href="/packages">
              <button className="border-2 border-blue-300 text-blue-600 hover:border-blue-600 hover:text-blue-700 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                View All Packages
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;