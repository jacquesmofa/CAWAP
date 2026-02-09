
import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

interface AutoGalleryProps {
  urls: string[];
  onPhotoClick?: (index: number, url: string) => void;
}

interface ValidMedia {
  url: string;
  type: 'image' | 'video';
  index: number;
}

const VIDEO_EXTENSIONS = ['mp4', 'webm', 'mov', 'avi', 'mkv'];

/**
 * AutoGallery - Gallery component that automatically handles missing files
 * Uses the numbered media system - files that don't exist are simply hidden
 */
export default function AutoGallery({ urls, onPhotoClick }: AutoGalleryProps) {
  const [validMedia, setValidMedia] = useState<ValidMedia[]>([]);
  const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({});

  const breakpointColumns = {
    default: 4,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 1
  };

  const getMediaType = (url: string): 'image' | 'video' => {
    const extension = url.split('.').pop()?.toLowerCase() || '';
    return VIDEO_EXTENSIONS.includes(extension) ? 'video' : 'image';
  };

  // Initialize loading states
  useEffect(() => {
    const initialStates: { [key: string]: boolean } = {};
    urls.forEach(url => {
      initialStates[url] = true; // true = still loading/checking
    });
    setLoadingStates(initialStates);
    setValidMedia([]);
  }, [urls]);

  const handleMediaLoad = (url: string, index: number) => {
    setLoadingStates(prev => ({ ...prev, [url]: false }));
    setValidMedia(prev => {
      // Avoid duplicates
      if (prev.some(m => m.url === url)) return prev;
      const newMedia = [...prev, { url, type: getMediaType(url), index }];
      // Sort by original index to maintain order
      return newMedia.sort((a, b) => a.index - b.index);
    });
  };

  const handleMediaError = (url: string) => {
    setLoadingStates(prev => ({ ...prev, [url]: false }));
    // Don't add to validMedia - it will be hidden
  };

  // Separate photos and videos
  const photos = validMedia.filter(m => m.type === 'image');
  const videos = validMedia.filter(m => m.type === 'video');

  // Check if still loading
  const isLoading = Object.values(loadingStates).some(state => state);

  return (
    <div className="w-full">
      {/* Hidden preload elements to check which files exist */}
      <div className="hidden">
        {urls.map((url, index) => {
          const type = getMediaType(url);
          if (type === 'video') {
            return (
              <video
                key={url}
                src={url}
                preload="metadata"
                onLoadedMetadata={() => handleMediaLoad(url, index)}
                onError={() => handleMediaError(url)}
              />
            );
          }
          return (
            <img
              key={url}
              src={url}
              onLoad={() => handleMediaLoad(url, index)}
              onError={() => handleMediaError(url)}
              alt=""
            />
          );
        })}
      </div>

      {/* Loading State */}
      {isLoading && validMedia.length === 0 && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <i className="ri-loader-4-line text-4xl text-teal-600 animate-spin"></i>
            <p className="mt-4 text-gray-600">Loading gallery...</p>
          </div>
        </div>
      )}

      {/* Videos Section */}
      {videos.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="ri-video-line mr-3 text-teal-600"></i>
            Videos ({videos.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((media) => (
              <div
                key={media.url}
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-900"
              >
                <video
                  controls
                  className="w-full h-auto"
                  preload="metadata"
                >
                  <source src={media.url} type="video/mp4" />
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
            {photos.map((media, displayIndex) => (
              <div
                key={media.url}
                className="mb-6 cursor-pointer group"
                onClick={() => onPhotoClick?.(displayIndex, media.url)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <img
                    src={media.url}
                    alt={`Gallery photo ${displayIndex + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
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

      {/* Empty State */}
      {!isLoading && validMedia.length === 0 && (
        <div className="text-center py-20">
          <i className="ri-image-line text-6xl text-gray-300 mb-4"></i>
          <p className="text-gray-500 text-lg">No media available in this category yet.</p>
          <p className="text-gray-400 text-sm mt-2">Upload numbered files (1.jpg, 2.jpg, etc.) to display them here.</p>
        </div>
      )}
    </div>
  );
}
