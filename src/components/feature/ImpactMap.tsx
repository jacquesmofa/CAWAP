import { useState } from 'react';

interface ServiceArea {
  id: string;
  name: string;
  coordinates: { lat: number; lng: number };
  programs: string[];
  impact: number; // Number of people helped
  color: string;
}

const ImpactMap = () => {
  const [selectedArea, setSelectedArea] = useState<ServiceArea | null>(null);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  // Service areas with impact data - Updated for Brampton and surrounding areas
  const serviceAreas: ServiceArea[] = [
    {
      id: 'brampton-central',
      name: 'Brampton Central',
      coordinates: { lat: 43.7315, lng: -79.7624 },
      programs: ['Youth Leadership', 'Food Pantry', 'Women Empowerment', 'Mental Health', 'JavaScript Program'],
      impact: 520,
      color: '#3c1053'
    },
    {
      id: 'brampton-north',
      name: 'Brampton North',
      coordinates: { lat: 43.7532, lng: -79.7599 },
      programs: ['Heart-Wise Seniors', 'Cultural Events', 'Newcomers Settlement', 'Financial Literacy'],
      impact: 380,
      color: '#5a1a7a'
    },
    {
      id: 'mississauga',
      name: 'Mississauga',
      coordinates: { lat: 43.5890, lng: -79.6441 },
      programs: ['Capital G-Girls', 'Children Summer Camp', 'Women Empowerment', 'Mental Health'],
      impact: 340,
      color: '#c9b037'
    },
    {
      id: 'vaughan',
      name: 'Vaughan',
      coordinates: { lat: 43.8361, lng: -79.4983 },
      programs: ['Youth Leadership', 'Cultural Events', 'Food Pantry', 'Newcomers Settlement'],
      impact: 290,
      color: '#d4c050'
    },
    {
      id: 'brampton-south',
      name: 'Brampton South',
      coordinates: { lat: 43.6833, lng: -79.7599 },
      programs: ['JavaScript Program', 'Financial Literacy', 'Women Empowerment', 'Mental Health'],
      impact: 250,
      color: '#3c1053'
    }
  ];

  const getImpactLevel = (impact: number): string => {
    if (impact >= 500) return 'Very High';
    if (impact >= 350) return 'High';
    if (impact >= 250) return 'Medium';
    return 'Growing';
  };

  const getImpactColor = (impact: number): string => {
    if (impact >= 500) return 'bg-[#3c1053]';
    if (impact >= 350) return 'bg-[#5a1a7a]';
    if (impact >= 250) return 'bg-[#c9b037]';
    return 'bg-[#d4c050]';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-4">
            Our Impact Across Communities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore the regions we serve and see how CAWAP programs are making a difference in communities across Brampton and the Greater Toronto Area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              {/* Google Maps Embed - Brampton Area */}
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57909103147!2d-79.86240842343749!3d43.68410799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15eaa5d05abf%3A0x352d7b495cdacc5a!2sBrampton%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CAWAP Service Areas Map - Brampton and GTA"
                ></iframe>
                
                {/* Overlay with service area markers */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="relative w-full h-full">
                    {/* Visual indicators for service areas */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-32 h-32 bg-[#3c1053]/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Legend */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#3c1053]"></div>
                  <span className="text-gray-600">Very High Impact (500+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#5a1a7a]"></div>
                  <span className="text-gray-600">High Impact (350+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#c9b037]"></div>
                  <span className="text-gray-600">Medium Impact (250+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#d4c050]"></div>
                  <span className="text-gray-600">Growing Impact</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#3c1053] mb-6">Service Areas</h3>
            
            {serviceAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(selectedArea?.id === area.id ? null : area)}
                onMouseEnter={() => setHoveredArea(area.id)}
                onMouseLeave={() => setHoveredArea(null)}
                className={`w-full text-left bg-white rounded-xl shadow-lg p-6 transition-all duration-300 cursor-pointer ${
                  selectedArea?.id === area.id
                    ? 'ring-4 ring-[#c9b037] scale-105'
                    : hoveredArea === area.id
                    ? 'shadow-xl scale-102'
                    : 'hover:shadow-xl'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${getImpactColor(area.impact)} animate-pulse`}></div>
                    <h4 className="font-bold text-lg text-gray-800">{area.name}</h4>
                  </div>
                  <i className={`ri-arrow-${selectedArea?.id === area.id ? 'up' : 'down'}-s-line text-xl text-gray-400`}></i>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <i className="ri-user-heart-line text-[#c9b037]"></i>
                  <span className="text-2xl font-bold text-[#3c1053]">{area.impact}</span>
                  <span className="text-sm text-gray-500">people helped</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <span className={`px-3 py-1 rounded-full ${getImpactColor(area.impact)} text-white font-medium`}>
                    {getImpactLevel(area.impact)} Impact
                  </span>
                </div>

                {/* Expanded Details */}
                {selectedArea?.id === area.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-3 animate-fadeIn">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Active Programs:</h5>
                      <div className="flex flex-wrap gap-2">
                        {area.programs.map((program, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-[#3c1053]/10 text-[#3c1053] rounded-full text-xs font-medium"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="ri-map-pin-line text-[#c9b037]"></i>
                      <span>Lat: {area.coordinates.lat}, Lng: {area.coordinates.lng}</span>
                    </div>
                  </div>
                )}
              </button>
            ))}

            {/* Total Impact Summary */}
            <div className="bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-xl shadow-xl p-6 text-white mt-6">
              <h4 className="text-lg font-bold mb-2">Total Community Impact</h4>
              <div className="text-4xl font-bold mb-2">
                {serviceAreas.reduce((sum, area) => sum + area.impact, 0)}+
              </div>
              <p className="text-sm opacity-90">Lives touched across all service areas</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Want to bring CAWAP programs to your neighborhood?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#c9b037] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b39f2f] transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactMap;
