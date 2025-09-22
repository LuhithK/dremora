import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  UserGroupIcon,
  CreditCardIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

type BookingData = {
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
};

type PackageInfo = {
  title: string;
  price: number;
  duration: string;
  image: string;
};

const BookingForm: React.FC = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: '',
    checkOut: '',
    guests: 2,
    specialRequests: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const packageData: Record<string, PackageInfo> = {
    "1": {
      title: "Cultural Triangle Adventure",
      price: 950,
      duration: "7 Days",
      image: "src/assets/images/about/company-story.jpg"
    },
    "2": {
      title: "Hill Country Escape",
      price: 750,
      duration: "5 Days",
      image: "src/assets/images/about/company-story.jpg"
    },
    "3": {
      title: "Coastal Paradise",
      price: 550,
      duration: "6 Days",
      image: "src/assets/images/about/company-story.jpg"
    }
  };

  const selectedPackage = packageData[packageId || ""];

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

  const totalPrice = selectedPackage.price * bookingData.guests;
  const taxes = Math.round(totalPrice * 0.1);
  const finalTotal = totalPrice + taxes;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return bookingData.checkIn && bookingData.checkOut && bookingData.guests > 0;
      case 2:
        return bookingData.firstName && bookingData.lastName && bookingData.email && bookingData.phone;
      case 3:
        return bookingData.cardNumber && bookingData.expiryDate && bookingData.cvv && bookingData.cardName;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      toast.success('Booking confirmed! You will receive a confirmation email shortly.');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const steps = [
    { number: 1, title: 'Travel Details', icon: CalendarIcon },
    { number: 2, title: 'Personal Info', icon: UserGroupIcon },
    { number: 3, title: 'Payment', icon: CreditCardIcon }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/packages')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to Packages</span>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Book Your Trip
          </h1>
          <p className="text-gray-600 mt-2">Complete your booking in just a few simple steps</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                        currentStep >= step.number
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'border-gray-300 text-gray-400'
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircleIcon className="h-6 w-6" />
                      ) : (
                        <step.icon className="h-6 w-6" />
                      )}
                    </div>
                    <div className="ml-3">
                      <p
                        className={`text-sm font-medium ${
                          currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                        }`}
                      >
                        Step {step.number}
                      </p>
                      <p
                        className={`text-sm ${
                          currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                        }`}
                      >
                        {step.title}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-16 h-0.5 mx-4 ${
                          currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form Content */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <form onSubmit={handleSubmit}>
                {/* Your input fields go here */}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className={`flex items-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white hover:scale-105'
                    }`}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeftIcon className="h-5 w-5" />
                    <span>Previous</span>
                  </button>

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Next</span>
                      <ArrowRightIcon className="h-5 w-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                      <span>Complete Booking</span>
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Booking Summary</h3>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{selectedPackage.title}</h4>
                  <p className="text-sm text-gray-600">{selectedPackage.duration}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-in:</span>
                  <span className="font-medium">{bookingData.checkIn || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-out:</span>
                  <span className="font-medium">{bookingData.checkOut || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests:</span>
                  <span className="font-medium">{bookingData.guests}</span>
                </div>
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Package price × {bookingData.guests}</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Taxes & fees</span>
                  <span>${taxes}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-blue-600">${finalTotal}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2 text-green-700">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Secure booking guaranteed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
