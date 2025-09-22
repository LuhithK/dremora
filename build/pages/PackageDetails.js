import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ClockIcon, MapPinIcon, UserGroupIcon, StarIcon, CheckCircleIcon, CalendarIcon, PhoneIcon, EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/outline';
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
            image: "src/assets/images/destinations/mirissa.jpg",
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
            image: "src/assets/images/destinations/mirissa.jpg",
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
    const selectedPackage = packageData[packageId];
    if (!selectedPackage) {
        return (_jsx("div", { className: "min-h-screen bg-gray-50 pt-24 flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Package not found" }), _jsx("button", { onClick: () => navigate('/packages'), className: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200", children: "Back to Packages" })] }) }));
    }
    const tabs = [
        { id: 'overview', name: 'Overview' },
        { id: 'itinerary', name: 'Itinerary' },
        { id: 'inclusions', name: 'Inclusions' },
        { id: 'gallery', name: 'Gallery' }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsxs("section", { className: "relative h-64 md:h-80 overflow-hidden", children: [_jsx("img", { src: selectedPackage.image, alt: selectedPackage.title, className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-black/40" }), _jsx("div", { className: "absolute inset-0 flex items-center", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-white", children: [_jsxs("button", { onClick: () => navigate('/packages'), className: "flex items-center space-x-2 text-white/80 hover:text-white mb-4 text-sm", children: [_jsx(ArrowLeftIcon, { className: "h-4 w-4" }), _jsx("span", { children: "Back to All Trips" })] }), _jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: selectedPackage.title }), _jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm", children: [_jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(ClockIcon, { className: "h-4 w-4" }), _jsxs("span", { children: [selectedPackage.duration, " / ", selectedPackage.nights] })] }), _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(MapPinIcon, { className: "h-4 w-4" }), _jsx("span", { children: selectedPackage.destinations.join(', ') })] }), _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(StarSolidIcon, { className: "h-4 w-4 text-yellow-400" }), _jsxs("span", { children: [selectedPackage.rating, " (", selectedPackage.reviews, " reviews)"] })] })] })] }) }) })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: _jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 mb-6", children: [_jsx("div", { className: "border-b border-gray-200", children: _jsx("nav", { className: "flex space-x-8 px-6", children: tabs.map((tab) => (_jsx("button", { onClick: () => setActiveTab(tab.id), className: `py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === tab.id
                                                    ? 'border-blue-500 text-blue-600'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`, children: tab.name }, tab.id))) }) }), _jsxs("div", { className: "p-6", children: [activeTab === 'overview' && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: "About This Trip" }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: selectedPackage.overview })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: "Trip Highlights" }), _jsx("ul", { className: "space-y-2", children: selectedPackage.highlights.map((highlight, index) => (_jsxs("li", { className: "flex items-start space-x-3", children: [_jsx(CheckCircleIcon, { className: "h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" }), _jsx("span", { className: "text-gray-700", children: highlight })] }, index))) })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold text-blue-600", children: selectedPackage.duration }), _jsx("div", { className: "text-sm text-gray-600", children: "Duration" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold text-blue-600", children: selectedPackage.difficulty }), _jsx("div", { className: "text-sm text-gray-600", children: "Difficulty" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold text-blue-600", children: selectedPackage.groupSize }), _jsx("div", { className: "text-sm text-gray-600", children: "Group Size" })] })] })] })), activeTab === 'itinerary' && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "space-y-6", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900", children: "Detailed Itinerary" }), _jsx("div", { className: "space-y-6", children: selectedPackage.itinerary.map((day, index) => (_jsx("div", { className: "border border-gray-200 rounded-lg p-4", children: _jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium", children: day.day }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("h4", { className: "text-lg font-semibold text-gray-900 mb-1", children: ["Day ", day.day, ": ", day.title] }), _jsx("p", { className: "text-gray-600 text-sm mb-3", children: day.description }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { children: [_jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "Activities:" }), _jsx("ul", { className: "space-y-1", children: day.activities.map((activity, actIndex) => (_jsxs("li", { className: "text-gray-600 text-sm flex items-start space-x-2", children: [_jsx("span", { className: "text-blue-600 mt-1", children: "\u2022" }), _jsx("span", { children: activity })] }, actIndex))) })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [_jsxs("div", { children: [_jsx("span", { className: "font-medium text-gray-900", children: "Meals: " }), _jsx("span", { className: "text-gray-600", children: day.meals.join(', ') })] }), _jsxs("div", { children: [_jsx("span", { className: "font-medium text-gray-900", children: "Accommodation: " }), _jsx("span", { className: "text-gray-600", children: day.accommodation })] })] })] })] })] }) }, index))) })] })), activeTab === 'inclusions' && (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "space-y-6", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsxs("h3", { className: "text-lg font-semibold text-green-600 mb-4 flex items-center space-x-2", children: [_jsx(CheckCircleIcon, { className: "h-5 w-5" }), _jsx("span", { children: "What's Included" })] }), _jsx("ul", { className: "space-y-2", children: selectedPackage.included.map((item, index) => (_jsxs("li", { className: "flex items-start space-x-3", children: [_jsx(CheckCircleIcon, { className: "h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" }), _jsx("span", { className: "text-gray-700 text-sm", children: item })] }, index))) })] }), _jsxs("div", { children: [_jsxs("h3", { className: "text-lg font-semibold text-red-600 mb-4 flex items-center space-x-2", children: [_jsx(XMarkIcon, { className: "h-5 w-5" }), _jsx("span", { children: "What's Not Included" })] }), _jsx("ul", { className: "space-y-2", children: selectedPackage.excluded.map((item, index) => (_jsxs("li", { className: "flex items-start space-x-3", children: [_jsx(XMarkIcon, { className: "h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" }), _jsx("span", { className: "text-gray-700 text-sm", children: item })] }, index))) })] })] }) })), activeTab === 'gallery' && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "space-y-4", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900", children: "Photo Gallery" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: selectedPackage.gallery.map((image, index) => (_jsx("div", { className: "aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-200", onClick: () => {
                                                                setCurrentImageIndex(index);
                                                                setShowGallery(true);
                                                            }, children: _jsx("img", { src: image, alt: `Gallery ${index + 1}`, className: "w-full h-full object-cover" }) }, index))) })] }))] })] }) }), _jsx("div", { className: "lg:col-span-1", children: _jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsxs("div", { className: "flex items-center justify-center space-x-2 mb-2", children: [_jsxs("span", { className: "text-3xl font-bold text-gray-900", children: ["$", selectedPackage.price] }), _jsxs("span", { className: "text-lg text-gray-500 line-through", children: ["$", selectedPackage.originalPrice] })] }), _jsx("p", { className: "text-sm text-gray-600", children: "per person" }), _jsxs("div", { className: "bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block", children: ["Save $", selectedPackage.originalPrice - selectedPackage.price] })] }), _jsxs("div", { className: "space-y-4 mb-6 pb-6 border-b border-gray-200", children: [_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [_jsx(ClockIcon, { className: "h-4 w-4" }), _jsx("span", { children: "Duration" })] }), _jsxs("span", { className: "font-medium", children: [selectedPackage.duration, " / ", selectedPackage.nights] })] }), _jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [_jsx(UserGroupIcon, { className: "h-4 w-4" }), _jsx("span", { children: "Max Guests" })] }), _jsx("span", { className: "font-medium", children: selectedPackage.maxGuests })] }), _jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [_jsx(StarIcon, { className: "h-4 w-4" }), _jsx("span", { children: "Rating" })] }), _jsxs("span", { className: "font-medium", children: [selectedPackage.rating, "/5 (", selectedPackage.reviews, " reviews)"] })] }), _jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [_jsx(CalendarIcon, { className: "h-4 w-4" }), _jsx("span", { children: "Best Time" })] }), _jsx("span", { className: "font-medium", children: selectedPackage.bestTime })] })] }), _jsxs("div", { className: "space-y-3 mb-6", children: [_jsx(Link, { to: `/booking/${packageId}`, className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center block", children: "Book This Trip" }), _jsx("a", { href: "/#quote-section", className: "w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center block", children: "Get Custom Quote" })] }), _jsxs("div", { className: "pt-6 border-t border-gray-200", children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-3", children: "Need Help?" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [_jsx(PhoneIcon, { className: "h-4 w-4" }), _jsx("span", { children: "+94 76 921 4087" })] }), _jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [_jsx(EnvelopeIcon, { className: "h-4 w-4" }), _jsx("span", { children: "dremoratours@gmail.com" })] })] })] })] }) })] }) }), showGallery && (_jsx("div", { className: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center", children: _jsxs("div", { className: "relative max-w-4xl max-h-full p-4", children: [_jsx("button", { onClick: () => setShowGallery(false), className: "absolute top-4 right-4 text-white hover:text-gray-300 z-10", children: _jsx(XMarkIcon, { className: "h-8 w-8" }) }), _jsx("img", { src: selectedPackage.gallery[currentImageIndex], alt: `Gallery ${currentImageIndex + 1}`, className: "max-w-full max-h-full object-contain" }), _jsx("div", { className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2", children: selectedPackage.gallery.map((_, index) => (_jsx("button", { onClick: () => setCurrentImageIndex(index), className: `w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}` }, index))) })] }) }))] }));
};
export default PackageDetails;
