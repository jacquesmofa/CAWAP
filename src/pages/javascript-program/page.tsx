import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const JavascriptProgramPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=diverse%20students%20learning%20computer%20programming%20and%20coding%20on%20modern%20laptops%20in%20technology%20training%20center%2C%20bright%20contemporary%20classroom%20with%20multiple%20monitors%20showing%20code%2C%20professional%20photography%20capturing%20tech%20education%20and%20digital%20skills%20development%2C%20african%20and%20caribbean%20youth%20engaged%20in%20software%20development%20learning%2C%20inspiring%20atmosphere%20with%20natural%20lighting%2C%20modern%20facility%20representing%20career%20opportunities%20and%20innovation&width=1920&height=500&seq=javascript-program-hero&orientation=landscape')",
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
                  <i className="far fa-file-code text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">JavaScript for Afro Black Women</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are committed to bridging the diversity gap in the tech sector and providing equitable opportunities for underrepresented communities.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our JavaScript program is specifically designed to empower Afro Black women with the technical skills needed to succeed in the technology industry. Through comprehensive training in JavaScript programming, web development, and software engineering, we prepare participants for rewarding careers in tech.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The program includes hands-on projects, mentorship from industry professionals, and job placement assistance to ensure participants can successfully transition into tech careers.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Details</h3>
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">
                    <strong>Start Date:</strong> August 2nd, 2021
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Location:</strong> 101 West Dr Unit C2, Brampton, ON L6T 2J6, Canada
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Contact:</strong> <a href="tel:647-581-5901" className="text-secondary hover:underline">647-581-5901</a>
                  </p>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">What You'll Learn</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">JavaScript fundamentals and advanced concepts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Web development with HTML, CSS, and JavaScript</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Modern frameworks and libraries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Project-based learning and portfolio development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Career preparation and job placement support</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdDz6ynDpr0wR5ejrSQOvjEBxTm0sb3A_8LaaHYKXKjDgRWDw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  <i className="far fa-arrow-alt-circle-right"></i>
                  Register Online
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

export default JavascriptProgramPage;