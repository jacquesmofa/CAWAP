import ScrollReveal from '../../../components/effects/ScrollReveal';
import copy from '../../../content/pages/home.json';
// Text, images and links: src/content/pages/home.json (editable in the website editors).

const ProgramsSection = () => {
  const programs = copy.programsSection.programs;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#3c1053] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#c9b037] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="fade">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-4 gradient-text">{copy.programsSection.main.heading}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{copy.programsSection.main.text}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ScrollReveal key={index} direction="fade" delay={index * 0.1}>
              <a
                href={program.link}
                className="elite-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer block h-full"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${program.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#3c1053] mb-4 group-hover:text-[#c9b037] transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="flex items-center text-[#c9b037] font-semibold group-hover:translate-x-2 transition-transform duration-300">{copy.programsSection.main.text2}<i className="ri-arrow-right-line ml-2"></i>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
