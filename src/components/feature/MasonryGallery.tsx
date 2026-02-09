import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import LazyImage from '@/components/base/LazyImage';

interface MasonryGalleryProps {
  photos: string[];
  videos?: string[];
  onPhotoClick?: (index: number) => void;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ photos, videos = [], onPhotoClick }) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const breakpointColumns = {
    default: 4,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 1
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <div className="w-full">
      {/* Videos Section */}
      {videos.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="ri-video-line mr-3 text-teal-600"></i>
            Videos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((videoUrl, index) => (
              <div
                key={`video-${index}`}
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-900"
              >
                <video
                  controls
                  className="w-full h-auto"
                  preload="metadata"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Photos Section */}
      {photos.length > 0 && (
        <>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="ri-image-line mr-3 text-teal-600"></i>
            Photos ({photos.length})
          </h3>
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-6 w-auto"
            columnClassName="pl-6 bg-clip-padding"
          >
            {photos.map((photoUrl, index) => (
              <div
                key={`photo-${index}`}
                className="mb-6 cursor-pointer group"
                onClick={() => onPhotoClick?.(index)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <LazyImage
                    src={photoUrl}
                    alt={`Gallery photo ${index + 1}`}
                    className="w-full h-auto"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <i className="ri-zoom-in-line text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </>
      )}

      {photos.length === 0 && videos.length === 0 && (
        <div className="text-center py-20">
          <i className="ri-image-line text-6xl text-gray-300 mb-4"></i>
          <p className="text-gray-500 text-lg">No media available in this category yet.</p>
        </div>
      )}
    </div>
  );
};

export default MasonryGallery;
