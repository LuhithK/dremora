import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { MapIcon, TruckIcon, HomeIcon, ShieldCheckIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
const Services = () => {
    const services = [
        {
            icon: MapIcon,
            title: "Custom Tours",
            description: "Personalized itineraries crafted just for you"
        },
        {
            icon: TruckIcon,
            title: "Premium Transport",
            description: "Luxury vehicles with expert drivers"
        },
        {
            icon: HomeIcon,
            title: "Luxury Stays",
            description: "Hand-picked premium accommodations"
        },
        {
            icon: StarIcon,
            title: "Expert Guides",
            description: "Local specialists with deep knowledge"
        },
        {
            icon: ShieldCheckIcon,
            title: "Travel Protection",
            description: "Comprehensive coverage for peace of mind"
        },
        {
            icon: ClockIcon,
            title: "24/7 Support",
            description: "Always here when you need us"
        }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };
    return (_jsxs("section", { className: "py-16 bg-white relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 opacity-5", children: _jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-600 to-red-600 rounded-full translate-x-48 -translate-y-48" }) }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "text-center mb-12", children: [_jsxs("div", { className: "inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-6 py-2 mb-4", children: [_jsx(StarIcon, { className: "h-5 w-5 text-blue-600" }), _jsx("span", { className: "text-blue-800 font-medium text-sm tracking-wide", children: "Premium Services" })] }), _jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: ["Why Choose ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500", children: "Dremora" })] }), _jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Experience luxury travel with our comprehensive suite of premium services" })] }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((service, index) => (_jsxs(motion.div, { variants: itemVariants, className: "group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 hover:border-blue-200", children: [_jsxs("div", { className: "flex items-center space-x-4 mb-3", children: [_jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md", children: _jsx(service.icon, { className: "h-6 w-6 text-white" }) }), _jsx("div", { children: _jsx("h3", { className: "text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300", children: service.title }) })] }), _jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: service.description }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" })] }, index))) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, viewport: { once: true }, className: "text-center mt-12", children: _jsxs("div", { className: "inline-flex items-center space-x-4", children: [_jsx("button", { className: "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl", children: "Start Your Journey" }), _jsx("button", { className: "border-2 border-blue-300 text-blue-600 hover:border-blue-600 hover:text-blue-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105", children: "Learn More" })] }) })] })] }));
};
export default Services;
