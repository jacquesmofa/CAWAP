import { useEffect, useState } from 'react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const [currentIdx, setCurrentIdx] = useState(currentIndex);
  const [zoom, setZoom] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [pinchDistance, setPinchDistance] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIdx(currentIndex);
    setZoom(1); // Reset zoom when image changes
  }, [currentIndex]);

  useEffect(() => {
    onNavigate(currentIdx);
  }, [currentIdx, onNavigate]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % images.length);
    setZoom(1);
  };

  const handlePrevious = () => {
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
    setZoom(1);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleZoomReset = () => {
    setZoom(1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch zoom start
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setPinchDistance(distance);
    } else if (e.touches.length === 1) {
      // Swipe start
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchDistance !== null) {
      // Pinch zoom
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scale = distance / pinchDistance;
      setZoom((prev) => Math.max(0.5, Math.min(3, prev * scale)));
      setPinchDistance(distance);
    } else if (e.touches.length === 1) {
      // Swipe
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 75;
      const isRightSwipe = distance < -75;

      if (isLeftSwipe) {
        handleNext();
      }
      if (isRightSwipe) {
        handlePrevious();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
    setPinchDistance(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-' || e.key === '_') handleZoomOut();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIdx, images.length]);

  const isVideo = (url: string) => {
    return url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.webm');
  };

  const currentMedia = images[currentIdx];
  const isCurrentVideo = isVideo(currentMedia);

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Counter */}
            <span className="text-white text-lg font-semibold">
              {currentIdx + 1} / {images.length}
            </span>

            {/* Zoom Controls - Only for images */}
            {!isCurrentVideo && (
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <button
                  onClick={handleZoomOut}
                  className="text-white hover:text-purple-300 transition-colors"
                  title="Zoom Out (-)"
                >
                  <i className="ri-zoom-out-line text-xl"></i>
                </button>
                <span className="text-white text-sm font-medium min-w-[60px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className="text-white hover:text-purple-300 transition-colors"
                  title="Zoom In (+)"
                >
                  <i className="ri-zoom-in-line text-xl"></i>
                </button>
                {zoom !== 1 && (
                  <button
                    onClick={handleZoomReset}
                    className="text-white hover:text-purple-300 transition-colors ml-2"
                    title="Reset Zoom"
                  >
                    <i className="ri-refresh-line text-xl"></i>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-white hover:text-red-400 transition-colors"
            title="Close (ESC)"
          >
            <i className="ri-close-line text-3xl"></i>
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-14 h-14 flex items-center justify-center transition-all z-10 backdrop-blur-sm"
        title="Previous (←)"
      >
        <i className="ri-arrow-left-line text-2xl"></i>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-14 h-14 flex items-center justify-center transition-all z-10 backdrop-blur-sm"
        title="Next (→)"
      >
        <i className="ri-arrow-right-line text-2xl"></i>
      </button>

      {/* Media Display */}
      <div className="relative max-w-7xl max-h-[90vh] flex items-center justify-center">
        {isCurrentVideo ? (
          <video
            src={currentMedia}
            controls
            autoPlay
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onError={(e) => {
              console.error('Video failed to load:', currentMedia);
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <img
            src={currentMedia}
            alt={`Gallery image ${currentIdx + 1}`}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl transition-transform duration-200"
            style={{ transform: `scale(${zoom})` }}
            onError={(e) => {
              console.error('Image failed to load:', currentMedia);
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
      </div>

      {/* Bottom Instructions Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
        <div className="text-center text-white/70 text-sm space-x-6">
          <span><i className="ri-arrow-left-right-line mr-1"></i> Arrow keys to navigate</span>
          <span><i className="ri-add-line mr-1"></i><i className="ri-subtract-line mr-1"></i> +/- to zoom</span>
          <span><i className="ri-hand-finger-line mr-1"></i> Swipe or pinch on mobile</span>
          <span><i className="ri-close-circle-line mr-1"></i> ESC to close</span>
        </div>
      </div>
    </div>
  );
}
