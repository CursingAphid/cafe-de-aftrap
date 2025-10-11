import React from 'react';
import cafeImage from '../assets/cafe-de-aftrap-2.jpeg';

const MenuSection = () => {
  return (
    <section className="w-full py-16 text-white" style={{ backgroundColor: '#282a2e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white scroll-fade-in-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              Ontdek ons menu
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed mb-8">
              <p>
                Benieuwd naar wat we op ons menu hebben staan?
              </p>
              
              <p>
                Klik dan op de knop hieronder om onze menukaart te bekijken! Van smaakvolle voorgerechten tot heerlijke hoofdgerechten en lekkere snacks, ons menu biedt het allemaal!
              </p>
              
              <p>
                Daarnaast bieden wij meerdere shots, speciaal bieren, of cocktails aan!
              </p>
            </div>

            {/* Menu Button */}
            <button 
              onClick={() => {
                // Add menu functionality here
                console.log('Menu button clicked');
              }}
              className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Bekijk het menu
            </button>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end scroll-fade-in-right">
            <div className="relative">
              <img 
                src={cafeImage} 
                alt="Café de Aftrap menu" 
                className="object-cover rounded-lg shadow-2xl"
                style={{ width: '400px', height: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
