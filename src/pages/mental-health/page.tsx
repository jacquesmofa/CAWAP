import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const MentalHealthPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=peaceful%20supportive%20mental%20health%20counseling%20session%20with%20diverse%20people%20in%20comfortable%20therapy%20room%2C%20calm%20serene%20atmosphere%20with%20soft%20natural%20lighting%20and%20plants%2C%20professional%20photography%20showing%20emotional%20wellness%20and%20healing%2C%20african%20and%20caribbean%20individuals%20receiving%20compassionate%20care%20and%20support%2C%20warm%20welcoming%20environment%20representing%20hope%20recovery%20and%20mental%20wellbeing%2C%20contemporary%20counseling%20center%20with%20comfortable%20seating&width=1920&height=500&seq=mental-health-hero&orientation=landscape')",
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
                  <i className="fas fa-brain text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Breaking the Stigma</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We believe that mental health is a fundamental aspect of overall well-being, and we are dedicated to eradicating the stigma surrounding mental illnesses.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Mental Health program provides support, education, and resources to individuals and families affected by mental health challenges. We create a safe, non-judgmental space where people can seek help, share their experiences, and access professional support.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Through awareness campaigns, support groups, counseling services, and educational workshops, we work to promote mental wellness and ensure that everyone has access to the mental health care they need.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Mental health awareness and education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Support groups and peer counseling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Referrals to professional mental health services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Stress management and coping strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Crisis intervention and emergency support</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Get Support
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

export default MentalHealthPage;