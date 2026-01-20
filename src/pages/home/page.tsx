import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import ImageCarousel from './components/ImageCarousel';
import FounderMessage from './components/FounderMessage';
import JavascriptSection from './components/JavascriptSection';
import ScrollReveal from '../../components/effects/ScrollReveal';
import { getUpcomingFlyers, getPastFlyers } from '../../data/flyers';

const HomePage = () => {
  const upcomingFlyers = getUpcomingFlyers();
  const pastFlyers = getPastFlyers();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      
      {/* Important Location Change Announcement */}
      <section className="py-8 bg-gradient-to-r from-[#8e24aa] via-[#5e35b1] to-[#26194f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-6 bg-white/15 backdrop-blur-md rounded-2xl p-6 md:p-8 border-2 border-white/40 shadow-2xl">
              {/* Animated Icon */}
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-yellow-300 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-white to-yellow-100 rounded-full flex items-center justify-center shadow-2xl">
                  <i className="ri-map-pin-line text-[#8e24aa] text-4xl md:text-5xl animate-bounce"></i>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-3 flex-wrap">
                  <span className="bg-yellow-300 text-[#26194f] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide shadow-lg animate-pulse">
                    🎉 Exciting News!
                  </span>
                  <span className="bg-white/30 text-white text-xs font-bold px-3 py-2 rounded-full uppercase tracking-wide">
                    Coming February 1st, 2026
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                  We're Moving to a <span className="text-yellow-300">New Location!</span>
                </h3>
                <p className="text-white/95 text-base md:text-lg leading-relaxed mb-2">
                  <strong className="text-yellow-300">Mark your calendars!</strong> Starting <strong className="text-yellow-300">February 1st, 2026</strong>, you'll find us at our brand new location:
                </p>
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  <span className="inline-block bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <i className="ri-map-pin-2-fill text-yellow-300 mr-2"></i>
                    <strong className="text-yellow-300">101 West Drive, Unit 7</strong>
                  </span>
                </p>
                <p className="text-white/90 text-sm md:text-base mt-3">
                  Same building, exciting new unit! We can't wait to welcome you! 🌟
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="flex-shrink-0">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#26194f] px-6 py-4 rounded-full font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-2xl hover:shadow-yellow-300/50 hover:scale-105 transform"
                >
                  <i className="ri-map-pin-2-line text-xl"></i>
                  <span className="text-sm md:text-base">Get Directions</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AboutSection />
      <ProgramsSection />
      
      {/* Upcoming Events Flyers Section */}
      {upcomingFlyers.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-[#8e24aa]/5 to-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-[#8e24aa]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-calendar-event-line text-[#8e24aa] text-3xl"></i>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Join us at our upcoming programs and events - everyone is welcome!
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingFlyers.map((flyer, index) => (
                <ScrollReveal key={flyer.id} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                    <div className="relative h-[400px] overflow-hidden">
                      <img
                        src={flyer.imageUrl}
                        alt={flyer.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-[#8e24aa] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {new Date(flyer.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{flyer.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{flyer.description}</p>
                      {flyer.eventLink && (
                        <a
                          href={flyer.eventLink}
                          className="inline-flex items-center gap-2 text-[#8e24aa] font-semibold hover:text-[#26194f] transition-colors cursor-pointer"
                        >
                          <span>Learn More</span>
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/upcoming-events"
                className="inline-block bg-gradient-to-r from-[#8e24aa] to-[#26194f] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
              >
                View All Upcoming Events
              </a>
            </div>
          </div>
        </section>
      )}
      
      {/* Food Bank Quick Link Section */}
      <section className="py-16 bg-gradient-to-br from-[#c9b037]/10 to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px]">
                  <img
                    src="https://readdy.ai/api/search-image?query=welcoming%20community%20food%20bank%20with%20volunteers%20helping%20diverse%20families%2C%20organized%20shelves%20of%20fresh%20produce%20and%20nutritious%20groceries%2C%20bright%20caring%20atmosphere%20showing%20food%20security%20and%20community%20support%2C%20professional%20photography%20with%20warm%20lighting&width=800&height=400&seq=home-food-bank-feature&orientation=landscape"
                    alt="CAWAP Food Bank"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                    <i className="fas fa-shopping-basket text-[#c9b037] text-3xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">CAWAP Food Bank</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Providing nutritious food assistance to families and individuals facing food insecurity. We serve our community with dignity, compassion, and respect.
                  </p>
                  <div className="flex items-center gap-6 mb-6">
                    <div>
                      <div className="text-3xl font-bold text-[#c9b037]">500+</div>
                      <div className="text-sm text-gray-600">Families Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#c9b037]">15,000+</div>
                      <div className="text-sm text-gray-600">Meals Distributed</div>
                    </div>
                  </div>
                  <a
                    href="/food-pantry"
                    className="inline-block bg-[#c9b037] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer w-fit"
                  >
                    Learn More About Our Food Bank
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <JavascriptSection />
      
      {/* Past Programs & Events Flyers Section */}
      {pastFlyers.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-[#26194f]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-time-line text-[#26194f] text-3xl"></i>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Past Programs & Events</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Take a look at the amazing programs and events we've hosted for our community
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastFlyers.slice(0, 6).map((flyer, index) => (
                <ScrollReveal key={flyer.id} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                    <div className="relative h-[400px] overflow-hidden">
                      <img
                        src={flyer.imageUrl}
                        alt={flyer.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {new Date(flyer.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{flyer.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{flyer.description}</p>
                      {flyer.eventLink && (
                        <a
                          href={flyer.eventLink}
                          className="inline-flex items-center gap-2 text-[#26194f] font-semibold hover:text-[#8e24aa] transition-colors cursor-pointer"
                        >
                          <span>View Details</span>
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/events"
                className="inline-block bg-gradient-to-r from-[#26194f] to-[#8e24aa] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
              >
                View All Past Events
              </a>
            </div>
          </div>
        </section>
      )}
      
      <FounderMessage />
      <ImageCarousel />
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
