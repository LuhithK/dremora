import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { UserIcon, LockClosedIcon, EyeIcon, EyeSlashIcon, UserGroupIcon, ShieldCheckIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
const Login = () => {
    const navigate = useNavigate();
    const [loginType, setLoginType] = useState('traveller');
    const [mode, setMode] = useState('login');
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
    // Save users to localStorage
    const saveUsers = (users) => {
        localStorage.setItem('registeredUsers', JSON.stringify(users));
    };
    // Admin credentials (hardcoded for demo)
    const adminCredentials = {
        email: 'admin@dremoratours.com',
        password: 'luhith123'
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSignup = (e) => {
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
        const users = getStoredUsers();
        // Check if user already exists
        const existingUser = users.find((user) => user.email === formData.email);
        if (existingUser) {
            toast.error('User with this email already exists');
            return;
        }
        // Add new user
        const newUser = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            password: formData.password,
            joinDate: new Date().toISOString().split('T')[0],
            totalBookings: 0
        };
        users.push(newUser);
        saveUsers(users);
        toast.success('Account created successfully! Please login.');
        setMode('login');
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            toast.error('Please fill in all fields');
            return;
        }
        if (loginType === 'admin') {
            // Admin login
            if (formData.email === adminCredentials.email && formData.password === adminCredentials.password) {
                toast.success('Admin login successful!');
                localStorage.setItem('currentUser', JSON.stringify({
                    type: 'admin',
                    email: formData.email
                }));
                navigate('/admin');
            }
            else {
                toast.error('Invalid admin credentials');
            }
        }
        else {
            // Traveller login
            const users = getStoredUsers();
            const user = users.find((u) => u.email === formData.email && u.password === formData.password);
            if (user) {
                toast.success(`Welcome back, ${user.name}!`);
                localStorage.setItem('currentUser', JSON.stringify({
                    type: 'traveller',
                    ...user
                }));
                navigate('/');
            }
            else {
                toast.error('Invalid email or password');
            }
        }
    };
    const resetForm = () => {
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    };
    const switchMode = (newMode) => {
        setMode(newMode);
        resetForm();
    };
    const switchLoginType = (type) => {
        setLoginType(type);
        resetForm();
        setMode('login'); // Always switch to login mode when changing type
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-md w-full space-y-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: mode === 'login' ? 'Welcome Back' : 'Create Account' }), _jsx("p", { className: "text-gray-600", children: mode === 'login' ? 'Sign in to your account' : 'Join us for amazing travel experiences' })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, className: "bg-white rounded-2xl shadow-lg p-6", children: [_jsxs("div", { className: "flex space-x-4 mb-6", children: [_jsxs("button", { onClick: () => switchLoginType('traveller'), className: `flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 ${loginType === 'traveller'
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`, children: [_jsx(UserGroupIcon, { className: "h-5 w-5" }), _jsx("span", { className: "font-medium", children: "Traveller" })] }), _jsxs("button", { onClick: () => switchLoginType('admin'), className: `flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 ${loginType === 'admin'
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`, children: [_jsx(ShieldCheckIcon, { className: "h-5 w-5" }), _jsx("span", { className: "font-medium", children: "Admin" })] })] }), loginType === 'traveller' && (_jsxs("div", { className: "flex space-x-4 mb-6", children: [_jsx("button", { onClick: () => switchMode('login'), className: `flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${mode === 'login'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-600 hover:text-blue-600'}`, children: "Login" }), _jsx("button", { onClick: () => switchMode('signup'), className: `flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${mode === 'signup'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-600 hover:text-blue-600'}`, children: "Sign Up" })] })), _jsxs("form", { onSubmit: mode === 'login' ? handleLogin : handleSignup, className: "space-y-6", children: [mode === 'signup' && (_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Full Name" }), _jsxs("div", { className: "relative", children: [_jsx(UserIcon, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "text", name: "name", value: formData.name, onChange: handleInputChange, required: true, className: "w-full pl-10 pr-4 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300", placeholder: "Enter your full name" })] })] })), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address" }), _jsxs("div", { className: "relative", children: [_jsx(EnvelopeIcon, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleInputChange, required: true, className: "w-full pl-10 pr-4 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300", placeholder: loginType === 'admin' ? 'login_name' : 'your@email.com' })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Password" }), _jsxs("div", { className: "relative", children: [_jsx(LockClosedIcon, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: showPassword ? 'text' : 'password', name: "password", value: formData.password, onChange: handleInputChange, required: true, className: "w-full pl-10 pr-12 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300", placeholder: loginType === 'admin' ? 'password' : 'Enter your password' }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600", children: showPassword ? (_jsx(EyeSlashIcon, { className: "h-5 w-5" })) : (_jsx(EyeIcon, { className: "h-5 w-5" })) })] })] }), mode === 'signup' && (_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Confirm Password" }), _jsxs("div", { className: "relative", children: [_jsx(LockClosedIcon, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: showPassword ? 'text' : 'password', name: "confirmPassword", value: formData.confirmPassword, onChange: handleInputChange, required: true, className: "w-full pl-10 pr-4 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50 transition-all duration-300", placeholder: "Confirm your password" })] })] })), _jsx("button", { type: "submit", className: "w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl", children: mode === 'login'
                                        ? `Sign In as ${loginType === 'admin' ? 'Admin' : 'Traveller'}`
                                        : 'Create Account' })] }), loginType === 'traveller' && (_jsx("div", { className: "mt-6 text-center", children: _jsxs("p", { className: "text-sm text-gray-600", children: [mode === 'login' ? "Don't have an account? " : "Already have an account? ", _jsx("button", { onClick: () => switchMode(mode === 'login' ? 'signup' : 'login'), className: "text-blue-600 hover:text-blue-700 font-medium", children: mode === 'login' ? 'Sign up' : 'Sign in' })] }) }))] })] }) }));
};
export default Login;
