import ScrollReveal from '../../../components/effects/ScrollReveal';
import copy from '../../../content/pages/home.json';
// Text, images and links: src/content/pages/home.json (editable in the website editors).

const FounderMessage = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#3c1053] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#c9b037] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="fade">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-4 gradient-text">{copy.founderMessage.main.heading}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">{copy.founderMessage.main.text}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left">
            <div className="relative flex flex-col items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#3c1053] to-[#c9b037] rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative rounded-2xl shadow-2xl w-full overflow-hidden elite-card bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8]">
                  <img
                    src={copy.founderMessage.main.image}
                    alt={copy.founderMessage.main.imageAlt}
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-[#3c1053] mb-2">{copy.founderMessage.main.subheading}</h3>
                <p className="text-lg text-[#c9b037] font-semibold">{copy.founderMessage.main.text2}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="elite-card bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col justify-center">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{copy.founderMessage.main.text3}</p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{copy.founderMessage.main.text4}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{copy.founderMessage.main.text5}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
