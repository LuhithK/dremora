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
    },
    {
      icon: MapPinIcon,
      title: "Hidden Gems Access",
      description: "Exclusive access to off-the-beaten-path locations that most tourists never discover.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: HeartIcon,
      title: "Sustainable Tourism",
      description: "Committed to responsible travel that benefits local communities and preserves Sri Lanka's beauty.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Travelers", icon: UserGroupIcon },
    { number: "4.9/5", label: "Average Rating", icon: StarIcon },
    { number: "8+", label: "Years Experience", icon: ClockIcon },
    { number: "25+", label: "Destinations", icon: MapPinIcon }
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
    <section className="py-20 bg-white relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <GlobeAltIcon className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium text-sm tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Dremora Tours</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With years of expertise and a passion for showcasing Sri Lanka's beauty, 
            we create unforgettable experiences that go beyond ordinary tourism.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
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
          className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-20 translate-y-20"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Travelers Worldwide
              </h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Our commitment to excellence is reflected in these numbers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <stat.icon className="h-8 w-8 text-blue-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 font-medium">
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <CheckCircleIcon className="h-8 w-8 text-green-500 mr-3" />
                <span className="text-lg font-semibold text-gray-900">Ready to Start Your Adventure?</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Let's Plan Your Perfect Sri Lankan Journey
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Contact our travel experts today and discover why thousands of travelers choose Dremora Tours for their Sri Lankan adventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Planning Now
                </button>
                <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  View All Packages
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;