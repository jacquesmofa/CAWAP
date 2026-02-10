import { useState, useEffect } from 'react';
import ScrollReveal from '../../../components/effects/ScrollReveal';
import { useMedia } from '../../../context/MediaContext';

const ImageCarousel = () => {
  const { assets } = useMedia();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get all gallery images from MediaContext
  const getAllGalleryImages = (): string[] => {
    if (!assets?.gallery) return [];
    
    const allImages: string[] = [];
    Object.values(assets.gallery).forEach(categoryImages => {
      allImages.push(...categoryImages);
    });
    
    return allImages;
  };

  const images = getAllGalleryImages();

  useEffect(() => {
    if (images.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Show loading state if no images yet
  if (images.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500">Loading community images...</p>
          </div>
        </div>
      </section>
    );
  }

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
