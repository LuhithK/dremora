import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChartBarIcon, UserGroupIcon, ChatBubbleLeftRightIcon, ArrowRightOnRectangleIcon, EyeIcon, TrashIcon, MagnifyingGlassIcon, CalendarIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('quotes');
    const [searchTerm, setSearchTerm] = useState('');
    // Get stored users and quotes from localStorage
    const getStoredUsers = () => {
        const users = localStorage.getItem('registeredUsers');
        return users ? JSON.parse(users) : [];
    };
    const getStoredQuotes = () => {
        const quotes = localStorage.getItem('quotationRequests');
        return quotes ? JSON.parse(quotes) : [];
    };
    // Get real data from localStorage
    const quotes = getStoredQuotes();
    const customers = getStoredUsers();
    // Mock data for quotes
    const mockQuotes = [
        {
            id: 1,
            name: 'John Smith',
            email: 'john@example.com',
            phone: '+1 234 567 8900',
            package: 'Sri Lanka Holiday Package 7 Days',
            date: '2024-01-15',
            status: 'pending'
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            phone: '+44 20 7946 0958',
            package: 'Sri Lanka Holiday Package 10 Days',
            date: '2024-01-14',
            status: 'responded'
        },
        {
            id: 3,
            name: 'Michael Brown',
            email: 'michael@example.com',
            phone: '+61 2 9374 4000',
            package: 'Custom Tour Package',
            date: '2024-01-13',
            status: 'pending'
        },
        {
            id: 4,
            name: 'Emily Davis',
            email: 'emily@example.com',
            phone: '+1 555 123 4567',
            package: 'Sri Lanka Holiday Package 5 Days',
            date: '2024-01-12',
            status: 'responded'
        },
        {
            id: 5,
            name: 'David Wilson',
            email: 'david@example.com',
            phone: '+49 30 12345678',
            package: 'Sri Lanka Holiday Package 12 Days',
            date: '2024-01-11',
            status: 'pending'
        }
    ];
    // Mock data for registered customers
    const mockCustomers = [
        {
            id: 1,
            name: 'Alice Cooper',
            email: 'alice@example.com',
            phone: '+1 234 567 8901',
            joinDate: '2024-01-10',
            totalBookings: 2
        },
        {
            id: 2,
            name: 'Bob Martin',
            email: 'bob@example.com',
            phone: '+44 20 7946 0959',
            joinDate: '2024-01-08',
            totalBookings: 1
        },
        {
            id: 3,
            name: 'Carol White',
            email: 'carol@example.com',
            phone: '+61 2 9374 4001',
            joinDate: '2024-01-05',
            totalBookings: 3
        }
    ];
    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/');
    };
    // Use real data if available, otherwise use mock data
    const displayQuotes = quotes.length > 0 ? quotes : mockQuotes;
    const displayCustomers = customers.length > 0 ? customers : mockCustomers;
    const filteredQuotes = displayQuotes.filter(quote => quote.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (quote.package && quote.package.toLowerCase().includes(searchTerm.toLowerCase())));
    const filteredCustomers = displayCustomers.filter(customer => customer.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email?.toLowerCase().includes(searchTerm.toLowerCase()));
    const stats = [
        {
            title: 'Total Quotes',
            value: displayQuotes.length,
            icon: ChatBubbleLeftRightIcon,
            color: 'bg-blue-500'
        },
        {
            title: 'Pending Quotes',
            value: displayQuotes.filter(q => q.status === 'pending' || !q.status).length,
            icon: ChartBarIcon,
            color: 'bg-orange-500'
        },
        {
            title: 'Registered Customers',
            value: displayCustomers.length,
            icon: UserGroupIcon,
            color: 'bg-green-500'
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("div", { className: "bg-white shadow-sm border-b border-gray-200", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsx("div", { className: "flex items-center space-x-4", children: _jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Admin Dashboard" }) }), _jsxs("button", { onClick: handleLogout, className: "flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200", children: [_jsx(ArrowRightOnRectangleIcon, { className: "h-5 w-5" }), _jsx("span", { children: "Logout" })] })] }) }) }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: stats.map((stat, index) => (_jsx("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `${stat.color} p-3 rounded-lg`, children: _jsx(stat.icon, { className: "h-6 w-6 text-white" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: stat.title }), _jsx("p", { className: "text-2xl font-bold text-gray-900", children: stat.value })] })] }) }, index))) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, className: "bg-white rounded-lg shadow-sm border border-gray-200 mb-6", children: [_jsx("div", { className: "border-b border-gray-200", children: _jsxs("nav", { className: "flex space-x-8 px-6", children: [_jsxs("button", { onClick: () => setActiveTab('quotes'), className: `py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === 'quotes'
                                                ? 'border-blue-500 text-blue-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`, children: ["Quote Requests (", displayQuotes.length, ")"] }), _jsxs("button", { onClick: () => setActiveTab('customers'), className: `py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === 'customers'
                                                ? 'border-blue-500 text-blue-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`, children: ["Registered Customers (", displayCustomers.length, ")"] })] }) }), _jsx("div", { className: "p-6 border-b border-gray-200", children: _jsxs("div", { className: "relative", children: [_jsx(MagnifyingGlassIcon, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "text", placeholder: `Search ${activeTab}...`, value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" })] }) }), _jsxs("div", { className: "p-6", children: [activeTab === 'quotes' && (_jsx("div", { className: "space-y-4", children: filteredQuotes.length === 0 ? (_jsxs("div", { className: "text-center py-8", children: [_jsx(ChatBubbleLeftRightIcon, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }), _jsx("p", { className: "text-gray-500", children: "No quotes found" })] })) : (filteredQuotes.map((quote) => (_jsx("div", { className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center space-x-4 mb-2", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: quote.name }), _jsx("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${quote.status === 'pending'
                                                                            ? 'bg-orange-100 text-orange-800'
                                                                            : 'bg-green-100 text-green-800'}`, children: quote.status })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(EnvelopeIcon, { className: "h-4 w-4" }), _jsx("span", { children: quote.email })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(PhoneIcon, { className: "h-4 w-4" }), _jsx("span", { children: quote.phone })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(CalendarIcon, { className: "h-4 w-4" }), _jsx("span", { children: quote.date || new Date().toISOString().split('T')[0] })] }), _jsx("div", { className: "font-medium text-blue-600", children: quote.package || 'General Inquiry' })] })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("button", { className: "p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200", children: _jsx(EyeIcon, { className: "h-4 w-4" }) }), _jsx("button", { className: "p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200", children: _jsx(TrashIcon, { className: "h-4 w-4" }) })] })] }) }, quote.id)))) })), activeTab === 'customers' && (_jsx("div", { className: "space-y-4", children: filteredCustomers.length === 0 ? (_jsxs("div", { className: "text-center py-8", children: [_jsx(UserGroupIcon, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }), _jsx("p", { className: "text-gray-500", children: "No customers found" })] })) : (filteredCustomers.map((customer) => (_jsx("div", { className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: customer.name }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(EnvelopeIcon, { className: "h-4 w-4" }), _jsx("span", { children: customer.email })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(PhoneIcon, { className: "h-4 w-4" }), _jsx("span", { children: customer.phone })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(CalendarIcon, { className: "h-4 w-4" }), _jsxs("span", { children: ["Joined: ", customer.joinDate] })] })] }), _jsx("div", { className: "mt-2", children: _jsxs("span", { className: "text-sm font-medium text-blue-600", children: ["Total Bookings: ", customer.totalBookings] }) })] }), _jsx("div", { className: "flex items-center space-x-2", children: _jsx("button", { className: "p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200", children: _jsx(EyeIcon, { className: "h-4 w-4" }) }) })] }) }, customer.id)))) }))] })] })] })] }));
};
export default AdminDashboard;
