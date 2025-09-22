import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Packages', path: '/packages' },
        { name: 'Destinations', path: '/destinations' },
        { name: 'About', path: '/about' },
        //{ name: 'Contact', path: '/contact' },
    ];
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-3 px-4 text-sm border-b border-slate-700", children: _jsxs("div", { className: "max-w-7xl mx-auto flex justify-between items-center", children: [_jsxs("div", { className: "flex items-center space-x-8", children: [_jsxs("div", { className: "flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-300", children: [_jsx(PhoneIcon, { className: "h-4 w-4" }), _jsx("span", { className: "font-light tracking-wide", children: "+94 76 921 4087" })] }), _jsxs("div", { className: "hidden md:flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-300", children: [_jsx(EnvelopeIcon, { className: "h-4 w-4" }), _jsx("span", { className: "font-light tracking-wide", children: "dremoratours@gmail.com" })] })] }), _jsx("div", { className: "hidden lg:block", children: _jsx("span", { className: "text-slate-300 font-light tracking-wide", children: "Discover Sri Lanka's Hidden Treasures" }) })] }) }), _jsxs("nav", { className: `w-full transition-all duration-500 ${isScrolled
                    ? 'bg-white/80 backdrop-blur-lg shadow-xl border-b border-gray-100'
                    : 'bg-white/90 backdrop-blur-md shadow-lg'}`, children: [_jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between items-center h-20", children: [_jsx(Link, { to: "/", className: "flex items-center space-x-3 group", children: _jsx("img", { src: "/images/logo/dremoralogo1.png", alt: "Dremora Tours", className: "h-16 w-auto max-w-none transition-all duration-300 transform group-hover:scale-105" }) }), _jsxs("div", { className: "hidden md:flex items-center space-x-12", children: [navItems.map((item) => (_jsxs(Link, { to: item.path, className: `relative font-medium text-base tracking-wide transition-all duration-300 group ${location.pathname === item.path
                                                ? 'text-blue-600'
                                                : 'text-slate-700 hover:text-blue-600'}`, children: [item.name, _jsx("span", { className: `absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}` })] }, item.name))), _jsxs(Link, { to: "/contact", className: "relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium text-sm py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group", children: [_jsx("span", { className: "relative z-10 tracking-wide", children: "Contact Us" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] })] }), _jsx("div", { className: "md:hidden", children: _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "p-3 rounded-xl text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300", children: isOpen ? (_jsx(XMarkIcon, { className: "h-6 w-6" })) : (_jsx(Bars3Icon, { className: "h-6 w-6" })) }) })] }) }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.3, ease: 'easeInOut' }, className: "md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl", children: _jsxs("div", { className: "px-4 pt-4 pb-6 space-y-2", children: [navItems.map((item) => (_jsx(Link, { to: item.path, onClick: () => setIsOpen(false), className: `block px-6 py-4 rounded-xl text-base font-medium tracking-wide transition-all duration-300 ${location.pathname === item.path
                                            ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                                            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'}`, children: item.name }, item.name))), _jsx("div", { className: "px-6 py-4", children: _jsx(Link, { to: "/login", className: "block w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium text-sm py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wide text-center", children: "Login" }) })] }) })) })] })] }));
};
export default Navbar;
