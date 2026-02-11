import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';

interface MasonryGalleryProps {
  photos: string[];
  videos?: string[];
  onPhotoClick?: (index: number) => void;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ photos = [], videos = [], onPhotoClick }) => {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [failedVideos, setFailedVideos] = useState<Set<number>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const breakpointColumns = {
    default: 4,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 1
  };

  // ✨ LAZY LOADING: Initialize Intersection Observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const index = parseInt(element.dataset.index || '0', 10);
            const type = element.dataset.type;

            if (type === 'photo') {
              setLoadedImages(prev => new Set(prev).add(index));
            } else if (type === 'video') {
              setLoadedVideos(prev => new Set(prev).add(index));
            }

            // Stop observing once loaded
            observerRef.current?.unobserve(element);
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before entering viewport
        threshold: 0.01
      }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  const handleVideoError = (index: number) => {
    setFailedVideos(prev => new Set(prev).add(index));
  };

  // ✅ SAFE: Ensure arrays exist before checking length
  const safePhotos = Array.isArray(photos) ? photos : [];
  const safeVideos = Array.isArray(videos) ? videos : [];
  const isEmpty = safePhotos.length === 0 && safeVideos.length === 0;

  // ✨ Show placeholder if empty
  if (isEmpty) {
    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
            <i className="ri-gallery-line text-6xl text-gray-400"></i>
          </div>
          <h3 className="text-3xl font-bold text-gray-700 mb-4">
            No Media Yet
          </h3>
          <p className="text-gray-500 text-lg">
            This album is ready for content. Photos and videos will appear here once uploaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Videos Section */}
      {safeVideos.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="ri-video-line mr-3 text-teal-600"></i>
            Videos ({safeVideos.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safeVideos.map((videoUrl, index) => (
              <LazyVideo
                key={`video-${index}`}
                videoUrl={videoUrl}
                index={index}
                isLoaded={loadedVideos.has(index)}
                hasFailed={failedVideos.has(index)}
                onError={handleVideoError}
                observerRef={observerRef}
              />
            ))}
          </div>
        </div>
      )}

      {/* Photos Section */}
      {safePhotos.length > 0 && (
        <>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="ri-image-line mr-3 text-teal-600"></i>
            Photos ({safePhotos.length})
          </h3>
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-6 w-auto"
            columnClassName="pl-6 bg-clip-padding"
          >
            {safePhotos.map((photoUrl, index) => (
              <LazyImage
                key={`photo-${index}`}
                photoUrl={photoUrl}
                index={index}
                isLoaded={loadedImages.has(index)}
                hasFailed={failedImages.has(index)}
                onError={handleImageError}
                onClick={onPhotoClick}
                observerRef={observerRef}
              />
            ))}
          </Masonry>
        </>
      )}
    </div>
  );
};

// ========================================
// 🎨 LAZY IMAGE COMPONENT
// ========================================
interface LazyImageProps {
  photoUrl: string;
  index: number;
  isLoaded: boolean;
  hasFailed: boolean;
  onError: (index: number) => void;
  onClick?: (index: number) => void;
  observerRef: React.MutableRefObject<IntersectionObserver | null>;
}

const LazyImage: React.FC<LazyImageProps> = ({
  photoUrl,
  index,
  isLoaded,
  hasFailed,
  onError,
  onClick,
  observerRef
}) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const element = imgRef.current;
    if (element && observerRef.current && !isLoaded) {
      observerRef.current.observe(element);
    }

    return () => {
      if (element && observerRef.current) {
        observerRef.current.unobserve(element);
      }
    };
  }, [observerRef, isLoaded]);

  return (
    <div
      ref={imgRef}
      data-index={index}
      data-type="photo"
      className="mb-6 cursor-pointer group"
      onClick={() => !hasFailed && imageLoaded && onClick?.(index)}
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        {hasFailed ? (
          // Failed image placeholder
          <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center">
              <i className="ri-image-line text-5xl text-gray-400 mb-3"></i>
              <p className="text-gray-500 text-sm font-medium">Image Unavailable</p>
              <p className="text-gray-400 text-xs mt-1">File may be processing</p>
            </div>
          </div>
        ) : !isLoaded ? (
          // Loading skeleton
          <div className="w-full h-64 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse">
            <div className="w-full h-full flex items-center justify-center">
              <i className="ri-image-line text-4xl text-gray-300"></i>
            </div>
          </div>
        ) : (
          // Actual image
          <>
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse z-10">
                <div className="w-full h-full flex items-center justify-center">
                  <i className="ri-loader-4-line text-4xl text-gray-400 animate-spin"></i>
                </div>
              </div>
            )}
            <img
              src={photoUrl}
              alt={`Gallery photo ${index + 1}`}
              className={`w-full h-auto object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => onError(index)}
            />
            {imageLoaded && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <i className="ri-zoom-in-line text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// ========================================
// 🎬 LAZY VIDEO COMPONENT
// ========================================
interface LazyVideoProps {
  videoUrl: string;
  index: number;
  isLoaded: boolean;
  hasFailed: boolean;
  onError: (index: number) => void;
  observerRef: React.MutableRefObject<IntersectionObserver | null>;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  videoUrl,
  index,
  isLoaded,
  hasFailed,
  onError,
  observerRef
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const element = videoRef.current;
    if (element && observerRef.current && !isLoaded) {
      observerRef.current.observe(element);
    }

    return () => {
      if (element && observerRef.current) {
        observerRef.current.unobserve(element);
      }
    };
  }, [observerRef, isLoaded]);

  return (
    <div
      ref={videoRef}
      data-index={index}
      data-type="video"
      className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-900"
    >
      {hasFailed ? (
        // Failed video placeholder
        <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center">
            <i className="ri-video-off-line text-5xl text-gray-400 mb-3"></i>
            <p className="text-gray-500 text-sm font-medium">Video Unavailable</p>
            <p className="text-gray-400 text-xs mt-1">File may be processing</p>
          </div>
        </div>
      ) : !isLoaded ? (
        // Loading skeleton
        <div className="w-full h-64 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 animate-pulse">
          <div className="w-full h-full flex items-center justify-center">
            <i className="ri-video-line text-5xl text-gray-600"></i>
          </div>
        </div>
      ) : (
        // Actual video
        <>
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 animate-pulse z-10">
              <div className="w-full h-full flex items-center justify-center">
                <i className="ri-loader-4-line text-4xl text-gray-400 animate-spin"></i>
              </div>
            </div>
          )}
          <video
            controls
            className="w-full h-auto"
            preload="metadata"
            onLoadedMetadata={() => setVideoLoaded(true)}
            onError={() => onError(index)}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </div>
  );
};

export default MasonryGallery;
