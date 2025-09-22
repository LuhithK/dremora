import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, ClockIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
const Packages = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = [
        { id: 'all', name: 'All Trips' },
        { id: 'cultural', name: 'Cultural Tours' },
        { id: 'adventure', name: 'Adventure' },
        { id: 'beach', name: 'Beach & Coastal' },
        { id: 'wildlife', name: 'Wildlife Safari' },
        { id: 'hill-country', name: 'Hill Country' },
        { id: 'honeymoon', name: 'Honeymoon' }
    ];
    const packages = [
        {
            id: 1,
            title: "Sri Lanka Holiday Package 3 Days",
            description: "Perfect short getaway covering Colombo city tour, Kandy Temple of Tooth, and scenic Peradeniya Botanical Gardens.",
            image: "/images/destinations/sigiriya.jpg",
            duration: "3 Days",
            nights: "2 Nights",
            location: "Colombo, Kandy",
            price: 280,
            originalPrice: 350,
            rating: 4.8,
            reviews: 124,
            maxGuests: 8,
            category: 'cultural',
            highlights: ["Colombo City Tour", "Temple of Tooth", "Botanical Gardens"],
            destinations: ["Colombo", "Kandy"]
        },
        {
            id: 2,
            title: "Sri Lanka Holiday Package 4 Days",
            description: "Quick cultural and nature tour covering Kandy, Sigiriya, and Dambulla with comfortable accommodations.",
            image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
            duration: "4 Days",
            nights: "3 Nights",
            location: "Kandy, Sigiriya, Dambulla",
            price: 350,
            originalPrice: 420,
            rating: 4.7,
            reviews: 112,
            maxGuests: 8,
            category: 'cultural',
            highlights: ["Sigiriya Rock", "Temple of Tooth", "Cave Temples"],
            destinations: ["Kandy", "Sigiriya", "Dambulla"]
        },
        {
            id: 3,
            title: "Sri Lanka Holiday Package 5 Days",
            description: "Explore cultural triangle with Sigiriya Rock Fortress, Polonnaruwa ancient city, and Dambulla Cave Temple.",
            image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
            duration: "5 Days",
            nights: "4 Nights",
            location: "Sigiriya, Polonnaruwa, Dambulla",
            price: 450,
            originalPrice: 550,
            rating: 4.9,
            reviews: 89,
            maxGuests: 6,
            category: 'cultural',
            highlights: ["Sigiriya Rock", "Ancient Polonnaruwa", "Dambulla Caves"],
            destinations: ["Sigiriya", "Polonnaruwa", "Dambulla"]
        },
        {
            id: 4,
            title: "Sri Lanka Holiday Package 6 Days",
            description: "Perfect blend of culture and beaches with Colombo, Kandy, Galle Fort, and southern coast relaxation.",
            image: "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
            duration: "6 Days",
            nights: "5 Nights",
            location: "Colombo, Kandy, Galle",
            price: 520,
            originalPrice: 620,
            rating: 4.8,
            reviews: 134,
            maxGuests: 10,
            category: 'beach',
            highlights: ["Cultural Sites", "Galle Fort", "Beach Time"],
            destinations: ["Colombo", "Kandy", "Galle"]
        },
        {
            id: 5,
            title: "Sri Lanka Holiday Package 7 Days",
            description: "Complete hill country experience with Kandy, Nuwara Eliya, Ella, and scenic train journey through tea plantations.",
            image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
            duration: "7 Days",
            nights: "6 Nights",
            location: "Kandy, Nuwara Eliya, Ella",
            price: 650,
            originalPrice: 750,
            rating: 4.7,
            reviews: 156,
            maxGuests: 10,
            category: 'hill-country',
            highlights: ["Tea Plantations", "Nine Arch Bridge", "Train Journey"],
            destinations: ["Kandy", "Nuwara Eliya", "Ella"]
        },
        {
            id: 6,
            title: "Sri Lanka Holiday Package 8 Days",
            description: "Adventure and wildlife tour with Yala Safari, Ella hiking, white water rafting, and scenic train rides.",
            image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800",
            duration: "8 Days",
            nights: "7 Nights",
            location: "Yala, Ella, Kitulgala",
            price: 750,
            originalPrice: 850,
            rating: 4.6,
            reviews: 87,
            maxGuests: 6,
            category: 'wildlife',
            highlights: ["Yala Safari", "Adventure Sports", "Scenic Railways"],
            destinations: ["Yala", "Ella", "Kitulgala"]
        },
        {
            id: 7,
            title: "Sri Lanka Holiday Package 10 Days",
            description: "Comprehensive Sri Lanka tour covering cultural sites, hill country, wildlife safari, and southern beaches.",
            image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
            duration: "10 Days",
            nights: "9 Nights",
            location: "Multiple Destinations",
            price: 950,
            originalPrice: 1100,
            rating: 4.6,
            reviews: 98,
            maxGuests: 6,
            category: 'adventure',
            highlights: ["Cultural Triangle", "Hill Country", "Wildlife Safari", "Beach Time"],
            destinations: ["Sigiriya", "Kandy", "Ella", "Yala", "Galle"]
        },
        {
            id: 8,
            title: "Sri Lanka Holiday Package 12 Days",
            description: "Ultimate Sri Lanka experience including all major attractions, wildlife parks, beaches, and cultural heritage sites.",
            image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800",
            duration: "12 Days",
            nights: "11 Nights",
            location: "Island Wide",
            price: 1200,
            originalPrice: 1400,
            rating: 4.8,
            reviews: 76,
            maxGuests: 8,
            category: 'adventure',
            highlights: ["Complete Island Tour", "All Major Sites", "Wildlife & Beaches"],
            destinations: ["Colombo", "Kandy", "Sigiriya", "Ella", "Yala", "Galle", "Mirissa"]
        },
        {
            id: 9,
            title: "Sri Lanka Holiday Package 14 Days",
            description: "Extended luxury tour with premium accommodations, private guides, and exclusive experiences across the island.",
            image: "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
            duration: "14 Days",
            nights: "13 Nights",
            location: "Premium Island Tour",
            price: 1500,
            originalPrice: 1750,
            rating: 4.9,
            reviews: 145,
            maxGuests: 2,
            category: 'honeymoon',
            highlights: ["Luxury Accommodations", "Private Guides", "Exclusive Experiences"],
            destinations: ["Colombo", "Kandy", "Sigiriya", "Ella", "Yala", "Galle", "Mirissa", "Bentota"]
        },
        {
            id: 10,
            title: "Sri Lanka Holiday Package 15 Days",
            description: "Ultimate luxury experience covering every corner of Sri Lanka with premium hotels, private transfers, and exclusive access.",
            image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
            duration: "15 Days",
            nights: "14 Nights",
            location: "Complete Sri Lanka",
            price: 1800,
            originalPrice: 2100,
            rating: 5.0,
            reviews: 67,
            maxGuests: 4,
            category: 'honeymoon',
            highlights: ["Complete Island", "Luxury Experience", "Private Services"],
            destinations: ["Colombo", "Kandy", "Sigiriya", "Polonnaruwa", "Ella", "Yala", "Galle", "Mirissa", "Bentota", "Negombo"]
        }
    ];
    // Filter packages
    const filteredPackages = packages.filter(pkg => {
        const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("section", { className: "relative py-16 bg-white", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-center", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "All Trips" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mb-8", children: "Discover our comprehensive collection of Sri Lankan tour packages, each designed to offer unique experiences and unforgettable memories." })] }) }) }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsx("div", { className: "flex-1", children: _jsxs("div", { className: "relative", children: [_jsx(MagnifyingGlassIcon, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "text", placeholder: "Search trips...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" })] }) }), _jsx("div", { className: "md:w-64", children: _jsx("select", { value: selectedCategory, onChange: (e) => setSelectedCategory(e.target.value), className: "w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: categories.map(category => (_jsx("option", { value: category.id, children: category.name }, category.id))) }) })] }) }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.4 }, className: "mb-6", children: _jsxs("p", { className: "text-gray-600 text-sm", children: ["Showing ", filteredPackages.length, " of ", packages.length, " trips"] }) }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.6 }, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredPackages.map((pkg, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: pkg.image, alt: pkg.title, className: "w-full h-48 object-cover" }), _jsx("div", { className: "absolute top-3 left-3", children: _jsxs("span", { className: "bg-red-500 text-white px-2 py-1 rounded text-xs font-medium", children: ["$", pkg.originalPrice - pkg.price, " OFF"] }) }), _jsx("div", { className: "absolute top-3 right-3", children: _jsxs("div", { className: "bg-white rounded px-2 py-1 flex items-center space-x-1", children: [_jsx(StarSolidIcon, { className: "h-3 w-3 text-yellow-400" }), _jsx("span", { className: "text-xs font-medium", children: pkg.rating })] }) })] }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2 line-clamp-2", children: pkg.title }), _jsxs("div", { className: "flex items-center justify-between text-sm text-gray-600 mb-3", children: [_jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(ClockIcon, { className: "h-4 w-4" }), _jsxs("span", { children: [pkg.duration, " / ", pkg.nights] })] }), _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(UserGroupIcon, { className: "h-4 w-4" }), _jsxs("span", { children: ["Max ", pkg.maxGuests] })] })] }), _jsxs("div", { className: "mb-3", children: [_jsxs("div", { className: "flex items-center space-x-1 text-sm text-gray-600 mb-2", children: [_jsx(MapPinIcon, { className: "h-4 w-4" }), _jsx("span", { children: "Destinations:" })] }), _jsxs("div", { className: "flex flex-wrap gap-1", children: [pkg.destinations.slice(0, 3).map((dest, idx) => (_jsx("span", { className: "bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs", children: dest }, idx))), pkg.destinations.length > 3 && (_jsxs("span", { className: "bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs", children: ["+", pkg.destinations.length - 3, " more"] }))] })] }), _jsx("p", { className: "text-gray-600 text-sm mb-4 line-clamp-2", children: pkg.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("span", { className: "text-xl font-bold text-gray-900", children: ["$", pkg.price] }), _jsxs("span", { className: "text-sm text-gray-500 line-through", children: ["$", pkg.originalPrice] })] }), _jsx("p", { className: "text-xs text-gray-500", children: "per person" })] }), _jsxs("div", { className: "flex space-x-2", children: [_jsx(Link, { to: `/package/${pkg.id}`, className: "bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-2 rounded text-sm font-medium transition-colors duration-200", children: "View Details" }), _jsx(Link, { to: `/booking/${pkg.id}`, className: "bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200", children: "Book Now" })] })] }), _jsx("div", { className: "mt-3 pt-3 border-t border-gray-100", children: _jsx("div", { className: "flex items-center justify-between text-xs text-gray-500", children: _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => (_jsx(StarSolidIcon, { className: `h-3 w-3 ${i < Math.floor(pkg.rating) ? 'text-yellow-400' : 'text-gray-300'}` }, i))) }), _jsxs("span", { children: ["(", pkg.reviews, " reviews)"] })] }) }) })] })] }, pkg.id))) }), filteredPackages.length === 0 && (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 }, className: "text-center py-12", children: [_jsx("div", { className: "text-gray-400 mb-4", children: _jsx(MagnifyingGlassIcon, { className: "h-16 w-16 mx-auto" }) }), _jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "No trips found" }), _jsx("p", { className: "text-gray-600 mb-4", children: "Try adjusting your search criteria or filters to find more trips." }), _jsx("button", { onClick: () => {
                                    setSearchTerm('');
                                    setSelectedCategory('all');
                                }, className: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200", children: "Clear Filters" })] }))] })] }));
};
export default Packages;
