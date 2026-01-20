import ScrollReveal from '../../../components/effects/ScrollReveal';
import ParallaxSection from '../../../components/effects/ParallaxSection';

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
                <img
                  src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20african%20and%20caribbean%20women%20in%20professional%20community%20center%20setting%20working%20together%20on%20empowerment%20programs%2C%20warm%20welcoming%20atmosphere%20with%20natural%20lighting%2C%20modern%20facility%20showing%20collaboration%20and%20sisterhood%2C%20professional%20photography%20capturing%20unity%20cultural%20diversity%20and%20community%20support%2C%20women%20of%20different%20ages%20engaged%20in%20meaningful%20activities%2C%20bright%20inspiring%20environment&width=800&height=600&seq=about-cawap-community&orientation=landscape"
                  alt="CAWAP Community"
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover object-center elite-card"
                />
              </div>
            </ParallaxSection>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-6 gradient-text">
                About CAWAP
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mb-6"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Canadian and African Women Aid Program (CAWAP) is a not-for-profit/charitable organization that is set to empower Afro-Caribbean and Canadian women in building their skills, through economic development, advocacy, promoting their cultural diversity, gender equality, overcoming poverty and improving community accessibility through various programs and services.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="elite-card bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] p-6 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-sm opacity-90">Active Programs</div>
                </div>
                <div className="elite-card bg-gradient-to-br from-[#c9b037] to-[#d4c050] p-6 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <div className="text-sm opacity-90">Lives Impacted</div>
                </div>
              </div>
              <a
                href="/about"
                className="inline-block bg-[#c9b037] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b39f2f] transition-all duration-300 elite-btn glow-effect whitespace-nowrap cursor-pointer"
              >
                Read More
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
