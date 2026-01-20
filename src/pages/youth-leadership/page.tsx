import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const YouthLeadershipPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=diverse%20group%20of%20confident%20young%20african%20and%20caribbean%20teenagers%20in%20leadership%20training%20program%20showing%20determination%20and%20ambition%2C%20bright%20modern%20educational%20facility%20with%20inspiring%20atmosphere%2C%20professional%20photography%20capturing%20youth%20empowerment%20and%20mentorship%2C%20students%20engaged%20in%20collaborative%20learning%20activities%2C%20warm%20natural%20lighting%20representing%20hope%20growth%20and%20future%20success%2C%20contemporary%20setting%20with%20books%20and%20technology&width=1920&height=500&seq=youth-leadership-hero&orientation=landscape')",
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
                  <i className="fas fa-users text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Empowering Tomorrow's Leaders</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The heart and soul of our program lies in its unwavering dedication to nurturing the boundless potential of our youth, propelling them towards a future brimming with endless possibilities and holistic well-being.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Youth Leadership Program is designed to equip young people with the skills, confidence, and knowledge they need to become effective leaders in their communities. Through mentorship, workshops, and hands-on experiences, we help youth discover their strengths and develop their leadership capabilities.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We believe that investing in youth today creates stronger communities tomorrow. Our program focuses on developing critical thinking, communication skills, teamwork, and social responsibility.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Leadership skills development and mentorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Community engagement and volunteer opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Personal development workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Career guidance and planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Networking with community leaders</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Contact Us to Learn More
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

export default YouthLeadershipPage;