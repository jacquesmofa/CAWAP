import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/effects/ScrollReveal';
import { getPastFlyers } from '../../data/flyers';

const EventsPage = () => {
  const pastFlyers = getPastFlyers();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=vibrant%20community%20events%20showcase%20with%20diverse%20people%20celebrating%20achievements%20and%20memorable%20moments%2C%20photo%20collage%20of%20past%20programs%20and%20celebrations%2C%20professional%20photography%20showing%20joy%20success%20and%20community%20spirit%2C%20warm%20lighting%20with%20nostalgic%20atmosphere&width=1920&height=400&seq=past-events-hero&orientation=landscape')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#26194f]/80 via-[#26194f]/60 to-[#26194f]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Past Events</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Celebrating our community's journey through memorable programs and events
          </p>
        </div>
      </section>

      {/* Flyers Grid Section */}
      {pastFlyers.length > 0 ? (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Take a look at the amazing programs and events we've hosted for our community
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastFlyers.map((flyer, index) => (
                  <ScrollReveal key={flyer.id} delay={index * 0.1}>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                      <div className="relative h-[500px] overflow-hidden">
                        <img
                          src={flyer.imageUrl}
                          alt={flyer.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {new Date(flyer.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{flyer.title}</h3>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Events Archive Coming Soon</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're building our events archive. Check back soon to see our past programs and celebrations!
                </p>
                <a
                  href="/gallery"
                  className="inline-block bg-gradient-to-r from-[#26194f] to-[#8e24aa] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
                >
                  View Photo Gallery
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#26194f] to-[#8e24aa]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                <i className="ri-calendar-event-line text-6xl text-white mb-6 inline-block"></i>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join Our Next Event
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Be part of our community story! Check out our upcoming events and programs.
                </p>
                <a
                  href="/upcoming-events"
                  className="inline-block bg-white text-[#26194f] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer text-lg"
                >
                  View Upcoming Events
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;
