import React from 'react';
import Header from '../components/Header';
import backgroundImage from '../assets/cafe-de-aftrap-4.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactPage = () => {
  useScrollAnimation();

  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      
      {/* Contact Title Section */}
      <section 
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{
          height: '300px',
          paddingTop: '80px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Blurred Background Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: 'rgba(0, 0, 0, 0.3)'
          }}
        ></div>
        
        {/* Contact Title */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight fade-in-hero-title">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="w-full py-16" style={{ backgroundColor: '#242424' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-gray-700 rounded-lg p-6 scroll-fade-in-left">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contact- en adresgegevens
                </h2>
                <div className="text-gray-300 space-y-2">
                  <p className="text-lg font-semibold">Café de Aftrap</p>
                  <p>Markt 49</p>
                  <p>6461 ED Kerkrade</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-600">
                  <div className="text-gray-300 space-y-3">
                    <div className="flex items-center space-x-3">
                      <a 
                        href="tel:+31458519892" 
                        className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        045 8519 892
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <a 
                        href="mailto:info@aftrap-kerkrade.nl" 
                        className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        info@aftrap-kerkrade.nl
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-gray-700 rounded-lg p-6 scroll-fade-in-left">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Openingstijden
                </h2>
                <div className="text-gray-300 space-y-2">
                  <div className="flex justify-between">
                    <span>Maandag:</span>
                    <span className="font-semibold text-red-400">Gesloten</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Di t/m do:</span>
                    <span className="font-semibold">12.00 - 00.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vrijdag:</span>
                    <span className="font-semibold">10.00 - 02.30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zaterdag:</span>
                    <span className="font-semibold">12.00 - 02.30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zondag:</span>
                    <span className="font-semibold">12.00 - 00.00</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-600">
                  <p className="text-sm text-gray-400 italic">
                    De keuken is elke dag geopend van 12.00 tot 00.00
                  </p>
                </div>
              </div>

            </div>

            {/* Google Maps */}
            <div className="bg-gray-700 rounded-lg p-6 scroll-fade-in-right">
              <h2 className="text-2xl font-bold text-white mb-4">
                Locatie
              </h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.1234567890123!2d6.0625!3d50.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0a1234567890%3A0x1234567890abcdef!2sMarkt%2049%2C%206461%20ED%20Kerkrade!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Café de Aftrap Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
