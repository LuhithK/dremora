import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  StarIcon,
  CheckCircleIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const PackageDetails = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();

  // Package data (in real app, this would come from API)
  const packageData = {
    1: {
      title: "Sri Lanka Holiday Package 3 Days",
      duration: "3 Days / 2 Nights",
      location: "Colombo, Kandy",
      price: 280,
      originalPrice: 350,
      rating: 4.8,
      reviews: 124,
      maxGuests: 8,
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200",
      gallery: [
        "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      overview: "Perfect short getaway covering Colombo city tour, Kandy Temple of Tooth, and scenic Peradeniya Botanical Gardens. This package is ideal for travelers with limited time who want to experience the cultural highlights of Sri Lanka.",
      highlights: [
        "Colombo City Tour with shopping",
        "Temple of the Sacred Tooth Relic",
        "Royal Botanical Gardens Peradeniya",
        "Traditional Cultural Show",
        "Local cuisine experiences"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Colombo",
          activities: [
            "Airport pickup and transfer to hotel",
            "Colombo city tour including Independence Square",
            "Visit Gangaramaya Temple",
            "Shopping at local markets",
            "Overnight in Colombo"
          ]
        },
        {
          day: 2,
          title: "Colombo to Kandy",
          activities: [
            "Early morning departure to Kandy",
            "Visit Temple of the Sacred Tooth Relic",
            "Explore Kandy Lake and city center",
            "Visit Royal Botanical Gardens Peradeniya",
            "Traditional cultural show in the evening",
            "Overnight in Kandy"
          ]
        },
        {
          day: 3,
          title: "Kandy to Colombo Departure",
          activities: [
            "Morning at leisure or optional activities",
            "Visit local spice garden",
            "Return journey to Colombo",
            "Transfer to airport for departure"
          ]
        }
      ],
      included: [
        "Airport transfers",
        "Accommodation (3-star hotels)",
        "Daily breakfast",
        "Transportation in air-conditioned vehicle",
        "English-speaking guide",
        "Entrance fees to mentioned sites",
        "Cultural show tickets"
      ],
      excluded: [
        "International flights",
        "Lunch and dinner (except breakfast)",
        "Personal expenses",
        "Tips and gratuities",
        "Travel insurance",
        "Visa fees"
      ]
    },
    2: {
      title: "Sri Lanka Holiday Package 5 Days",
      duration: "5 Days / 4 Nights",
      location: "Sigiriya, Polonnaruwa, Dambulla",
      price: 450,
      originalPrice: 550,
      rating: 4.9,
      reviews: 89,
      maxGuests: 6,
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
      gallery: [
        "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      overview: "Explore the Cultural Triangle with Sigiriya Rock Fortress, Polonnaruwa ancient city, and Dambulla Cave Temple. This package offers a deep dive into Sri Lanka's ancient history and archaeological wonders.",
      highlights: [
        "Sigiriya Rock Fortress climb",
        "Ancient city of Polonnaruwa",
        "Dambulla Cave Temple complex",
        "Minneriya National Park safari",
        "Village tour and traditional lunch"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Dambulla",
          activities: [
            "Airport pickup and transfer to Dambulla",
            "Visit Dambulla Cave Temple",
            "Check-in to hotel",
            "Evening at leisure",
            "Overnight in Dambulla"
          ]
        },
        {
          day: 2,
          title: "Sigiriya Rock Fortress",
          activities: [
            "Early morning climb to Sigiriya Rock",
            "Explore the ancient palace ruins",
            "Visit Sigiriya Museum",
            "Afternoon village tour with traditional lunch",
            "Overnight in Sigiriya area"
          ]
        },
        {
          day: 3,
          title: "Polonnaruwa Ancient City",
          activities: [
            "Full day exploration of Polonnaruwa",
            "Visit Gal Vihara rock sculptures",
            "Explore Royal Palace complex",
            "Archaeological Museum visit",
            "Overnight in Polonnaruwa"
          ]
        },
        {
          day: 4,
          title: "Minneriya Safari",
          activities: [
            "Morning Minneriya National Park safari",
            "Elephant gathering experience",
            "Return to Colombo",
            "Overnight in Colombo"
          ]
        },
        {
          day: 5,
          title: "Departure",
          activities: [
            "Morning at leisure",
            "Last-minute shopping",
            "Transfer to airport for departure"
          ]
        }
      ],
      included: [
        "Airport transfers",
        "Accommodation (4-star hotels)",
        "Daily breakfast",
        "Transportation with driver/guide",
        "All entrance fees",
        "Safari jeep for Minneriya",
        "Village tour with lunch"
      ],
      excluded: [
        "International flights",
        "Lunch and dinner (except mentioned)",
        "Personal expenses",
        "Tips and gratuities",
        "Travel insurance",
        "Visa fees"
      ]
    }
    // Add more package details as needed
  };

  const selectedPackage = packageData[packageId as keyof typeof packageData];

  if (!selectedPackage) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Package not found</h1>
          <button
            onClick={() => navigate('/packages')}
            className="btn-primary"
          >
            Back to Packages
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={selectedPackage.image}
          alt={selectedPackage.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {selectedPackage.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center space-x-6 text-lg"
            >
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5" />
                <span>{selectedPackage.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5" />
                <span>{selectedPackage.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <StarSolidIcon className="h-5 w-5 text-yellow-400" />
                <span>{selectedPackage.rating} ({selectedPackage.reviews} reviews)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate('/packages')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to Packages</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{selectedPackage.overview}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Highlights</h3>
              <ul className="space-y-2">
                {selectedPackage.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {selectedPackage.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Day {day.day}: {day.title}
                    </h3>
                    <ul className="space-y-1">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="text-gray-600 text-sm">
                          • {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Inclusions & Exclusions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-green-600">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {selectedPackage.included.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-red-600">
                    What's Not Included
                  </h3>
                  <ul className="space-y-2">
                    {selectedPackage.excluded.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-4 h-4 border-2 border-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-8"
            >
              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">${selectedPackage.price}</span>
                  <span className="text-lg text-gray-500 line-through">${selectedPackage.originalPrice}</span>
                </div>
                <p className="text-sm text-gray-600">per person</p>
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block">
                  Save ${selectedPackage.originalPrice - selectedPackage.price}
                </div>
              </div>

              {/* Package Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>Duration</span>
                  </div>
                  <span className="font-medium">{selectedPackage.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>Max Guests</span>
                  </div>
                  <span className="font-medium">{selectedPackage.maxGuests}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <StarIcon className="h-4 w-4" />
                    <span>Rating</span>
                  </div>
                  <span className="font-medium">{selectedPackage.rating}/5 ({selectedPackage.reviews} reviews)</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  to={`/booking/${packageId}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center block"
                >
                  Book Now
                </Link>
                <a
                  href="#quote-section"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center block"
                >
                  Get Custom Quote
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <PhoneIcon className="h-4 w-4" />
                    <span>+94 76 921 4087</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <EnvelopeIcon className="h-4 w-4" />
                    <span>dremoratours@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;