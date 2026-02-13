import { useState } from 'react';
import { Link } from 'react-router-dom';
import { trainings, Training } from '../../data/trainings';
import ScrollReveal from '../../components/effects/ScrollReveal';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const TrainingsPage = () => {
  const [selectedTraining, setSelectedTraining] = useState<Training | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(trainings.map(t => t.category)))];

  const filteredTrainings = filter === 'all' 
    ? trainings 
    : trainings.filter(t => t.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=diverse-group-of-people-learning-together-in-modern-bright-training-classroom-with-technology-equipment-and-educational-materials-professional-instructor-teaching-engaged-students-collaborative-learning-environment-natural-lighting-contemporary-educational-setting&width=1920&height=400&seq=trainings-hero-001&orientation=landscape"
            alt="Training Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ongoing Programs & Trainings
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Empower yourself with skills that transform lives and open new opportunities
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  filter === category
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Programs' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trainings Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTrainings.map((training, index) => (
              <ScrollReveal key={training.id} delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={training.image}
                        alt={training.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-full">
                          {training.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg`}>
                            <i className={`${training.icon} text-2xl text-teal-600`}></i>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {training.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {training.shortDescription}
                        </p>

                        <div className="space-y-2 mb-4">
                          {training.duration && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <i className="ri-time-line text-teal-600"></i>
                              <span><strong>Duration:</strong> {training.duration}</span>
                            </div>
                          )}
                          {training.schedule && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <i className="ri-calendar-line text-teal-600"></i>
                              <span><strong>Schedule:</strong> {training.schedule}</span>
                            </div>
                          )}
                          {training.level && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <i className="ri-bar-chart-line text-teal-600"></i>
                              <span><strong>Level:</strong> {training.level}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedTraining(training)}
                        className="w-full px-6 py-3 bg-purple-900 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors duration-300 whitespace-nowrap cursor-pointer"
                      >
                        View Full Details
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join hundreds of community members who have transformed their lives through our training programs
            </p>
            <a
              href="https://forms.gle/3Am4uTBzQMHxdbK88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Register Now
              <i className="ri-arrow-right-line"></i>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      {/* Modal for Full Details */}
      {selectedTraining && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedTraining(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Banner */}
            <div className="relative h-64">
              <img
                src={selectedTraining.bannerImage || selectedTraining.image}
                alt={selectedTraining.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <button
                onClick={() => setSelectedTraining(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-full mb-3">
                  {selectedTraining.category}
                </span>
                <h2 className="text-4xl font-bold text-white mb-2">
                  {selectedTraining.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 max-h-[60vh] overflow-y-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {selectedTraining.duration && (
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg flex-shrink-0">
                      <i className="ri-time-line text-teal-600 text-xl"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold">Duration</p>
                      <p className="text-gray-900">{selectedTraining.duration}</p>
                    </div>
                  </div>
                )}
                {selectedTraining.schedule && (
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg flex-shrink-0">
                      <i className="ri-calendar-line text-teal-600 text-xl"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold">Schedule</p>
                      <p className="text-gray-900">{selectedTraining.schedule}</p>
                    </div>
                  </div>
                )}
                {selectedTraining.instructor && (
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg flex-shrink-0">
                      <i className="ri-user-line text-teal-600 text-xl"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold">Instructor</p>
                      <p className="text-gray-900">{selectedTraining.instructor}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedTraining.description}
                </p>
              </div>

              {selectedTraining.benefits && selectedTraining.benefits.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedTraining.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <i className="ri-checkbox-circle-fill text-teal-600 text-xl flex-shrink-0 mt-0.5"></i>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedTraining.requirements && selectedTraining.requirements.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedTraining.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <i className="ri-arrow-right-s-line text-purple-900 text-xl flex-shrink-0"></i>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  <strong>{selectedTraining.contactInfo}</strong>
                </p>
                <a
                  href="https://forms.gle/3Am4uTBzQMHxdbK88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-900 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors duration-300 whitespace-nowrap cursor-pointer"
                  onClick={() => setSelectedTraining(null)}
                >
                  Register for This Training
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingsPage;
