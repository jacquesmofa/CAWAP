import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const SankofaRoyaleAwardsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=elegant%20awards%20ceremony%20gala%20event%20with%20african%20and%20caribbean%20cultural%20celebration%2C%20sophisticated%20ballroom%20setting%20with%20golden%20lighting%20and%20decorative%20elements%2C%20professional%20photography%20capturing%20achievement%20recognition%20and%20cultural%20pride%2C%20diverse%20community%20members%20in%20formal%20attire%20celebrating%20excellence%2C%20warm%20luxurious%20atmosphere%20with%20stage%20and%20awards%20presentation%2C%20contemporary%20venue%20representing%20honor%20tradition%20and%20community%20celebration&width=1920&height=500&seq=sankofa-awards-hero&orientation=landscape')",
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
                  <i className="fas fa-award text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Celebrating Black Excellence</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Canadian and African Women Aid Program has recognized a concerning lack of celebration and representation of the black community across various sectors.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Sankofa Royale Awards were created to honor and celebrate the outstanding achievements and contributions of individuals within the black community. This prestigious event recognizes excellence in various fields including business, education, community service, arts, and leadership.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Through this initiative, we aim to inspire future generations by highlighting role models and celebrating the rich diversity and accomplishments of the black community.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Award Categories</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Community Leadership and Service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Business and Entrepreneurship Excellence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Arts and Culture Achievement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Education and Youth Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Lifetime Achievement Award</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Nominate Someone
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

export default SankofaRoyaleAwardsPage;