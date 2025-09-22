import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
const QuotationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        package: '',
        phoneNumber: '',
        countryCode: '+94'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const packages = [
        'Select a Package',
        'Sri Lanka Holiday Package 3 Days',
        'Sri Lanka Holiday Package 4 Days',
        'Sri Lanka Holiday Package 5 Days',
        'Sri Lanka Holiday Package 6 Days',
        'Sri Lanka Holiday Package 7 Days',
        'Sri Lanka Holiday Package 8 Days',
        'Sri Lanka Holiday Package 10 Days',
        'Sri Lanka Holiday Package 12 Days',
        'Sri Lanka Holiday Package 14 Days',
        'Sri Lanka Holiday Package 15 Days',
        'Custom Tour Package'
    ];
    const countryCodes = [
        { code: '+94', country: 'LK', flag: '🇱🇰' },
        { code: '+1', country: 'US', flag: '🇺🇸' },
        { code: '+44', country: 'UK', flag: '🇬🇧' },
        { code: '+61', country: 'AU', flag: '🇦🇺' },
        { code: '+91', country: 'IN', flag: '🇮🇳' },
        { code: '+49', country: 'DE', flag: '🇩🇪' },
        { code: '+33', country: 'FR', flag: '🇫🇷' },
        { code: '+81', country: 'JP', flag: '🇯🇵' }
    ];
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.package || formData.package === 'Select a Package') {
            toast.error('Please fill in all required fields');
            return;
        }
        setIsSubmitting(true);
        try {
            // Save quote to localStorage for admin dashboard
            const existingQuotes = JSON.parse(localStorage.getItem('quotationRequests') || '[]');
            const newQuote = {
                id: Date.now(),
                name: formData.fullName,
                email: formData.email,
                phone: formData.countryCode + ' ' + formData.phoneNumber,
                package: formData.package,
                date: new Date().toISOString().split('T')[0],
                status: 'pending'
            };
            existingQuotes.push(newQuote);
            localStorage.setItem('quotationRequests', JSON.stringify(existingQuotes));
            // Create mailto link with form data
            const subject = encodeURIComponent('Quotation Request - Dremora Tours');
            const body = encodeURIComponent(`
Dear Dremora Tours Team,

I would like to request a quotation for a Sri Lankan tour package.

Details:
- Full Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.countryCode} ${formData.phoneNumber}
- Package: ${formData.package}

Please provide me with a personalized quote and itinerary for this package.

Thank you for your assistance.

Best regards,
${formData.fullName}
      `);
            const mailtoLink = `mailto:dremoratravels@gmail.com?subject=${subject}&body=${body}`;
            // Open email client
            window.location.href = mailtoLink;
            // Show success message
            toast.success('Email client opened! Please send the email to complete your quotation request.');
            // Reset form
            setFormData({
                fullName: '',
                email: '',
                package: '',
                phoneNumber: '',
                countryCode: '+94'
            });
        }
        catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsxs("section", { id: "quote-section", className: "py-20 relative overflow-hidden", style: {
            backgroundImage: `url("/src/assets/images/hero/hero-bg-2.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }, children: [_jsx("div", { className: "absolute inset-0 bg-white/85 backdrop-blur-sm" }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "space-y-6", children: [_jsxs("div", { children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: ["Get a ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500", children: "Quote" })] }), _jsx("p", { className: "text-lg text-gray-600 leading-relaxed", children: "Get 24/7 support from our dedicated local experts\u2014always here when you need us." })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 }, viewport: { once: true }, className: "bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20", children: _jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: "text-6xl text-gray-200 font-bold leading-none", children: "\"" }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Get a personalised quote in 24 hours." }), _jsx("p", { className: "text-gray-600 text-sm", children: "Fast, reliable, and tailored to your travel dreams" })] })] }) }), _jsxs(motion.p, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, delay: 0.5 }, viewport: { once: true }, className: "text-sm text-gray-500 flex items-center space-x-2", children: [_jsx("svg", { className: "h-4 w-4 text-green-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), _jsx("span", { children: "We respect your privacy and keep your details strictly confidential" })] })] }), _jsx(motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "bg-white rounded-3xl shadow-2xl p-8 border border-gray-100", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Full Name *" }), _jsxs("div", { className: "relative", children: [_jsx(UserIcon, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "text", name: "fullName", value: formData.fullName, onChange: handleInputChange, required: true, className: "w-full pl-10 pr-4 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300", placeholder: "John Jackson" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address *" }), _jsxs("div", { className: "relative", children: [_jsx(EnvelopeIcon, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleInputChange, required: true, className: "w-full pl-10 pr-4 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300", placeholder: "Hello@outlook.com" })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Select Package *" }), _jsxs("div", { className: "relative", children: [_jsx(MapPinIcon, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("select", { name: "package", value: formData.package, onChange: handleInputChange, required: true, className: "w-full pl-10 pr-4 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300 appearance-none cursor-pointer", children: packages.map((pkg, index) => (_jsx("option", { value: pkg, disabled: index === 0, children: pkg }, index))) }), _jsx("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none", children: _jsx("svg", { className: "h-5 w-5 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }) })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Phone Number" }), _jsxs("div", { className: "flex space-x-3", children: [_jsx("div", { className: "relative", children: _jsx("select", { name: "countryCode", value: formData.countryCode, onChange: handleInputChange, className: "w-20 py-3 px-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300 appearance-none cursor-pointer text-center", children: countryCodes.map((country) => (_jsx("option", { value: country.code, children: country.code }, country.code))) }) }), _jsxs("div", { className: "relative flex-1", children: [_jsx(PhoneIcon, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "tel", name: "phoneNumber", value: formData.phoneNumber, onChange: handleInputChange, className: "w-full pl-10 pr-4 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300", placeholder: "77 123 4567" })] })] })] }), _jsx(motion.button, { type: "submit", disabled: isSubmitting, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: `w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`, children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white" }), _jsx("span", { children: "Processing..." })] })) : (_jsxs(_Fragment, { children: [_jsx(PaperAirplaneIcon, { className: "h-5 w-5" }), _jsx("span", { children: "Submit" })] })) }), _jsx("div", { className: "text-center", children: _jsxs("p", { className: "text-sm text-gray-500 mb-2", children: ["Have a coupon? ", _jsx("a", { href: "#", className: "text-blue-600 hover:text-blue-700 underline", children: "Apply here" })] }) })] }) })] }) })] }));
};
export default QuotationForm;
