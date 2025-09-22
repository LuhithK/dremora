import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ClockIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
const FeaturedPackages = () => {
    const navigate = useNavigate();
    const packages = [
        {
            id: 1,
            title: "Sri Lanka Holiday Package 3 Days",
            duration: "3 Days",
            nights: "2 Nights",
            location: "Colombo, Kandy",
            price: 280,
            originalPrice: 350,
            rating: 4.8,
            reviews: 124,
            maxGuests: 8,
            image: "/src/assets/images/packages/cultural-triangle.jpg",
            highlights: ["Colombo City Tour", "Temple of Tooth", "Botanical Gardens"]
        },
        {
            id: 2,
            title: "Sri Lanka Holiday Package 4 Days",
            duration: "4 Days",
            nights: "3 Nights",
            location: "Kandy, Sigiriya, Dambulla",
            price: 350,
            originalPrice: 420,
            rating: 4.7,
            reviews: 112,
            maxGuests: 8,
            image: "/src/assets/images/packages/hill-country.jpg",
            highlights: ["Sigiriya Rock", "Temple of Tooth", "Cave Temples"]
        },
        {
            id: 3,
            title: "Sri Lanka Holiday Package 5 Days",
            duration: "5 Days",
            nights: "4 Nights",
            location: "Sigiriya, Polonnaruwa, Dambulla",
            price: 450,
            originalPrice: 550,
            rating: 4.9,
            reviews: 89,
            maxGuests: 6,
            image: "/src/assets/images/packages/cultural-triangle.jpg",
            highlights: ["Sigiriya Rock", "Ancient Polonnaruwa", "Dambulla Caves"]
        },
        {
            id: 4,
            title: "Sri Lanka Holiday Package 6 Days",
            duration: "6 Days",
            nights: "5 Nights",
            location: "Colombo, Kandy, Galle",
            price: 520,
            originalPrice: 620,
            rating: 4.8,
            reviews: 134,
            maxGuests: 10,
            image: "/src/assets/images/packages/southern-coast.jpg",
            highlights: ["Cultural Sites", "Galle Fort", "Beach Time"]
        },
        {
            id: 5,
            title: "Sri Lanka Holiday Package 7 Days",
            duration: "7 Days",
            nights: "6 Nights",
            location: "Kandy, Nuwara Eliya, Ella",
            price: 650,
            originalPrice: 750,
            rating: 4.7,
            reviews: 156,
            maxGuests: 10,
            image: "/src/assets/images/packages/hill-country.jpg",
            highlights: ["Tea Plantations", "Nine Arch Bridge", "Train Journey"]
        },
        {
            id: 6,
            title: "Sri Lanka Holiday Package 8 Days",
            duration: "8 Days",
            nights: "7 Nights",
            location: "Yala, Ella, Kitulgala",
            price: 750,
            originalPrice: 850,
            rating: 4.6,
            reviews: 87,
            maxGuests: 6,
            image: "/src/assets/images/packages/wildlife-safari.jpg",
            highlights: ["Yala Safari", "Adventure Sports", "Scenic Railways"]
        }
    ];
    const handleViewAllPackages = () => {
        navigate('/packages');
    };
    return (_jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Featured Tour Packages" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Discover our most popular destinations and experiences, carefully crafted to give you the best of Sri Lanka's natural beauty and cultural heritage." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: packages.map((pkg, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, className: "bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 group", children: [_jsxs("div", { className: "relative overflow-hidden", children: [_jsx("img", { src: pkg.image, alt: pkg.title, className: "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" }), _jsx("div", { className: "absolute top-3 left-3", children: _jsxs("span", { className: "bg-red-500 text-white px-2 py-1 rounded text-xs font-medium", children: ["$", pkg.originalPrice - pkg.price, " OFF"] }) }), _jsx("div", { className: "absolute top-3 right-3", children: _jsxs("div", { className: "bg-white rounded px-2 py-1 flex items-center space-x-1", children: [_jsx(StarSolidIcon, { className: "h-3 w-3 text-yellow-400" }), _jsx("span", { className: "text-xs font-medium", children: pkg.rating })] }) })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300", children: pkg.title }), _jsxs("div", { className: "flex items-center justify-between text-sm text-gray-600 mb-3", children: [_jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(ClockIcon, { className: "h-4 w-4" }), _jsxs("span", { children: [pkg.duration, " / ", pkg.nights] })] }), _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(UserGroupIcon, { className: "h-4 w-4" }), _jsxs("span", { children: ["Max ", pkg.maxGuests] })] })] }), _jsxs("div", { className: "flex items-center space-x-1 text-sm text-gray-600 mb-3", children: [_jsx(MapPinIcon, { className: "h-4 w-4" }), _jsx("span", { children: pkg.location })] }), _jsx("div", { className: "mb-4", children: _jsxs("div", { className: "flex flex-wrap gap-1", children: [pkg.highlights.slice(0, 2).map((highlight, idx) => (_jsx("span", { className: "bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs", children: highlight }, idx))), pkg.highlights.length > 2 && (_jsxs("span", { className: "bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs", children: ["+", pkg.highlights.length - 2, " more"] }))] }) }), _jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("span", { className: "text-xl font-bold text-gray-900", children: ["$", pkg.price] }), _jsxs("span", { className: "text-sm text-gray-500 line-through", children: ["$", pkg.originalPrice] })] }), _jsx("p", { className: "text-xs text-gray-500", children: "per person" })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(StarSolidIcon, { className: "h-4 w-4 text-yellow-400" }), _jsx("span", { className: "text-sm font-medium", children: pkg.rating })] }), _jsxs("p", { className: "text-xs text-gray-500", children: ["(", pkg.reviews, " reviews)"] })] })] })] })] }, pkg.id))) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, viewport: { once: true }, className: "text-center mt-12", children: _jsx("button", { onClick: handleViewAllPackages, className: "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl", children: "View All Packages" }) })] }) }));
};
export default FeaturedPackages;
