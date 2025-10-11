import React from 'react';
import cafeImage from '../assets/cafe-de-aftrap-5.jpg';

const ThirdSection = () => {
  return (
    <section className="w-full pb-16 text-white relative z-20" style={{ backgroundColor: '#4a505c' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title */}
        <div className="text-center mb-16">
          <h2 className="scroll-fade-in-top mobile-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Wat is er nu leuker dan samen genieten van een live wedstrijd onder het genot van een verzorgd drankje?!
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1 scroll-fade-in-left">
            <div className="relative">
              <img 
                src={cafeImage} 
                alt="Café de Aftrap interior" 
                className="object-cover rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md lg:w-96 lg:h-96"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="text-white order-1 lg:order-2 scroll-fade-in-right">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Je kunt bij ons alle live uitzendingen volgen: Formule 1, Eredivisies, Keukenkampioen divisie. Maar natuurlijk ook de Champions League, het Nederlands elftal en nog veel meer, check onze agenda voor de juiste datums.
              </p>
              
              <p>
                Staat je gewenste live wedstrijd niet op, vraag het aan een van de barmedewerkers en zij zullen deze graag voor je opzetten op een van de grote TV-schermen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
