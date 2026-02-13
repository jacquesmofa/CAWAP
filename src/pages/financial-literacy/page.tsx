import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const FinancialLiteracyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=diverse%20african%20and%20caribbean%20people%20attending%20financial%20literacy%20workshop%20learning%20about%20money%20management%20and%20budgeting%2C%20modern%20training%20room%20with%20professional%20instructor%20and%20engaged%20participants%2C%20professional%20photography%20showing%20education%20empowerment%20and%20financial%20planning%2C%20adults%20taking%20notes%20and%20using%20calculators%2C%20bright%20inspiring%20atmosphere%20with%20natural%20lighting%2C%20contemporary%20setting%20representing%20economic%20empowerment%20and%20financial%20independence&width=1920&height=500&seq=financial-literacy-hero&orientation=landscape')",
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
                  <i className="fas fa-file-invoice-dollar text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Building Financial Confidence</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We understand that financial literacy is the cornerstone of a secure and prosperous future. Our program serves as a guiding light, illuminating the path to financial well-being for individuals from all walks of life.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Financial Literacy program provides comprehensive education on budgeting, saving, investing, credit management, and financial planning. We empower individuals to make informed financial decisions and build a stable economic foundation.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Through workshops, one-on-one counseling, and practical resources, we help participants develop the knowledge and skills needed to achieve financial independence and security.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Topics Covered</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Budgeting and money management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Saving strategies and emergency funds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Credit management and debt reduction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Investment basics and retirement planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Tax preparation and financial planning</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Enroll in Program
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

export default FinancialLiteracyPage;