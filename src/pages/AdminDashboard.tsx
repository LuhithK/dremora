import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ChartBarIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
  EyeIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('quotes');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for quotes
  const quotes = [
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
  const customers = [
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
    navigate('/');
  };

  const filteredQuotes = quotes.filter(quote =>
    quote.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.package.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    {
      title: 'Total Quotes',
      value: quotes.length,
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Pending Quotes',
      value: quotes.filter(q => q.status === 'pending').length,
      icon: ChartBarIcon,
      color: 'bg-orange-500'
    },
    {
      title: 'Registered Customers',
      value: customers.length,
      icon: UserGroupIcon,
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6"
        >
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('quotes')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'quotes'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Quote Requests ({quotes.length})
              </button>
              <button
                onClick={() => setActiveTab('customers')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'customers'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Registered Customers ({customers.length})
              </button>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'quotes' && (
              <div className="space-y-4">
                {filteredQuotes.length === 0 ? (
                  <div className="text-center py-8">
                    <ChatBubbleLeftRightIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No quotes found</p>
                  </div>
                ) : (
                  filteredQuotes.map((quote) => (
                    <div key={quote.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{quote.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              quote.status === 'pending' 
                                ? 'bg-orange-100 text-orange-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {quote.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <EnvelopeIcon className="h-4 w-4" />
                              <span>{quote.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <PhoneIcon className="h-4 w-4" />
                              <span>{quote.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CalendarIcon className="h-4 w-4" />
                              <span>{quote.date}</span>
                            </div>
                            <div className="font-medium text-blue-600">
                              {quote.package}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                            <EyeIcon className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'customers' && (
              <div className="space-y-4">
                {filteredCustomers.length === 0 ? (
                  <div className="text-center py-8">
                    <UserGroupIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No customers found</p>
                  </div>
                ) : (
                  filteredCustomers.map((customer) => (
                    <div key={customer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{customer.name}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <EnvelopeIcon className="h-4 w-4" />
                              <span>{customer.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <PhoneIcon className="h-4 w-4" />
                              <span>{customer.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CalendarIcon className="h-4 w-4" />
                              <span>Joined: {customer.joinDate}</span>
                            </div>
                          </div>
                          <div className="mt-2">
                            <span className="text-sm font-medium text-blue-600">
                              Total Bookings: {customer.totalBookings}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                            <EyeIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;