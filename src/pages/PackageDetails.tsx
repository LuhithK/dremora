import React, { useState } from 'react';
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
  EnvelopeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const PackageDetails = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Package data
  const packageData = {
    1: {
      title: "Sri Lanka Holiday Package 3 Days",
      duration: "3 Days",
      nights: "2 Nights",
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
        "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      overview: "Perfect short getaway covering Colombo city tour, Kandy Temple of Tooth, and scenic Peradeniya Botanical Gardens. This package is ideal for travelers with limited time who want to experience the cultural highlights of Sri Lanka.",
      highlights: [
        "Colombo City Tour with shopping",
        "Temple of the Sacred Tooth Relic",
        "Royal Botanical Gardens Peradeniya",
        "Traditional Cultural Show",
        "Local cuisine experiences"
      ],
      destinations: ["Colombo", "Kandy"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Colombo",
          description: "Welcome to Sri Lanka! Begin your journey in the vibrant capital city.",
          activities: [
            "Airport pickup and transfer to hotel",
            "Colombo city tour including Independence Square",
            "Visit Gangaramaya Temple",
            "Shopping at local markets",
            "Overnight in Colombo"
          ],
          meals: ["Dinner"],
          accommodation: "3-star hotel in Colombo"
        },
        {
          day: 2,
          title: "Colombo to Kandy",
          description: "Journey to the cultural capital and explore ancient temples.",
          activities: [
            "Early morning departure to Kandy",
            "Visit Temple of the Sacred Tooth Relic",
            "Explore Kandy Lake and city center",
            "Visit Royal Botanical Gardens Peradeniya",
            "Traditional cultural show in the evening",
            "Overnight in Kandy"
          ],
          meals: ["Breakfast", "Dinner"],
          accommodation: "3-star hotel in Kandy"
        },
        {
          day: 3,
          title: "Kandy to Colombo Departure",
          description: "Final day with optional activities before departure.",
          activities: [
            "Morning at leisure or optional activities",
            "Visit local spice garden",
            "Return journey to Colombo",
            "Transfer to airport for departure"
          ],
          meals: ["Breakfast"],
          accommodation: "Day use only"
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
      ],
      bestTime: "December to March",
      difficulty: "Easy",
      groupSize: "2-8 people"
    },
    2: {
      title: "Sri Lanka Holiday Package 4 Days",
      duration: "4 Days",
      nights: "3 Nights",
      location: "Kandy, Sigiriya, Dambulla",
      price: 350,
      originalPrice: 420,
      rating: 4.7,
      reviews: 112,
      maxGuests: 8,
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
      gallery: [
        "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      overview: "Quick cultural and nature tour covering Kandy, Sigiriya, and Dambulla with comfortable accommodations. Experience the best of Sri Lanka's cultural triangle in just 4 days.",
      highlights: [
        "Sigiriya Rock Fortress climb",
        "Temple of the Sacred Tooth Relic",
        "Dambulla Cave Temple complex",
        "Traditional village experience",
        "Local cuisine tasting"
      ],
      destinations: ["Kandy", "Sigiriya", "Dambulla"],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Kandy",
          description: "Arrive and explore the cultural capital of Sri Lanka.",
          activities: [
            "Airport pickup and transfer to Kandy",
            "Visit Temple of the Sacred Tooth Relic",
            "Kandy Lake walk",
            "Traditional cultural show",
            "Overnight in Kandy"
          ],
          meals: ["Dinner"],
          accommodation: "3-star hotel in Kandy"
        },
        {
          day: 2,
          title: "Kandy to Sigiriya",
          description: "Journey to the ancient rock fortress.",
          activities: [
            "Morning departure to Sigiriya",
            "Check-in to hotel",
            "Village tour with traditional lunch",
            "Sunset at Pidurangala Rock",
            "Overnight in Sigiriya"
          ],
          meals: ["Breakfast", "Lunch", "Dinner"],
          accommodation: "3-star hotel in Sigiriya"
        },
        {
          day: 3,
          title: "Sigiriya & Dambulla",
          description: "Explore ancient wonders and cave temples.",
          activities: [
            "Early morning Sigiriya Rock climb",
            "Visit Dambulla Cave Temple",
            "Explore local markets",
            "Return to Colombo",
            "Overnight in Colombo"
          ],
          meals: ["Breakfast", "Dinner"],
          accommodation: "3-star hotel in Colombo"
        },
        {
          day: 4,
          title: "Departure",
          description: "Final day and departure.",
          activities: [
            "Morning at leisure",
            "Last-minute shopping",
            "Transfer to airport for departure"
          ],
          meals: ["Breakfast"],
          accommodation: "Day use only"
        }
      ],
      included: [
        "Airport transfers",
        "Accommodation (3-star hotels)",
        "Daily breakfast and 2 dinners",
        "Transportation with driver/guide",
        "All entrance fees",
        "Village tour with lunch",
        "Cultural show tickets"
      ],
      excluded: [
        "International flights",
        "Some meals as mentioned",
        "Personal expenses",
        "Tips and gratuities",
        "Travel insurance",
        "Visa fees"
      ],
      bestTime: "December to March",
      difficulty: "Moderate",
      groupSize: "2-8 people"
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
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
          >
            Back to Packages
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'itinerary', name: 'Itinerary' },
    { id: 'inclusions', name: 'Inclusions' },
    { id: 'gallery', name: 'Gallery' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={selectedPackage.image}
          alt={selectedPackage.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <button
                onClick={() => navigate('/packages')}
                className="flex items-center space-x-2 text-white/80 hover:text-white mb-4 text-sm"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                <span>Back to All Trips</span>
              </button>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {selectedPackage.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center space-x-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>{selectedPackage.duration} / {selectedPackage.nights}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{selectedPackage.destinations.join(', ')}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <StarSolidIcon className="h-4 w-4 text-yellow-400" />
                  <span>{selectedPackage.rating} ({selectedPackage.reviews} reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Trip</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedPackage.overview}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Trip Highlights</h3>
                      <ul className="space-y-2">
                        {selectedPackage.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{selectedPackage.duration}</div>
                        <div className="text-sm text-gray-600">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{selectedPackage.difficulty}</div>
                        <div className="text-sm text-gray-600">Difficulty</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{selectedPackage.groupSize}</div>
                        <div className="text-sm text-gray-600">Group Size</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Itinerary Tab */}
                {activeTab === 'itinerary' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">Detailed Itinerary</h3>
                    <div className="space-y-6">
                      {selectedPackage.itinerary.map((day, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                {day.day}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                Day {day.day}: {day.title}
                              </h4>
                              <p className="text-gray-600 text-sm mb-3">{day.description}</p>
                              
                              <div className="space-y-3">
                                <div>
                                  <h5 className="font-medium text-gray-900 mb-2">Activities:</h5>
                                  <ul className="space-y-1">
                                    {day.activities.map((activity, actIndex) => (
                                      <li key={actIndex} className="text-gray-600 text-sm flex items-start space-x-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>{activity}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="font-medium text-gray-900">Meals: </span>
                                    <span className="text-gray-600">{day.meals.join(', ')}</span>
                                  </div>
                                  <div>
                                    <span className="font-medium text-gray-900">Accommodation: </span>
                                    <span className="text-gray-600">{day.accommodation}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Inclusions Tab */}
                {activeTab === 'inclusions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center space-x-2">
                          <CheckCircleIcon className="h-5 w-5" />
                          <span>What's Included</span>
                        </h3>
                        <ul className="space-y-2">
                          {selectedPackage.included.map((item, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center space-x-2">
                          <XMarkIcon className="h-5 w-5" />
                          <span>What's Not Included</span>
                        </h3>
                        <ul className="space-y-2">
                          {selectedPackage.excluded.map((item, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <XMarkIcon className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Gallery Tab */}
                {activeTab === 'gallery' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">Photo Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedPackage.gallery.map((image, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-200"
                          onClick={() => {
                            setCurrentImageIndex(index);
                            setShowGallery(true);
                          }}
                        >
                          <img
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
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

              {/* Trip Info */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <ClockIcon className="h-4 w-4" />
                    <span>Duration</span>
                  </div>
                  <span className="font-medium">{selectedPackage.duration} / {selectedPackage.nights}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>Max Guests</span>
                  </div>
                  <span className="font-medium">{selectedPackage.maxGuests}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <StarIcon className="h-4 w-4" />
                    <span>Rating</span>
                  </div>
                  <span className="font-medium">{selectedPackage.rating}/5 ({selectedPackage.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Best Time</span>
                  </div>
                  <span className="font-medium">{selectedPackage.bestTime}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 mb-6">
                <Link
                  to={`/booking/${packageId}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center block"
                >
                  Book This Trip
                </Link>
                <a
                  href="#quote-section"
                  className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center block"
                >
                  Get Custom Quote
                </a>
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t border-gray-200">
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
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <img
              src={selectedPackage.gallery[currentImageIndex]}
              alt={`Gallery ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {selectedPackage.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetails;