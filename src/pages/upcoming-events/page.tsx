
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/effects/ScrollReveal';
import { getUpcomingFlyers, Flyer } from '../../data/flyers';

const UpcomingEventsPage = () => {
  // ========================================
  // 🔄 AUTOMATIC EVENT SYSTEM
  // ========================================
  const upcomingFlyers = getUpcomingFlyers();
  
  // State for popup modal
  const [selectedEvent, setSelectedEvent] = useState<Flyer | null>(null);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Open event details popup
  const openEventPopup = (flyer: Flyer) => {
    setSelectedEvent(flyer);
    document.body.style.overflow = 'hidden';
  };

  // Close event details popup
  const closeEventPopup = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=exciting%20upcoming%20community%20events%20calendar%20with%20diverse%20people%20planning%20activities%2C%20vibrant%20event%20planning%20atmosphere%20with%20colorful%20decorations%20and%20schedules%2C%20professional%20photography%20showing%20community%20engagement%20and%20anticipation%2C%20bright%20modern%20space%20with%20event%20posters%20and%20enthusiastic%20volunteers&width=1920&height=400&seq=upcoming-events-hero&orientation=landscape')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#26194f]/80 via-[#26194f]/60 to-[#26194f]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Upcoming Events</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Join us for exciting programs and community gatherings. Register today!
          </p>
        </div>
      </section>

      {/* Events Grid */}
      {upcomingFlyers.length > 0 ? (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Don't miss out on these amazing upcoming programs and events. Click on any event to see full details and register!
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingFlyers.map((flyer, index) => (
                <ScrollReveal key={flyer.id} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                    {/* Event Image */}
                    <div className="relative h-[400px] overflow-hidden">
                      <img
                        src={flyer.imageUrl}
                        alt={flyer.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#26194f] to-[#8e24aa] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Upcoming
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Event Details */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{flyer.title}</h3>
                      
                      {/* Date */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#26194f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <i className="ri-calendar-event-line text-[#8e24aa] text-xl"></i>
                        </div>
                        <div>
                          <p className="text-gray-800 font-semibold">{formatDate(flyer.date)}</p>
                          {flyer.time && <p className="text-gray-500 text-sm">{flyer.time}</p>}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                        {flyer.description}
                      </p>

                      {/* Learn More & Register Button */}
                      <button
                        onClick={() => openEventPopup(flyer)}
                        className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#26194f] to-[#8e24aa] text-white px-6 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl whitespace-nowrap"
                      >
                        <i className="ri-arrow-right-circle-line text-2xl"></i>
                        <span>Learn More & Register</span>
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-calendar-check-line text-gray-400 text-5xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">New Events Coming Soon</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're planning exciting new programs and events. Check back soon or contact us to stay updated!
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-[#26194f] to-[#8e24aa] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
                >
                  Contact Us
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* ========================================
          🎯 EVENT DETAILS POPUP MODAL
          ========================================
          Shows full event details when user clicks "Learn More & Register"
          ======================================== */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeEventPopup}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative">
              <div className="h-64 md:h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedEvent.imageUrl}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-t-3xl"></div>
              
              {/* Close Button */}
              <button
                onClick={closeEventPopup}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
              
              {/* Event Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="inline-block bg-gradient-to-r from-[#8e24aa] to-[#26194f] text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  Upcoming Event
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white">{selectedEvent.title}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Event Info Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#26194f] to-[#8e24aa] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-calendar-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Date</p>
                    <p className="text-gray-800 font-bold">{formatDate(selectedEvent.date)}</p>
                  </div>
                </div>
                
                {selectedEvent.time && (
                  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#26194f] to-[#8e24aa] rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-time-line text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Time</p>
                      <p className="text-gray-800 font-bold">{selectedEvent.time}</p>
                    </div>
                  </div>
                )}
                
                {selectedEvent.location && (
                  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#26194f] to-[#8e24aa] rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Location</p>
                      <p className="text-gray-800 font-bold">{selectedEvent.location}</p>
                    </div>
                  </div>
                )}
                
                {selectedEvent.cost && (
                  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#26194f] to-[#8e24aa] rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-price-tag-3-line text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Cost</p>
                      <p className="text-gray-800 font-bold text-green-600">{selectedEvent.cost}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">About This Event</h3>
                <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
              </div>

              {/* Who Should Attend */}
              {selectedEvent.whoShouldAttend && selectedEvent.whoShouldAttend.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Who Should Attend?</h3>
                  <div className="grid gap-3">
                    {selectedEvent.whoShouldAttend.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-[#26194f]/5 to-transparent p-3 rounded-lg">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#26194f] to-[#8e24aa] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What You Will Learn */}
              {selectedEvent.whatYouWillLearn && selectedEvent.whatYouWillLearn.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">What You Will Learn</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedEvent.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-[#8e24aa]/5 to-transparent p-3 rounded-lg">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#8e24aa] to-[#26194f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className="ri-lightbulb-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hosts */}
              {selectedEvent.hosts && selectedEvent.hosts.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Hosted By</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedEvent.hosts.map((host, index) => (
                      <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#26194f] to-[#8e24aa] rounded-full flex items-center justify-center">
                            <i className="ri-user-star-line text-white text-xl"></i>
                          </div>
                          <h4 className="text-lg font-bold text-gray-800">{host.name}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{host.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bonuses */}
              {selectedEvent.bonuses && selectedEvent.bonuses.length > 0 && (
                <div className="mb-8 bg-gradient-to-br from-[#f0c674]/20 to-[#e6a23c]/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <i className="ri-gift-line text-[#e6a23c]"></i>
                    Bonus for Attendees
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedEvent.bonuses.map((bonus, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#f0c674] to-[#e6a23c] rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="ri-checkbox-circle-line text-gray-900 text-sm"></i>
                        </div>
                        <p className="text-gray-700 font-medium text-sm">{bonus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Info */}
              {(selectedEvent.contactEmail || selectedEvent.contactPhone) && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                  <div className="flex flex-wrap gap-4">
                    {selectedEvent.contactEmail && (
                      <a 
                        href={`mailto:${selectedEvent.contactEmail}`}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#8e24aa] transition-colors"
                      >
                        <i className="ri-mail-line text-[#8e24aa]"></i>
                        <span>{selectedEvent.contactEmail}</span>
                      </a>
                    )}
                    {selectedEvent.contactPhone && (
                      <a 
                        href={`tel:${selectedEvent.contactPhone}`}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#8e24aa] transition-colors"
                      >
                        <i className="ri-phone-line text-[#8e24aa]"></i>
                        <span>{selectedEvent.contactPhone}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Register Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                {selectedEvent.registrationLink && (
                  <a
                    href={selectedEvent.registrationLink.startsWith('http') ? selectedEvent.registrationLink : selectedEvent.registrationLink}
                    target={selectedEvent.registrationLink.startsWith('http') ? '_blank' : '_self'}
                    rel={selectedEvent.registrationLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-[#f0c674] to-[#e6a23c] text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl whitespace-nowrap"
                  >
                    <i className="ri-external-link-line text-2xl"></i>
                    <span>Register Now</span>
                  </a>
                )}
                <button
                  onClick={closeEventPopup}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-gray-600 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-close-line text-xl"></i>
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default UpcomingEventsPage;
