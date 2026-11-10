
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';
import copy from '../../content/pages/javascript-program.json';
// Text, images and links: src/content/pages/javascript-program.json (editable in the website editors).

const JavascriptProgramPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${copy.heroSection.backgroundImage}')`,
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{copy.heroSection.heading}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{copy.heroSection.text}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{copy.heroSection.text2}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{copy.heroSection.text3}</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{copy.heroSection.subheading}</h3>
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">
                    <strong>{copy.heroSection.bold}</strong>{copy.heroSection.text4}</p>
                  <p className="text-gray-600 mb-2">
                    <strong>{copy.heroSection.bold2}</strong>{copy.heroSection.text5}</p>
                  <p className="text-gray-600 mb-2">
                    <strong>{copy.heroSection.bold3}</strong> <a href={copy.heroSection.phoneLink} className="text-secondary hover:underline">{copy.heroSection.link}</a>
                  </p>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{copy.heroSection.subheading2}</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">{copy.heroSection.label}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">{copy.heroSection.label2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">{copy.heroSection.label3}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">{copy.heroSection.label4}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">{copy.heroSection.label5}</span>
                  </li>
                </ul>
              </div>

              {/* ========================================
                  PROMINENT REGISTRATION BUTTON
                  ========================================
                  This makes the Google Form registration SUPER OBVIOUS:
                  - Large size with padding
                  - Eye-catching gradient colors
                  - Pulsing animation to draw attention
                  - Clear "External Link" icon
                  - Hover effects for interactivity
                  ======================================== */}
              <div className="text-center bg-gradient-to-br from-[#26194f] to-[#8e24aa] p-8 rounded-2xl shadow-2xl">
                <div className="mb-6">
                  <i className="ri-file-list-3-line text-6xl text-white mb-4 inline-block"></i>
                  <h3 className="text-2xl font-bold text-white mb-2">{copy.heroSection.subheading3}</h3>
                  <p className="text-white/90 text-lg">{copy.heroSection.text6}</p>
                </div>
                
                <a
                  href={copy.heroSection.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-white text-[#26194f] px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-xl animate-pulse hover:animate-none"
                >
                  <i className="ri-external-link-line text-3xl"></i>
                  <span>{copy.heroSection.label6}</span>
                  <i className="ri-arrow-right-line text-2xl"></i>
                </a>
                
                <p className="text-white/80 text-sm mt-4">
                  <i className="ri-information-line"></i>{copy.heroSection.text7}</p>
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
