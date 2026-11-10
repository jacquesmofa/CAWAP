import ScrollReveal from '../../../components/effects/ScrollReveal';
import ParallaxSection from '../../../components/effects/ParallaxSection';
import copy from '../../../content/pages/home.json';
// Text, images and links: src/content/pages/home.json (editable in the website editors).

const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#3c1053] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9b037] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <ParallaxSection speed={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#3c1053] to-[#c9b037] rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative rounded-2xl shadow-2xl w-full h-[500px] overflow-hidden elite-card">
                  <img
                    src={copy.aboutSection.main.image}
                    alt={copy.aboutSection.main.imageAlt}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-white/50"></div>
                </div>
              </div>
            </ParallaxSection>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-6 gradient-text">{copy.aboutSection.main.heading}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mb-6"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{copy.aboutSection.main.text}</p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="elite-card bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] p-6 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">{copy.aboutSection.main.text2}</div>
                  <div className="text-sm opacity-90">{copy.aboutSection.main.text3}</div>
                </div>
                <div className="elite-card bg-gradient-to-br from-[#c9b037] to-[#d4c050] p-6 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">{copy.aboutSection.main.text4}</div>
                  <div className="text-sm opacity-90">{copy.aboutSection.main.text5}</div>
                </div>
              </div>
              <a
                href="/about"
                className="inline-block bg-[#c9b037] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b39f2f] transition-all duration-300 elite-btn glow-effect whitespace-nowrap cursor-pointer"
              >{copy.aboutSection.main.link}</a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
