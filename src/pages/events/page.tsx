import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';

const EventsPage = () => {
  return (
    <div className="min-h-screen page-transition">
      <Header />
      <main>
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center">Events</h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 text-center mb-12 text-lg">
                Stay updated with CAWAP's upcoming events and community gatherings. Join us in making a difference!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <i className="far fa-calendar-alt text-secondary text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Upcoming Events</h3>
                    <p className="text-gray-600 mb-4">
                      Discover our scheduled events, workshops, and community programs. Mark your calendar and join us!
                    </p>
                    <a
                      href="/upcoming-events"
                      className="inline-block bg-secondary text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                    >
                      View Events
                    </a>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <i className="fas fa-gifts text-secondary text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Christmas Event</h3>
                    <p className="text-gray-600 mb-4">
                      Join us for our annual Christmas celebration filled with joy, community spirit, and festive activities.
                    </p>
                    <a
                      href="/christmas-event"
                      className="inline-block bg-secondary text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default EventsPage;