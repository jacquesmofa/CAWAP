import { useState, useEffect } from 'react';
import { useMedia } from '@/context/MediaContext';

const ImageCarousel = () => {
  const { assets } = useMedia();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  // Combine all gallery photos into one array
  const images = assets?.gallery 
    ? Object.values(assets.gallery)
        .flatMap(category => category.photos) // Get photos from each category
        .filter(url => url && typeof url === 'string') // Ensure valid URLs
    : [];

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  if (images.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <i className="ri-image-line text-6xl text-gray-300 mb-4"></i>
            <p className="text-gray-500">Gallery images loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Community in Action</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Witness the transformative impact of our programs through the stories and smiles of our community members.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative h-[500px] bg-gray-200">
              {failedImages.has(currentIndex) ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <i className="ri-image-line text-6xl text-gray-400 mb-4"></i>
                    <p className="text-gray-500 text-lg">Image Pending</p>
                  </div>
                </div>
              ) : (
                <img
                  src={images[currentIndex]}
                  alt={`Community moment ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(currentIndex)}
                />
              )}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {images.slice(0, 10).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex % 10
                    ? 'bg-purple-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
