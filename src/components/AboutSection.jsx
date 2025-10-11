import React from 'react';
import cafeImage from '../assets/cafe-de-aftrap-3.jpg';

const AboutSection = () => {
  return (
    <section id="about-section" className="w-full pb-16" style={{ backgroundColor: '#242424', paddingTop: '175px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white scroll-fade-in-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              De nieuwe thuisbasis om sport te kijken!
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Ouderwets gezellig sport kijken met een heerlijk speciaalbiertje of een van onze andere lekkere drankjes! Café de Aftrap is dé perfecte plek op de Markt in Kerkrade om sport te kijken of gewoon gezellig te borrelen met vrienden of vriendinnen!
              </p>
              
              <p>
                Wij hebben een ruim aanbod van heerlijke speciaalbieren, cocktails, een lekkere lunch of een heerlijk diner! Daarnaast is onze keuken voor snack's altijd open tot middernacht!
              </p>
              
              <p>
                Bij elke belangrijke sportwedstrijd zorgen wij voor de beste atmosfeer, zodat het net is alsof je het van dichtbij meemaakt in het stadion!
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end scroll-fade-in-right">
            <div className="relative">
              <img 
                src={cafeImage} 
                alt="Café de Aftrap exterior" 
                className="object-cover rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md lg:w-96 lg:h-96"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
