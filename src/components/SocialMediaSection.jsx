import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialMediaSection = () => {
  return (
    <section className="w-full py-16 text-white" style={{ backgroundColor: '#4a505c' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Column - Facebook Embed */}
          <div className="flex justify-center lg:justify-start scroll-fade-in-left">
            <div className="relative">
              <div 
                className="bg-white rounded-lg shadow-2xl overflow-hidden"
                style={{ width: '400px', height: '400px' }}
              >
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100072322133394&tabs=timeline&width=400&height=400&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                  width="400"
                  height="400"
                  style={{ border: 'none', overflow: 'hidden', width: '400px', height: '400px' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="text-white scroll-fade-in-right">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              Volg onze socials
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed mb-8">
              <p>
                Wil je op de hoogte blijven van alle sportieve activiteiten, wedstrijden, en gezelligheid in ons sportcafé? Volg dan onze social media kanalen! Hier delen we de laatste nieuwtjes, evenementen, en foto's van leuke momenten in ons sportcafé. Je kunt ons volgen op Facebook en Instagram.
              </p>
              
              <p>
                Blijf op de hoogte van alle sportieve actie en gezelligheid in ons sportcafé en volg ons op social media om niets te missen!
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100072322133394"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-500 p-4 rounded-lg transition-colors duration-300"
              >
                <FaFacebook className="w-8 h-8 text-white" />
              </a>
              
              <a 
                href="https://www.instagram.com/cafe_de_aftrap/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-500 p-4 rounded-lg transition-colors duration-300"
              >
                <FaInstagram className="w-8 h-8 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
