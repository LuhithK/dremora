import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Destinations from './pages/Destinations';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingForm from './pages/BookingForm';
import PackageDetails from './pages/PackageDetails';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import FloatingQuoteButton from './components/FloatingQuoteButton';
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(Navbar, {}), _jsx(FloatingQuoteButton, {}), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/packages", element: _jsx(Packages, {}) }), _jsx(Route, { path: "/destinations", element: _jsx(Destinations, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/booking/:packageId", element: _jsx(BookingForm, {}) }), _jsx(Route, { path: "/package/:packageId", element: _jsx(PackageDetails, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/admin", element: _jsx(AdminDashboard, {}) })] }) }), _jsx(Footer, {}), _jsx(Toaster, { position: "top-right" })] }) }));
}
export default App;
