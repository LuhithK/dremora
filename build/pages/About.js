import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { HeartIcon, GlobeAltIcon, UserGroupIcon, TrophyIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
const About = () => {
    const values = [
        {
            icon: HeartIcon,
            title: "Passion for Travel",
            description: "We are passionate about showcasing the beauty and culture of Sri Lanka to travelers from around the world."
        },
        {
            icon: GlobeAltIcon,
            title: "Local Expertise",
            description: "Our deep local knowledge ensures authentic experiences and access to hidden gems off the beaten path."
        },
        {
            icon: UserGroupIcon,
            title: "Customer First",
            description: "Every decision we make is centered around creating exceptional experiences for our valued customers."
        },
        {
            icon: TrophyIcon,
            title: "Excellence",
            description: "We strive for excellence in every aspect of our service, from planning to execution."
        }
    ];
    const team = [
        {
            name: "Luhith kariyawasam",
            role: "Founder & CEO",
            image: "/images/team/ceo.jpg",
            description: "With over 5 years in the tourism industry, Luhith founded Dremora Tours to showcase the authentic beauty of Sri Lanka to the world."
        },
        {
            name: "Thisara Tharani",
            role: "Head of Operations",
            image: "/images/team/operations-head.jpg",
            description: "Thisara ensures every tour runs smoothly with his exceptional organizational skills and passion for customer satisfaction."
        },
        {
            name: "Ishini Kariyawasam",
            role: "Senior Tour Guide",
            image: "/images/team/tour-guide.jpg",
            description: "Ishini's extensive knowledge of Sri Lankan history, culture, and wildlife makes every tour an unforgettable educational journey."
        }
    ];
    const achievements = [
        { number: "50+", label: "Happy Customers" },
        { number: "15+", label: "Tour Packages" },
        { number: "25+", label: "Destinations" },
        { number: "5+", label: "Years Experience" }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("section", { className: "relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-center", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6", children: "About Dremora Tours" }), _jsx("p", { className: "text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed", children: "Your trusted partner for unforgettable Sri Lankan adventures. We create memories that last a lifetime." })] }) }) }), _jsx("section", { className: "py-20 bg-white", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-6", children: "Our Story" }), _jsxs("div", { className: "space-y-4 text-gray-600 leading-relaxed", children: [_jsx("p", { children: "Established in 2020, Dremora Tours set out with the mission of sharing Sri Lanka\u2019s breathtaking landscapes and timeless heritage with explorers across the globe. What first began as a small family-run initiative has steadily grown into a well-recognized and dependable name in the local travel industry." }), _jsx("p", { children: "Our team is built on passionate individuals who share a love for exploration and cultural discovery. Together, they bring creativity, dedication, and expertise to craft journeys that are not only enjoyable but also meaningful and memorable for every traveler we serve." }), _jsx("p", { children: "Today, Dremora Tours is celebrated for delivering tailor-made itineraries, genuine hospitality, and immersive experiences that highlight the island\u2019s essence \u2013 from historic ruins and golden coastlines to emerald tea gardens and flourishing wildlife sanctuaries." })] })] }), _jsxs(motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "relative", children: [_jsx("img", { src: "/images/about/company-story.jpg", alt: "Sri Lanka landscape", className: "rounded-2xl shadow-2xl" }), _jsx("div", { className: "absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-orange-600", children: "8+" }), _jsx("div", { className: "text-gray-600 text-sm", children: "Years of Excellence" })] }) })] })] }) }) }), _jsx("section", { className: "py-20 bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Our Values" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "These core values guide everything we do and shape every experience we create." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: values.map((value, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, className: "text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2", children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4", children: _jsx(value.icon, { className: "h-8 w-8 text-white" }) }), _jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: value.title }), _jsx("p", { className: "text-gray-600", children: value.description })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Meet Our Team" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Our passionate team of travel experts is dedicated to making your Sri Lankan adventure unforgettable." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: team.map((member, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.2 }, viewport: { once: true }, className: "text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300", children: [_jsx("img", { src: member.image, alt: member.name, className: "w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg" }), _jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: member.name }), _jsx("p", { className: "text-blue-600 font-semibold mb-4", children: member.role }), _jsx("p", { className: "text-gray-600", children: member.description })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Our Achievements" }), _jsx("p", { className: "text-xl opacity-90 max-w-3xl mx-auto", children: "Numbers that reflect our commitment to excellence and customer satisfaction." })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: achievements.map((achievement, index) => (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, className: "text-center", children: [_jsx("div", { className: "text-4xl md:text-5xl font-bold mb-2", children: achievement.number }), _jsx("div", { className: "text-orange-100", children: achievement.label })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-white", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsx(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: _jsx("img", { src: "/images/about/tea-plantation.jpg", alt: "Sri Lanka tea plantation", className: "rounded-2xl shadow-2xl" }) }), _jsxs(motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-6", children: "Why Choose Dremora Tours?" }), _jsx("div", { className: "space-y-4", children: [
                                            "Expert local knowledge and insider access",
                                            "Personalized itineraries tailored to your interests",
                                            "24/7 customer support throughout your journey",
                                            "Sustainable and responsible tourism practices",
                                            "Competitive pricing with no hidden fees",
                                            "Highly rated by hundreds of satisfied customers"
                                        ].map((reason, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, className: "flex items-center space-x-3", children: [_jsx(CheckCircleIcon, { className: "h-6 w-6 text-green-500 flex-shrink-0" }), _jsx("span", { className: "text-gray-700", children: reason })] }, index))) }), _jsx("div", { className: "mt-8", children: _jsx("button", { className: "btn-primary", children: "Start Planning Your Trip" }) })] })] }) }) })] }));
};
export default About;
