import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from '@/context/MediaContext';

const HeroSlider = () => {
  const { assets } = useMedia();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const slides = [
    {
      title: 'Empowering Communities',
      subtitle: 'Building Stronger Futures Together',
      description: 'Join us in creating lasting change through education, support, and community engagement.',
      cta: 'Explore Our Programs',
      link: '/programs',
    },
    {
      title: 'Youth Leadership',
      subtitle: 'Nurturing Tomorrow\'s Leaders',
      description: 'Empowering young minds with skills, confidence, and opportunities to excel.',
      cta: 'Learn More',
      link: '/youth-leadership',
    },
    {
      title: 'Community Support',
      subtitle: 'Together We Rise',
      description: 'Providing essential resources and support to families in need across our community.',
      cta: 'Get Involved',
      link: '/contact',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  const getBackgroundImage = (index: number) => {
    if (!assets?.hero || failedImages.has(index)) {
      return 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)';
    }
    return `url(${assets.hero[index]})`;
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image/Gradient */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              background: getBackgroundImage(index),
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Load image to detect errors */}
            {assets?.hero?.[index] && !failedImages.has(index) && (
              <img
                src={assets.hero[index]}
                alt=""
                className="hidden"
                onError={() => handleImageError(index)}
              />
            )}
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-6 text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-light animate-fade-in-delay">
                {slide.subtitle}
              </p>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-delay-2">
                {slide.description}
              </p>
              <Link
                to={slide.link}
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
