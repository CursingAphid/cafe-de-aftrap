import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/aftrap logo.png';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set initial visibility based on current route
    if (location.pathname === '/menu' || location.pathname === '/contact') {
      setIsVisible(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Always show header on menu and contact pages
      if (location.pathname === '/menu' || location.pathname === '/contact') {
        setIsVisible(true);
        return;
      }
      
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // Show header when hero section is completely out of view (top of hero is above viewport)
        setIsVisible(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <header className={`bg-black w-full fixed top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={logo} 
                alt="De Aftrap Logo" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Navigation Section */}
          <nav className="flex space-x-4">
            <Link 
              to="/" 
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                location.pathname === '/' 
                  ? 'bg-gray-800 text-white' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                location.pathname === '/menu' 
                  ? 'bg-gray-800 text-white' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                location.pathname === '/contact' 
                  ? 'bg-gray-800 text-white' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Bottom Border */}
      <div className="border-b border-gray-700"></div>
    </header>
  );
};

export default Header;
