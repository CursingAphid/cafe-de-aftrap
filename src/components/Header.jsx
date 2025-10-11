import React, { useState, useEffect } from 'react';
import logo from '../assets/aftrap logo.png';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // Show header when hero section is completely out of view (top of hero is above viewport)
        setIsVisible(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-black w-full fixed top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="De Aftrap Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          {/* Navigation Section */}
          <nav className="flex space-x-8">
            <a 
              href="#home" 
              className="bg-gray-800 text-white px-4 py-2 text-sm font-medium uppercase tracking-wide hover:bg-gray-700 transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#menu" 
              className="text-white px-4 py-2 text-sm font-medium uppercase tracking-wide hover:text-gray-300 transition-colors duration-200"
            >
              Menu
            </a>
            <a 
              href="#contact" 
              className="text-white px-4 py-2 text-sm font-medium uppercase tracking-wide hover:text-gray-300 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
      
      {/* Bottom Border */}
      <div className="border-b border-gray-700"></div>
    </header>
  );
};

export default Header;
