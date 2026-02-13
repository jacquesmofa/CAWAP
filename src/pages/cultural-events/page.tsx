import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const CulturalEventsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=vibrant%20african%20and%20caribbean%20cultural%20festival%20celebration%20with%20colorful%20traditional%20clothing%20and%20dancing%2C%20joyful%20community%20gathering%20with%20music%20and%20cultural%20performances%2C%20professional%20photography%20capturing%20cultural%20pride%20diversity%20and%20heritage%2C%20diverse%20people%20celebrating%20traditions%20with%20drums%20and%20traditional%20attire%2C%20bright%20festive%20atmosphere%20with%20natural%20lighting%2C%20outdoor%20community%20event%20representing%20cultural%20preservation%20unity%20and%20celebration&width=1920&height=500&seq=cultural-events-hero&orientation=landscape')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </section>

      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="far fa-calendar-check text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Celebrating Our Rich Heritage</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At CAWAP, we firmly believe that culture is not only an integral part of a person's identity but also a precious thread that weaves our communities together.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Cultural Events program celebrates the rich diversity of African and Caribbean cultures through festivals, performances, exhibitions, and community gatherings. These events provide opportunities for cultural expression, education, and community building.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We organize various cultural celebrations throughout the year, showcasing traditional music, dance, food, art, and customs. These events help preserve cultural heritage while promoting cross-cultural understanding and appreciation.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Event Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Cultural festivals and celebrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Traditional music and dance performances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Art exhibitions and cultural showcases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Food festivals and culinary experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Community gatherings and networking</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Learn About Upcoming Events
                </a>
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

export default CulturalEventsPage;