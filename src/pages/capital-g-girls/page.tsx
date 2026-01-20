import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const CapitalGGirlsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=empowered%20young%20african%20and%20caribbean%20girls%20smiling%20confidently%20in%20mentorship%20program%2C%20bright%20colorful%20educational%20environment%20showing%20sisterhood%20and%20support%2C%20professional%20photography%20capturing%20girl%20empowerment%20and%20leadership%20development%2C%20diverse%20group%20of%20teenage%20girls%20engaged%20in%20learning%20and%20growth%20activities%2C%20warm%20inspiring%20atmosphere%20with%20natural%20lighting%2C%20modern%20youth%20center%20setting%20representing%20hope%20and%20potential&width=1920&height=500&seq=capital-g-girls-hero&orientation=landscape')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white">Capital G-Girls</h1>
        </div>
      </section>

      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-user-graduate text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Empowering Young Girls to Dream Big</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A transformative mentorship and training program meticulously crafted to uplift and empower young girls who dare to dream and aspire to achieve remarkable life goals.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Capital G-Girls program provides a supportive environment where young girls can develop their talents, build confidence, and learn essential life skills. Through mentorship from successful women leaders, participants gain valuable insights and guidance for their personal and professional development.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We focus on building self-esteem, leadership abilities, and academic excellence while fostering a sense of community and sisterhood among participants.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">One-on-one mentorship with successful women</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Life skills and personal development workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Academic support and tutoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Leadership training and confidence building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Cultural enrichment activities</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Join Our Program
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

export default CapitalGGirlsPage;