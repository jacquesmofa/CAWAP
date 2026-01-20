import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const NewBreedWomenPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=powerful%20confident%20african%20and%20caribbean%20women%20leaders%20in%20professional%20business%20attire%20standing%20together%20with%20determination%2C%20modern%20corporate%20setting%20showing%20strength%20and%20leadership%2C%20professional%20photography%20capturing%20women%20empowerment%20and%20excellence%2C%20diverse%20successful%20women%20of%20substance%20representing%20achievement%20and%20transformation%2C%20warm%20inspiring%20lighting%20creating%20uplifting%20atmosphere%2C%20contemporary%20environment%20symbolizing%20new%20generation%20of%20empowered%20women&width=1920&height=500&seq=new-breed-women-hero&orientation=landscape')",
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
                  <i className="fas fa-female text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Shaping Strong, Self-Driven Women</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Women of Substance, a groundbreaking program dedicated to empowering women to become strong, self-driven individuals who shape their own destinies.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This transformative program focuses on developing women's leadership abilities, self-confidence, and personal power. Through intensive training, mentorship, and community support, we help women discover their inner strength and unlock their full potential.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Participants learn to overcome obstacles, set and achieve ambitious goals, and become role models in their communities. The program emphasizes personal growth, professional development, and social responsibility.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Leadership development and empowerment training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Personal growth and self-discovery workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Mentorship from successful women leaders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Networking and community building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Goal setting and achievement strategies</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Join the Movement
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

export default NewBreedWomenPage;