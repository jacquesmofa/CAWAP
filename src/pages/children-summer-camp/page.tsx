import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const ChildrenSummerCampPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=happy%20diverse%20children%20playing%20and%20learning%20at%20summer%20camp%20with%20bright%20smiles%20and%20joyful%20expressions%2C%20colorful%20outdoor%20activities%20with%20kids%20engaged%20in%20fun%20educational%20games%2C%20professional%20photography%20capturing%20childhood%20joy%20and%20friendship%2C%20african%20and%20caribbean%20children%20participating%20in%20creative%20activities%2C%20sunny%20warm%20atmosphere%20with%20natural%20lighting%2C%20modern%20camp%20facility%20representing%20growth%20learning%20and%20summer%20fun&width=1920&height=500&seq=summer-camp-hero&orientation=landscape')",
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
                  <i className="fas fa-user-graduate text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Affordable and Enchanting Summer Camp</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CAWAP, with a deep commitment to inclusivity and the belief that every child deserves the chance to immerse themselves in the joy and wonder of summer camp, proudly presents our affordable and enchanting children's summer camp.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our summer camp provides a safe, fun, and educational environment where children can explore new activities, make friends, and create lasting memories. We offer a diverse range of programs including arts and crafts, sports, educational activities, and cultural experiences.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With experienced staff and a focus on holistic child development, our camp ensures that every child has the opportunity to learn, grow, and have fun during their summer break.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Camp Activities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Arts and crafts workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Sports and outdoor activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Educational programs and STEM activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Cultural enrichment and diversity education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Team building and social skills development</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Register Your Child
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

export default ChildrenSummerCampPage;