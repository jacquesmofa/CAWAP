import { useState, useEffect } from 'react';
import { useMedia } from '../../../context/MediaContext';

interface Slide {
  title: string;
  subtitle: string;
  cta: string;
  link: string;
}

export default function HeroSlider() {
  const { assets } = useMedia();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: 'Empowering Communities',
      subtitle: 'Building stronger futures through education, support, and cultural celebration',
      cta: 'Learn More',
      link: '/about',
    },
    {
      title: 'Youth Leadership',
      subtitle: 'Developing the next generation of community leaders',
      cta: 'Explore Programs',
      link: '/youth-leadership',
    },
    {
      title: 'Women Empowerment',
      subtitle: 'Supporting women through education and economic opportunities',
      cta: 'Get Involved',
      link: '/women-empowerment',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={assets?.hero?.home || ''}
          alt="CAWAP Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>
            <div className="pt-4">
              <a
                href={slides[currentSlide].link}
                className="inline-block px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                {slides[currentSlide].cta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index ? 'bg-teal-500 w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
