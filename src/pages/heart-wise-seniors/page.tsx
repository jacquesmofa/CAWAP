
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';
import copy from '../../content/pages/heart-wise-seniors.json';
// Text, images and links: src/content/pages/heart-wise-seniors.json (editable in the website editors).

const HeartWiseSeniorsPage = () => {
  // Auto-scrolling carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  const seniorsDayImages = copy.seniorsDayImages;

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % seniorsDayImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [seniorsDayImages.length]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${copy.heroSection.backgroundImage}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </section>

      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="far fa-gem text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{copy.heroSection.heading}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{copy.heroSection.text}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{copy.heroSection.text2}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{copy.heroSection.text3}</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{copy.heroSection.subheading}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">{copy.heroSection.label}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">{copy.heroSection.label2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">{copy.heroSection.label3}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">{copy.heroSection.label4}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">{copy.heroSection.label5}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Heart Wise Seniors Day Section */}
        <ScrollReveal>
          <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
                    <i className="fas fa-heart text-secondary"></i>
                    <span className="text-secondary font-medium text-sm">{copy.sectionHeader.label}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">{copy.sectionHeader.heading}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{copy.sectionHeader.text}</p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left - Info Cards */}
                  <div className="space-y-6">
                    {/* Schedule Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-calendar-day text-secondary text-2xl"></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{copy.scheduleCard.subheading}</h3>
                          <p className="text-gray-600">{copy.scheduleCard.text}</p>
                        </div>
                      </div>
                    </div>

                    {/* Time Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-clock text-secondary text-2xl"></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{copy.timeCard.subheading}</h3>
                          <p className="text-gray-600">{copy.timeCard.text}</p>
                        </div>
                      </div>
                    </div>

                    {/* Services Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-utensils text-secondary text-2xl"></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{copy.servicesCard.subheading}</h3>
                          <p className="text-gray-600">{copy.servicesCard.text}</p>
                        </div>
                      </div>
                    </div>

                    {/* Highlight Box */}
                    <div className="bg-secondary/10 rounded-2xl p-6 border-2 border-secondary/20">
                      <div className="flex items-center gap-3 mb-3">
                        <i className="fas fa-star text-secondary text-xl"></i>
                        <h4 className="font-bold text-gray-800">{copy.highlightBox.subheading}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{copy.highlightBox.text}</p>
                    </div>
                  </div>

                  {/* Right - Auto-Scrolling Image Carousel */}
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      {/* Main Image Display */}
                      <div className="relative h-[400px] w-full">
                        {seniorsDayImages.map((image, index) => (
                          <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                              index === currentSlide 
                                ? 'opacity-100 translate-x-0' 
                                : index < currentSlide 
                                  ? 'opacity-0 -translate-x-full' 
                                  : 'opacity-0 translate-x-full'
                            }`}
                          >
                            <img
                              src={image.url}
                              alt={image.alt}
                              className="w-full h-full object-cover object-top"
                            />
                            {/* Image Overlay with Caption */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                              <p className="text-white text-sm font-medium">{image.alt}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Slide Indicators */}
                      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                        {seniorsDayImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                              index === currentSlide 
                                ? 'bg-white w-6' 
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-300/30 rounded-full blur-2xl"></div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                  <p className="text-gray-600 mb-6">{copy.callToAction.text}</p>
                  <a
                    href={copy.callToAction.phoneLink}
                    className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-amber-600 transition-all whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <i className="fas fa-phone-alt"></i>{copy.callToAction.link}</a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Get Involved Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <a
                href={copy.getInvolvedSection.phoneLink}
                className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
              >{copy.getInvolvedSection.link}</a>
            </div>
          </div>
        </section>
      </main>
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default HeartWiseSeniorsPage;
