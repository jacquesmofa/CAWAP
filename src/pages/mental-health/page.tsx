import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';
import copy from '../../content/pages/mental-health.json';
// Text, images and links: src/content/pages/mental-health.json (editable in the website editors).

const MentalHealthPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ==========================================
          DISABILITY INCLUSION PROGRAM - HERO
          ========================================== */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${copy.main.backgroundImage}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <div className="inline-block bg-[#c9b037]/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-[#c9b037]/30">
            <span className="text-[#c9b037] font-semibold text-sm tracking-wider">{copy.main.label}</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">{copy.main.title}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">{copy.main.text}</p>
        </div>
      </section>

      <main>
        {/* ==========================================
            DISABILITY INCLUSION - MAIN CONTENT
            ========================================== */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="mb-10">
                  <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                    <i className="ri-wheelchair-line text-[#c9b037] text-3xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">{copy.main.heading}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{copy.main.text2}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{copy.main.text3}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{copy.main.text4}</p>
                </div>
              </ScrollReveal>

              {/* Services Grid */}
              <ScrollReveal>
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-gradient-to-br from-[#c9b037]/5 to-[#c9b037]/10 p-6 rounded-xl border border-[#c9b037]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#c9b037]/20 rounded-full flex items-center justify-center">
                        <i className="ri-megaphone-line text-[#c9b037] text-lg"></i>
                      </div>
                      <h3 className="font-bold text-gray-800">{copy.servicesGrid.subheading}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{copy.servicesGrid.text}</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#c9b037]/5 to-[#c9b037]/10 p-6 rounded-xl border border-[#c9b037]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#c9b037]/20 rounded-full flex items-center justify-center">
                        <i className="ri-tools-line text-[#c9b037] text-lg"></i>
                      </div>
                      <h3 className="font-bold text-gray-800">{copy.servicesGrid.subheading2}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{copy.servicesGrid.text2}</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#c9b037]/5 to-[#c9b037]/10 p-6 rounded-xl border border-[#c9b037]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#c9b037]/20 rounded-full flex items-center justify-center">
                        <i className="ri-briefcase-line text-[#c9b037] text-lg"></i>
                      </div>
                      <h3 className="font-bold text-gray-800">{copy.servicesGrid.subheading3}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{copy.servicesGrid.text3}</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#c9b037]/5 to-[#c9b037]/10 p-6 rounded-xl border border-[#c9b037]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#c9b037]/20 rounded-full flex items-center justify-center">
                        <i className="ri-share-forward-line text-[#c9b037] text-lg"></i>
                      </div>
                      <h3 className="font-bold text-gray-800">{copy.servicesGrid.subheading4}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{copy.servicesGrid.text4}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-gradient-to-r from-[#3c1053] to-[#5a1a7a] p-8 rounded-2xl text-white text-center">
                  <i className="ri-heart-line text-4xl text-[#c9b037] mb-4"></i>
                  <p className="text-lg leading-relaxed mb-2">
                    <strong className="text-[#c9b037]">{copy.servicesGrid.bold}</strong>{copy.servicesGrid.text5}</p>
                </div>
              </ScrollReveal>

              <div className="text-center mt-10">
                <a
                  href={copy.servicesGrid.phoneLink}
                  className="inline-block bg-[#c9b037] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer shadow-lg"
                >
                  <i className="ri-phone-line mr-2"></i>{copy.servicesGrid.link}</a>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            DIVIDER
            ========================================== */}
        <section className="py-12 bg-gradient-to-r from-[#3c1053] via-[#5a1a7a] to-[#3c1053]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">{copy.servicesGrid.heading}</h2>
            <p className="text-white/80">{copy.servicesGrid.text6}</p>
          </div>
        </section>

        {/* ==========================================
            MENTAL HEALTH SUPPORT - EXISTING CONTENT
            ========================================== */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-brain text-[#c9b037] text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{copy.servicesGrid.heading2}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{copy.servicesGrid.text7}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{copy.servicesGrid.text8}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{copy.servicesGrid.text9}</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{copy.servicesGrid.subheading5}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                    <span className="text-gray-600">{copy.servicesGrid.label}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                    <span className="text-gray-600">{copy.servicesGrid.label2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                    <span className="text-gray-600">{copy.servicesGrid.label3}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                    <span className="text-gray-600">{copy.servicesGrid.label4}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                    <span className="text-gray-600">{copy.servicesGrid.label5}</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href={copy.servicesGrid.phoneLink2}
                  className="inline-block bg-[#c9b037] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >{copy.servicesGrid.link2}</a>
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