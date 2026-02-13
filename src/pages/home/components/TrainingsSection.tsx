import { Link } from 'react-router-dom';
import { trainings } from '../../../data/trainings';
import ScrollReveal from '../../../components/effects/ScrollReveal';

const TrainingsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ongoing Programs & Trainings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expand your skills and knowledge with our diverse training programs. From life-saving techniques to creative arts and cutting-edge technology, we offer courses designed to empower and equip you for success.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {trainings.map((training, index) => (
            <ScrollReveal key={training.id} delay={index * 100}>
              <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={training.image}
                    alt={training.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full mb-2">
                      {training.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {training.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {training.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <i className={`${training.icon} text-teal-600 w-5 h-5 flex items-center justify-center`}></i>
                      <span>{training.level}</span>
                    </div>
                    {training.duration && (
                      <div className="flex items-center gap-1">
                        <i className="ri-time-line text-teal-600"></i>
                        <span className="text-xs">{training.duration}</span>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/trainings"
                    className="block w-full text-center px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-300 whitespace-nowrap"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link
              to="/trainings"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-900 text-white text-lg font-semibold rounded-lg hover:bg-purple-800 transition-colors duration-300 whitespace-nowrap"
            >
              View All Training Programs
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrainingsSection;
