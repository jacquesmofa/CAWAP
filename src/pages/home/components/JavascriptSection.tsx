import ScrollReveal from '../../../components/effects/ScrollReveal';
import copy from '../../../content/pages/home.json';
// Text, images and links: src/content/pages/home.json (editable in the website editors).

const JavascriptSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9b037] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{copy.javascriptSection.main.heading}</h2>
              <div className="w-24 h-1 bg-[#c9b037] mb-6"></div>
              <div className="space-y-4 text-lg">
                <p className="flex items-start">
                  <i className="ri-calendar-line text-[#c9b037] text-2xl mr-3 mt-1"></i>
                  <span>{copy.javascriptSection.main.label}</span>
                </p>
                <p className="flex items-start">
                  <i className="ri-map-pin-line text-[#c9b037] text-2xl mr-3 mt-1"></i>
                  <span>{copy.javascriptSection.main.label2}</span>
                </p>
                <p className="flex items-start">
                  <i className="ri-phone-line text-[#c9b037] text-2xl mr-3 mt-1"></i>
                  <span>{copy.javascriptSection.main.label3}</span>
                </p>
              </div>
              <a
                href="/javascript-program"
                className="inline-block mt-8 bg-[#c9b037] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b39f2f] transition-all duration-300 elite-btn glow-effect whitespace-nowrap cursor-pointer"
              >{copy.javascriptSection.main.link}</a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#c9b037] to-white rounded-2xl opacity-20 blur-xl"></div>
              <img
                src={copy.javascriptSection.main.image}
                alt={copy.javascriptSection.main.imageAlt}
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover object-top elite-card"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default JavascriptSection;
