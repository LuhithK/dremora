import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    duration: '',
    travelers: '2',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.destination) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Save quote to localStorage for admin dashboard
    const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
    const newQuote = {
      id: Date.now(),
      ...formData,
      status: 'Pending',
      submittedAt: new Date().toISOString(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    };
    
    quotes.push(newQuote);
    localStorage.setItem('quotes', JSON.stringify(quotes));

    // Create email content
    const emailSubject = `Travel Quote Request - ${formData.destination}`;
    const emailBody = `
Dear Dremora Tours Team,

I would like to request a quote for the following travel details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Destination: ${formData.destination}
Travel Date: ${formData.travelDate}
Duration: ${formData.duration}
Number of Travelers: ${formData.travelers}
Budget Range: ${formData.budget}

Additional Message:
${formData.message}

Please provide me with a detailed quote and itinerary.

Best regards,
${formData.name}
    `.trim();

    // Open email client
    const mailtoLink = `mailto:dremoratours@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink);

    toast.success('Quote request submitted successfully! Your email client will open shortly.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      duration: '',
      travelers: '2',
      budget: '',
      message: ''
    });
  };

  const destinations = [
    'Sigiriya Rock Fortress',
    'Kandy & Temple of Tooth',
    'Ella & Nine Arch Bridge',
    'Galle Dutch Fort',
    'Yala National Park',
    'Nuwara Eliya Tea Country',
    'Mirissa Beach',
    'Polonnaruwa Ancient City',
    'Adam\'s Peak',
    'Bentota Beach',
    'Custom Itinerary'
  ];

  return (
    <section id="quote-section" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your dream Sri Lankan adventure and we'll create a personalized 
            itinerary just for you. Get started with a free, no-obligation quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50"
                    placeholder="+94 77 123 4567"
                  />
                </div>
              </div>

              {/* Travel Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Destination *
                </label>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50"
                  >
                    <option value="">Select a destination</option>
                    {destinations.map((dest, index) => (
                      <option key={index} value={dest}>{dest}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Travel Date
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full py-3 px-4 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50"
                  >
                    <option value="">Select duration</option>
                    <option value="1-3 days">1-3 days</option>
                    <option value="4-7 days">4-7 days</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="2+ weeks">2+ weeks</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Travelers
                  </label>
                  <div className="relative">
                    <UserGroupIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range (USD)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full py-3 px-4 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 - $1000">$500 - $1000</option>
                    <option value="$1000 - $2000">$1000 - $2000</option>
                    <option value="$2000 - $5000">$2000 - $5000</option>
                    <option value="Above $5000">Above $5000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <div className="relative">
                  <ChatBubbleLeftRightIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 resize-none"
                    placeholder="Tell us about your preferences, special requirements, or any questions you have..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
                <span>Get My Free Quote</span>
              </button>
            </form>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Quote Service?</h3>
              <div className="space-y-4">
                {[
                  { title: "100% Free", desc: "No hidden fees or obligations" },
                  { title: "Personalized", desc: "Tailored to your preferences and budget" },
                  { title: "Expert Advice", desc: "Local knowledge and insider tips" },
                  { title: "Quick Response", desc: "Get your quote within 24 hours" },
                  { title: "Best Price", desc: "Competitive rates guaranteed" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="mb-4 opacity-90">
                Our travel experts are here to assist you with any questions about your Sri Lankan adventure.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-4 w-4" />
                  <span>+94 76 921 4087</span>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="h-4 w-4" />
                  <span>dremoratours@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuotationForm;