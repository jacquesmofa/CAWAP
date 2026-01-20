import { useState, useEffect } from 'react';
import ScrollReveal from '../../../components/effects/ScrollReveal';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://readdy.ai/api/search-image?query=african%20and%20caribbean%20women%20participating%20in%20community%20empowerment%20workshop%20with%20smiling%20faces%20showing%20engagement%20and%20learning%2C%20bright%20modern%20community%20center%20with%20natural%20lighting%2C%20professional%20photography%20capturing%20diversity%20cultural%20celebration%20and%20sisterhood%2C%20women%20of%20various%20ages%20working%20together%20on%20projects%2C%20warm%20welcoming%20atmosphere&width=800&height=600&seq=carousel-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=youth%20leadership%20program%20with%20diverse%20teenagers%20engaged%20in%20mentorship%20activities%20and%20skill%20development%2C%20inspiring%20educational%20environment%20showing%20collaboration%20and%20growth%2C%20professional%20photography%20capturing%20determination%20hope%20and%20community%20support%2C%20modern%20facility%20with%20bright%20lighting%2C%20young%20people%20learning%20together&width=800&height=600&seq=carousel-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=community%20volunteers%20distributing%20food%20and%20providing%20support%20services%20to%20families%20in%20need%2C%20heartwarming%20scene%20showing%20compassion%20and%20care%2C%20professional%20photography%20capturing%20community%20spirit%20and%20helping%20hands%2C%20diverse%20group%20working%20together%2C%20bright%20welcoming%20community%20center%20atmosphere&width=800&height=600&seq=carousel-3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=women%20empowerment%20seminar%20with%20african%20and%20caribbean%20women%20attending%20professional%20development%20workshop%2C%20modern%20conference%20room%20setting%20with%20engaged%20participants%2C%20professional%20photography%20showing%20learning%20growth%20and%20networking%2C%20diverse%20women%20taking%20notes%20and%20participating%20actively%2C%20inspiring%20atmosphere&width=800&height=600&seq=carousel-4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=seniors%20program%20with%20elderly%20african%20and%20caribbean%20community%20members%20enjoying%20social%20activities%20and%20support%20services%2C%20warm%20friendly%20atmosphere%20showing%20care%20and%20respect%2C%20professional%20photography%20capturing%20joy%20wisdom%20and%20community%20connection%2C%20bright%20comfortable%20community%20space%2C%20intergenerational%20support&width=800&height=600&seq=carousel-5&orientation=landscape',
    'https://readdy.ai/api/search-image?query=children%20summer%20camp%20with%20diverse%20kids%20participating%20in%20fun%20educational%20activities%20and%20games%2C%20colorful%20vibrant%20atmosphere%20showing%20joy%20and%20learning%2C%20professional%20photography%20capturing%20childhood%20happiness%20and%20growth%2C%20modern%20facility%20with%20bright%20lighting%2C%20children%20engaged%20in%20creative%20activities&width=800&height=600&seq=carousel-6&orientation=landscape',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#26194f] mb-4 gradient-text">
              Community in Action
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#26194f] to-[#c9b037] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Witness the impact of our programs through moments captured in our community
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Community moment ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-out ${
                    index === currentIndex ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10 cursor-pointer"
              aria-label="Previous image"
            >
              <i className="ri-arrow-left-line text-2xl"></i>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10 cursor-pointer"
              aria-label="Next image"
            >
              <i className="ri-arrow-right-line text-2xl"></i>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? 'bg-[#c9b037] w-12 h-3'
                    : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
