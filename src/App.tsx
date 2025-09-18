import React from 'react';
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
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <FloatingQuoteButton />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking/:packageId" element={<BookingForm />} />
            <Route path="/package/:packageId" element={<PackageDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;