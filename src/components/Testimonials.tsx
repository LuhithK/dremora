import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Watson",
      location: "London, UK",
      rating: 5,
      text: "Dremora Tours provided an absolutely magical experience! The ancient kingdoms tour was perfectly organized, and our guide's knowledge of Sri Lankan history was exceptional.",
      image: "/images/testimonials/customer-1.jpg"
    },
    {
      id: 2,
      name: "James Rodriguez",
      location: "Toronto, Canada",
      rating: 5,
      text: "The hill country tour was breathtaking! Every detail was perfectly planned, from the scenic train rides to the tea plantation visits. Highly recommend Dremora Tours!",
      image: "/images/testimonials/customer-2.jpg"
    },
    {
      id: 3,
      name: "Sarah Mitchell",
      location: "Melbourne, Australia",
      rating: 5,
      text: "Our coastal adventure was absolutely perfect! The whale watching in Mirissa and exploring Galle Fort were unforgettable. Professional service throughout!",
      image: "/images/testimonials/customer-3.jpg"
    },
    {
      id: 4,
      name: "Michael Thompson",
      location: "New York, USA",
      rating: 5,
      text: "Exceptional service and attention to detail! The wildlife safari exceeded all expectations. We spotted leopards, elephants, and countless exotic birds. Amazing!",
      image: "/images/testimonials/customer-4.jpg"
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0"
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-3xl p-12 text-white">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
                <div className="text-blue-100">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">75+</div>
                <div className="text-blue-100">Tour Packages</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Destinations</div>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;