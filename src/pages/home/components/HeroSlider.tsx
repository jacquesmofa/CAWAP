import { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://readdy.ai/api/search-image?query=diverse%20group%20of%20empowered%20canadian%20and%20african%20women%20standing%20together%20in%20solidarity%20with%20raised%20hands%20celebrating%20success%20unity%20and%20sisterhood%20in%20bright%20modern%20community%20center%2C%20warm%20golden%20lighting%20creating%20inspiring%20uplifting%20atmosphere%2C%20professional%20ultra%20hd%208k%20photography%20with%20soft%20focus%20background%20showing%20community%20support%20transformation%20hope%2C%20vibrant%20colors%20representing%20empowerment%20and%20cultural%20diversity%20between%20canadian%20and%20african%20women%2C%20natural%20light%20streaming%20through%20windows&width=1920&height=800&seq=hero-cawap-1&orientation=landscape',
      title: 'Canadian and African Women Aid Program',
      subtitle: 'Empowering Communities, Transforming Lives Together',
    },
    {
      image: 'https://readdy.ai/api/search-image?query=young%20canadian%20and%20african%20youth%20leaders%20women%20and%20girls%20in%20mentorship%20program%20learning%20and%20growing%20together%20in%20bright%20educational%20environment%2C%20inspiring%20atmosphere%20showing%20leadership%20development%20and%20skill%20building%20between%20cultures%2C%20professional%20ultra%20hd%208k%20photography%20capturing%20determination%20hope%20and%20unity%2C%20warm%20lighting%20with%20diverse%20group%20of%20teenagers%20engaged%20in%20learning%20activities%2C%20modern%20community%20center%20setting%20with%20natural%20light%20and%20vibrant%20atmosphere&width=1920&height=800&seq=hero-cawap-2&orientation=landscape',
      title: 'Building Stronger Futures',
      subtitle: 'Nurturing Tomorrow\'s Leaders Through Unity',
    },
    {
      image: 'https://readdy.ai/api/search-image?query=canadian%20and%20african%20community%20volunteers%20women%20helping%20families%20with%20food%20distribution%20and%20support%20services%20in%20bright%20welcoming%20space%2C%20heartwarming%20scene%20of%20diverse%20people%20working%20together%20to%20make%20difference%2C%20professional%20ultra%20hd%208k%20photography%20showing%20compassion%20and%20community%20care%2C%20diverse%20group%20of%20volunteers%20organizing%20donations%20and%20assisting%20community%20members%2C%20bright%20welcoming%20atmosphere%20with%20abundant%20natural%20lighting%2C%20modern%20community%20support%20center%20environment%20with%20warm%20colors&width=1920&height=800&seq=hero-cawap-3&orientation=landscape',
      title: 'Community Support & Care',
      subtitle: 'Making a Difference Every Day',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-out ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40" />
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl reveal reveal-fade reveal-visible">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 gradient-text-white animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-delay">
                {slide.subtitle}
              </p>
              <div className="flex gap-4 justify-center animate-fade-in-delay-2">
                <a
                  href="/programs"
                  className="bg-[#c9b037] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b39f2f] transition-all duration-300 elite-btn glow-effect whitespace-nowrap text-lg cursor-pointer"
                >
                  Explore Programs
                </a>
                <a
                  href="/contact"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 elite-btn border-2 border-white/30 whitespace-nowrap text-lg cursor-pointer"
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
              index === currentSlide
                ? 'bg-[#c9b037] w-12'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 elite-btn z-20 cursor-pointer"
        aria-label="Previous slide"
      >
        <i className="ri-arrow-left-line text-2xl"></i>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 elite-btn z-20 cursor-pointer"
        aria-label="Next slide"
      >
        <i className="ri-arrow-right-line text-2xl"></i>
      </button>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.9s both;
        }

        .gradient-text-white {
          text-shadow: 0 0 30px rgba(201, 176, 55, 0.5);
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
