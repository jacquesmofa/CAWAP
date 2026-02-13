import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const NewcomersSettlementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=welcoming%20diverse%20immigrant%20families%20receiving%20settlement%20support%20and%20guidance%20in%20community%20center%2C%20warm%20friendly%20atmosphere%20with%20staff%20helping%20newcomers%20with%20paperwork%20and%20resources%2C%20professional%20photography%20showing%20cultural%20integration%20and%20community%20support%2C%20african%20and%20caribbean%20newcomers%20learning%20about%20canadian%20life%2C%20bright%20hopeful%20lighting%20creating%20inclusive%20atmosphere%2C%20modern%20facility%20representing%20new%20beginnings%20opportunity%20and%20belonging&width=1920&height=500&seq=newcomers-settlement-hero&orientation=landscape')",
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
                  <i className="fas fa-people-carry text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Your New Home</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At CAWAP, we understand that starting a new life in a foreign land can be both exciting and challenging.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Newcomer's Settlement Program provides comprehensive support to help immigrants and refugees successfully integrate into Canadian society. We offer guidance on essential services, cultural orientation, language support, and community connections.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  From navigating government services to finding employment and housing, we walk alongside newcomers every step of the way, ensuring they have the resources and support needed to build a successful life in Canada.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Settlement Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Orientation to Canadian life and culture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Language support and ESL resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Employment assistance and job search support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Housing and accommodation guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Access to community resources and services</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Get Settlement Support
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

export default NewcomersSettlementPage;