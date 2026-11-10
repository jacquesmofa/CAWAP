import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';
import ParallaxSection from '../../components/effects/ParallaxSection';
import { Link } from 'react-router-dom';
import copy from '../../content/pages/about.json';
// Text, images and links: src/content/pages/about.json (editable in the website editors).

const AboutPage = () => {
  const programs = copy.programs;

  return (
    <div className="min-h-screen page-transition">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${copy.heroSection.backgroundImage}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{copy.heroSection.title}</h1>
            <p className="text-xl text-white/90">{copy.heroSection.text}</p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-6 gradient-text">{copy.aboutContent.heading}</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{copy.aboutContent.text}</p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{copy.aboutContent.text2}</p>
                  <p className="text-lg text-gray-700 leading-relaxed">{copy.aboutContent.text3}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <ParallaxSection speed={0.2}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#3c1053] to-[#c9b037] rounded-2xl opacity-20 blur-xl"></div>
                    <img
                      src={copy.aboutContent.image}
                      alt={copy.aboutContent.imageAlt}
                      className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl elite-card"
                    />
                  </div>
                </ParallaxSection>
              </ScrollReveal>
            </div>

            {/* Additional Content */}
            <ScrollReveal direction="fade">
              <div className="mb-20">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{copy.additionalContent.text}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{copy.additionalContent.text2}</p>
              </div>
            </ScrollReveal>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <ScrollReveal delay={0}>
                <div className="elite-card bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] p-10 rounded-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <i className="ri-target-line text-6xl mb-6 text-[#c9b037]"></i>
                  <h3 className="text-3xl font-bold mb-4">{copy.missionAndVision.subheading}</h3>
                  <p className="text-white/90 leading-relaxed text-lg">{copy.missionAndVision.text}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="elite-card bg-gradient-to-br from-[#c9b037] to-[#d4c050] p-10 rounded-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <i className="ri-eye-line text-6xl mb-6 text-[#3c1053]"></i>
                  <h3 className="text-3xl font-bold mb-4">{copy.missionAndVision.subheading2}</h3>
                  <p className="text-white/90 leading-relaxed text-lg">{copy.missionAndVision.text2}</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Values */}
            <ScrollReveal direction="fade">
              <div className="mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] text-center mb-4 gradient-text">{copy.values.heading}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="elite-card text-center bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-heart-line text-white text-4xl"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-[#3c1053] mb-4">{copy.values.subheading}</h4>
                    <p className="text-gray-600 leading-relaxed">{copy.values.text}</p>
                  </div>
                  <div className="elite-card text-center bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#c9b037] to-[#d4c050] rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-team-line text-white text-4xl"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-[#3c1053] mb-4">{copy.values.subheading2}</h4>
                    <p className="text-gray-600 leading-relaxed">{copy.values.text2}</p>
                  </div>
                  <div className="elite-card text-center bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-scales-line text-white text-4xl"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-[#3c1053] mb-4">{copy.values.subheading3}</h4>
                    <p className="text-gray-600 leading-relaxed">{copy.values.text3}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Programs Section */}
            <ScrollReveal direction="fade">
              <div className="mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] text-center mb-4 gradient-text">{copy.programsSection.heading}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-6"></div>
                <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">{copy.programsSection.text}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {programs.map((program, index) => (
                    <ScrollReveal key={index} delay={index * 50}>
                      <Link to={program.link}>
                        <div className="elite-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full cursor-pointer group">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i className={`${program.icon} text-white text-3xl`}></i>
                          </div>
                          <h4 className="text-xl font-bold text-[#3c1053] mb-4 group-hover:text-[#c9b037] transition-colors duration-300">
                            {program.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {program.description}
                          </p>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Founder Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#c9b037] to-[#3c1053] rounded-2xl opacity-20 blur-xl"></div>
                  <div className="relative rounded-2xl shadow-2xl overflow-hidden elite-card bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8]">
                    <img
                      src={copy.founderSection.image}
                      alt={copy.founderSection.imageAlt}
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="elite-card bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-6 gradient-text">{copy.founderSection.heading}</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{copy.founderSection.text}</p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{copy.founderSection.text2}</p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{copy.founderSection.text3}</p>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-2xl font-bold text-[#3c1053]">{copy.founderSection.subheading}</h3>
                    <p className="text-[#c9b037] font-semibold text-lg">{copy.founderSection.text4}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default AboutPage;
