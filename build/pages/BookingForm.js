import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarIcon, UserGroupIcon, CreditCardIcon, CheckCircleIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
const BookingForm = () => {
    const { packageId } = useParams();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [bookingData, setBookingData] = useState({
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
    const packageData = {
        "1": {
            title: "Cultural Triangle Adventure",
            price: 950,
            duration: "7 Days",
            image: "/images/about/company-story.jpg"
        },
        "2": {
            title: "Hill Country Escape",
            price: 750,
            duration: "5 Days",
            image: "/images/about/company-story.jpg"
        },
        "3": {
            title: "Coastal Paradise",
            price: 550,
            duration: "6 Days",
            image: "/images/about/company-story.jpg"
        }
    };
    const selectedPackage = packageData[packageId || ""];
    if (!selectedPackage) {
        return (_jsx("div", { className: "min-h-screen bg-gray-50 pt-24 flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Package not found" }), _jsx("button", { onClick: () => navigate('/packages'), className: "btn-primary", children: "Back to Packages" })] }) }));
    }
    const totalPrice = selectedPackage.price * bookingData.guests;
    const taxes = Math.round(totalPrice * 0.1);
    const finalTotal = totalPrice + taxes;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const validateStep = (step) => {
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
        }
        else {
            toast.error('Please fill in all required fields');
        }
    };
    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep(3)) {
            toast.success('Booking confirmed! You will receive a confirmation email shortly.');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
        else {
            toast.error('Please fill in all required fields');
        }
    };
    const steps = [
        { number: 1, title: 'Travel Details', icon: CalendarIcon },
        { number: 2, title: 'Personal Info', icon: UserGroupIcon },
        { number: 3, title: 'Payment', icon: CreditCardIcon }
    ];
    return (_jsx("div", { className: "min-h-screen bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "mb-8", children: [_jsxs("button", { onClick: () => navigate('/packages'), className: "flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4", children: [_jsx(ArrowLeftIcon, { className: "h-5 w-5" }), _jsx("span", { children: "Back to Packages" })] }), _jsx("h1", { className: "text-3xl md:text-4xl font-bold text-gray-900", children: "Book Your Trip" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Complete your booking in just a few simple steps" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsxs("div", { className: "lg:col-span-2", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, className: "bg-white rounded-2xl shadow-lg p-6 mb-8", children: _jsx("div", { className: "flex items-center justify-between", children: steps.map((step, index) => (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `flex items-center justify-center w-12 h-12 rounded-full border-2 ${currentStep >= step.number
                                                        ? 'bg-blue-600 border-blue-600 text-white'
                                                        : 'border-gray-300 text-gray-400'}`, children: currentStep > step.number ? (_jsx(CheckCircleIcon, { className: "h-6 w-6" })) : (_jsx(step.icon, { className: "h-6 w-6" })) }), _jsxs("div", { className: "ml-3", children: [_jsxs("p", { className: `text-sm font-medium ${currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'}`, children: ["Step ", step.number] }), _jsx("p", { className: `text-sm ${currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'}`, children: step.title })] }), index < steps.length - 1 && (_jsx("div", { className: `w-16 h-0.5 mx-4 ${currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'}` }))] }, step.number))) }) }), _jsx(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, className: "bg-white rounded-2xl shadow-lg p-8", children: _jsx("form", { onSubmit: handleSubmit, children: _jsxs("div", { className: "flex justify-between mt-8", children: [_jsxs("button", { type: "button", onClick: prevStep, className: `flex items-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${currentStep === 1
                                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                        : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white hover:scale-105'}`, disabled: currentStep === 1, children: [_jsx(ArrowLeftIcon, { className: "h-5 w-5" }), _jsx("span", { children: "Previous" })] }), currentStep < 3 ? (_jsxs("button", { type: "button", onClick: nextStep, className: "flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105", children: [_jsx("span", { children: "Next" }), _jsx(ArrowRightIcon, { className: "h-5 w-5" })] })) : (_jsxs("button", { type: "submit", className: "flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105", children: [_jsx(CheckCircleIcon, { className: "h-5 w-5" }), _jsx("span", { children: "Complete Booking" })] }))] }) }) }, currentStep)] }), _jsx("div", { className: "lg:col-span-1", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, className: "bg-white rounded-2xl shadow-lg p-6 sticky top-8", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-6", children: "Booking Summary" }), _jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [_jsx("img", { src: selectedPackage.image, alt: selectedPackage.title, className: "w-16 h-16 rounded-lg object-cover" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900", children: selectedPackage.title }), _jsx("p", { className: "text-sm text-gray-600", children: selectedPackage.duration })] })] }), _jsxs("div", { className: "space-y-3 mb-6 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Check-in:" }), _jsx("span", { className: "font-medium", children: bookingData.checkIn || 'Not selected' })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Check-out:" }), _jsx("span", { className: "font-medium", children: bookingData.checkOut || 'Not selected' })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Guests:" }), _jsx("span", { className: "font-medium", children: bookingData.guests })] })] }), _jsxs("div", { className: "border-t pt-4 space-y-3", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsxs("span", { className: "text-gray-600", children: ["Package price \u00D7 ", bookingData.guests] }), _jsxs("span", { children: ["$", totalPrice] })] }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-gray-600", children: "Taxes & fees" }), _jsxs("span", { children: ["$", taxes] })] }), _jsxs("div", { className: "border-t pt-3 flex justify-between font-bold text-lg", children: [_jsx("span", { children: "Total" }), _jsxs("span", { className: "text-blue-600", children: ["$", finalTotal] })] })] }), _jsx("div", { className: "mt-6 p-4 bg-green-50 rounded-lg", children: _jsxs("div", { className: "flex items-center space-x-2 text-green-700", children: [_jsx(CheckCircleIcon, { className: "h-5 w-5" }), _jsx("span", { className: "text-sm font-medium", children: "Secure booking guaranteed" })] }) })] }) })] })] }) }));
};
export default BookingForm;
