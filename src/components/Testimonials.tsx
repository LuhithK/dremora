import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Absolutely incredible experience! The cultural triangle tour exceeded all expectations. Our guide was knowledgeable and the accommodations were perfect.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Sydney, Australia",
      rating: 5,
      text: "The hill country escape was magical! From the tea plantations to the Nine Arch Bridge, every moment was picture-perfect. Highly recommend Olanka Travels!",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      text: "Professional service from start to finish. The coastal paradise package was exactly what we needed for our honeymoon. Thank you for the memories!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "Outstanding organization and attention to detail. The wildlife safari was the highlight of our trip. We saw elephants, leopards, and so much more!",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their Sri Lankan adventures with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
                <div className="text-blue-100">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Tour Packages</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Destinations</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;