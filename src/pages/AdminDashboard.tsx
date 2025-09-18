import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  UserIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<'traveller' | 'admin'>('traveller');
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Get stored users from localStorage
  const getStoredUsers = () => {
    const users = localStorage.getItem('registeredUsers');
    return users ? JSON.parse(users) : [];
  };

  // Get stored admins from localStorage
  const getStoredAdmins = () => {
    const admins = localStorage.getItem('registeredAdmins');
    return admins ? JSON.parse(admins) : [];
  };
  // Save users to localStorage
  const saveUsers = (users: any[]) => {
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  };

  // Save admins to localStorage
  const saveAdmins = (admins: any[]) => {
    localStorage.setItem('registeredAdmins', JSON.stringify(admins));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (loginType === 'admin') {
      // Admin signup
      const admins = getStoredAdmins();
      
      // Check if admin already exists
      const existingAdmin = admins.find((admin: any) => admin.email === formData.email);
      if (existingAdmin) {
        toast.error('Admin with this email already exists');
        return;
      }

      // Add new admin
      const newAdmin = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password
      };

      admins.push(newAdmin);
      saveAdmins(admins);
    } else {
      // Traveller signup
      const users = getStoredUsers();
      
      // Check if user already exists
      const existingUser = users.find((user: any) => user.email === formData.email);
      if (existingUser) {
        toast.error('User with this email already exists');
        return;
      }

      // Add new user
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password
      };

      users.push(newUser);
      saveUsers(users);
    }

    toast.success('Account created successfully! Please login.');
    setMode('login');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    if (loginType === 'admin') {
      // Admin login
      const admins = getStoredAdmins();
      const admin = admins.find((a: any) => a.email === formData.email && a.password === formData.password);
      
      if (admin) {
        toast.success(`Welcome back, ${admin.name}!`);
        localStorage.setItem('currentUser', JSON.stringify({ 
          type: 'admin', 
          ...admin 
        }));
        navigate('/admin');
      } else {
        toast.error('Invalid admin credentials');
      }
    } else {
      // Traveller login
      const users = getStoredUsers();
      const user = users.find((u: any) => u.email === formData.email && u.password === formData.password);
      
      if (user) {
        toast.success(`Welcome back, ${user.name}!`);
        localStorage.setItem('currentUser', JSON.stringify({ 
          type: 'traveller', 
          ...user 
        }));
        navigate('/');
      } else {
        toast.error('Invalid email or password');
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const switchMode = (newMode: 'login' | 'signup') => {
    setMode(newMode);
    resetForm();
  };

  const switchLoginType = (type: 'traveller' | 'admin') => {
    setLoginType(type);
    resetForm();
    setMode('login'); // Always switch to login mode when changing type
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-600">
            {mode === 'login' ? 'Sign in to your account' : 'Join us for amazing travel experiences'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          {/* Login Type Selector */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => switchLoginType('traveller')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 ${
                loginType === 'traveller'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <UserGroupIcon className="h-5 w-5" />
              <span className="font-medium">Traveller</span>
            </button>
            <button
              onClick={() => switchLoginType('admin')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 ${
                loginType === 'admin'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <ShieldCheckIcon className="h-5 w-5" />
              <span className="font-medium">Admin</span>
            </button>
          </div>

          {/* Mode Selector */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => switchMode('login')}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                mode === 'login'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => switchMode('signup')}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                mode === 'signup'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={mode === 'login' ? handleLogin : handleSignup} className="space-y-6">
            {/* Name Field (only for signup) */}
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-12 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field (only for signup) */}
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {loginType === 'admin' 
                ? mode === 'login' ? 'Sign In as Admin' : 'Create Admin Account'
                : mode === 'login' 
                  ? 'Sign In as Traveller'
                  : 'Create Account'
              }
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;