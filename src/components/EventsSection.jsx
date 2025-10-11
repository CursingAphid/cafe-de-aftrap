import React from 'react';
import venueImage from '../assets/cafe-de-aftrap-1.jpg';

const EventsSection = () => {
  return (
    <section className="w-full py-16 text-white" style={{ backgroundColor: '#242424' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white scroll-fade-in-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              Iets te vieren?
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Of het nou een vrijgezellenfeest is, een teamuitje, een verjaardag of een gezellige borrel, alles is mogelijk en we verwelkomen jullie graag.
              </p>
              
              <p>
                In onze grote zaal kunnen we tot wel 350 personen ontvangen.
              </p>
              
              <p>
                Verder beschikken we over 2 vergaderruimtes, een voor 20 personen en een voor 14 personen.
              </p>
              
              <p>
                Ook bieden wij de mogelijkheid om de hele zaak af te huren voor grote gezelschappen, voor bijvoorbeeld bruiloften of andere speciale gelegenheden.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end scroll-fade-in-right">
            <div className="relative">
              <img 
                src={venueImage} 
                alt="Café de Aftrap venue" 
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

export default EventsSection;
