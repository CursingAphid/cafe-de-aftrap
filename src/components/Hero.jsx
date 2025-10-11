import React from 'react';
import logo from '../assets/aftrap logo.png';
import backgroundImage from '../assets/cafe-de-aftrap-4.png';
import scrollMouse from '../assets/scroll-down-mouse.gif';

const Hero = () => {
  return (
    <section 
      id="hero-section"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Logo - Made bigger */}
        <div className="mb-8">
          <img 
            src={logo} 
            alt="De Aftrap Logo" 
            className="fade-in-logo mx-auto h-72 sm:h-80 lg:h-96 w-auto drop-shadow-lg"
          />
        </div>
        
        {/* Main Slogan */}
        <h1 className="fade-in-hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
          De nieuwe thuisbasis om sport te kijken !
        </h1>
        
        {/* Call-to-Action Button */}
        <button 
          onClick={() => {
            const aboutSection = document.getElementById('about-section');
            if (aboutSection) {
              const offsetTop = aboutSection.offsetTop + (window.innerHeight * 0.1);
              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
              });
            }
          }}
          className="fade-in-button bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Meer weergeven
        </button>
      </div>
      
      {/* Scroll down mouse indicator */}
      <div className="absolute bottom-8 right-8 z-10">
        <img 
          src={scrollMouse} 
          alt="Scroll down" 
          className="h-20 w-auto border border-white rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
