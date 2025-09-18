import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import PackageDetails from './pages/PackageDetails';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';
import BookingForm from './pages/BookingForm';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-right" />
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Admin Dashboard Route */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* User Profile Route */}
          <Route path="/profile" element={<UserProfile />} />
          
          {/* Main App Routes with Navbar and Footer */}
          <Route path="/*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/package/:id" element={<PackageDetails />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking/:packageId" element={<BookingForm />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;