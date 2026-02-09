import React, { useState, useEffect } from 'react';

interface LightboxProps {
  photos: string[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ photos, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-teal-400 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <i className="ri-close-line text-4xl"></i>
      </button>

      {/* Previous Button */}
      {photos.length > 1 && (
        <button
          onClick={handlePrevious}
          className="absolute left-6 text-white hover:text-teal-400 transition-colors z-10"
          aria-label="Previous photo"
        >
          <i className="ri-arrow-left-s-line text-5xl"></i>
        </button>
      )}

      {/* Image */}
      <div className="max-w-7xl max-h-[90vh] mx-auto px-20">
        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
      </div>

      {/* Next Button */}
      {photos.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-6 text-white hover:text-teal-400 transition-colors z-10"
          aria-label="Next photo"
        >
          <i className="ri-arrow-right-s-line text-5xl"></i>
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-lg">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default Lightbox;
