import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const HeartWiseSeniorsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=happy%20elderly%20african%20and%20caribbean%20seniors%20enjoying%20community%20activities%20together%20with%20warm%20smiles%2C%20bright%20welcoming%20senior%20center%20with%20comfortable%20atmosphere%2C%20professional%20photography%20showing%20respect%20dignity%20and%20care%20for%20elders%2C%20diverse%20group%20of%20older%20adults%20engaged%20in%20social%20activities%2C%20natural%20warm%20lighting%20creating%20joyful%20uplifting%20mood%2C%20modern%20accessible%20facility%20representing%20community%20support%20and%20intergenerational%20connection&width=1920&height=500&seq=heart-wise-seniors-hero&orientation=landscape')",
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
                  <i className="far fa-gem text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Creating a Haven for Our Seniors</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our unwavering commitment is to create a secure and inclusive haven for seniors, where meaningful connections flourish, vibrant social activities abound, and knowledge on significant subjects expands.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Heart-Wise Seniors program recognizes the invaluable wisdom and experience of our senior community members. We provide a welcoming space where seniors can engage in social activities, continue learning, and maintain active, fulfilling lives.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Through our program, seniors have access to health and wellness activities, educational workshops, social events, and opportunities to share their knowledge and experiences with younger generations.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Social activities and community gatherings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Health and wellness programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Educational workshops and seminars</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Intergenerational mentorship opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Cultural and recreational activities</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Get Involved
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

export default HeartWiseSeniorsPage;