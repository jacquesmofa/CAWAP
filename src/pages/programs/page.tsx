import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/effects/ScrollReveal';
import InteractiveProgramsHub from '../../components/effects/InteractiveProgramsHub';
import copy from '../../content/pages/programs.json';
// Text, images and links: src/content/pages/programs.json (editable in the website editors).

const ProgramsPage = () => {
  const programs = copy.programs;

  return (
    <div className="page-transition">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-[#3c1053] to-[#5a1a7a] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9b037] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{copy.heroSection.title}</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">{copy.heroSection.text}</p>
            </div>
          </div>
        </section>

        {/* Interactive Programs Hub */}
        <ScrollReveal direction="fade">
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
              <h2 className="text-4xl font-bold text-[#3c1053] mb-4 gradient-text">{copy.interactiveProgramsHub.heading}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.interactiveProgramsHub.text}</p>
            </div>
            <InteractiveProgramsHub />
          </section>
        </ScrollReveal>

        {/* Programs Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <ScrollReveal key={index} delay={index * 50} direction="up">
                  <Link to={program.link}>
                    <div className="elite-card bg-white rounded-2xl shadow-lg overflow-hidden h-full group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3c1053]/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <i className={`${program.icon} text-4xl text-white mb-2`}></i>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#3c1053] mb-3">{program.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                        <div className="flex items-center text-[#c9b037] font-semibold group-hover:translate-x-2 transition-transform duration-300">{copy.programsGrid.text}<i className="ri-arrow-right-line ml-2"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default ProgramsPage;
