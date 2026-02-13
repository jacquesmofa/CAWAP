import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const WomenEmpowermentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=confident%20empowered%20african%20and%20caribbean%20women%20in%20professional%20development%20workshop%20standing%20together%20with%20determination%2C%20modern%20training%20facility%20with%20inspiring%20atmosphere%2C%20professional%20photography%20capturing%20women%20empowerment%20and%20sisterhood%2C%20diverse%20women%20of%20various%20ages%20engaged%20in%20skill%20building%20activities%2C%20warm%20natural%20lighting%20representing%20strength%20growth%20and%20transformation%2C%20contemporary%20setting%20showing%20leadership%20and%20economic%20empowerment&width=1920&height=500&seq=women-empowerment-hero&orientation=landscape')",
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
                  <i className="fas fa-user-shield text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Empowering Women for Success</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Women Empowerment Program is a beacon of support and opportunity designed to equip women with the skills, confidence, and resources needed to excel in the competitive job market.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We provide comprehensive support to help women overcome barriers, develop professional skills, and achieve economic independence. Through workshops, training sessions, and mentorship, we empower women to take control of their careers and lives.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our program addresses the unique challenges faced by women in the workforce and provides practical solutions to help them succeed.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Components</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Professional skills development and training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Career counseling and job placement assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Entrepreneurship support and business development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Networking opportunities with successful women</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Personal development and confidence building</span>
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

export default WomenEmpowermentPage;