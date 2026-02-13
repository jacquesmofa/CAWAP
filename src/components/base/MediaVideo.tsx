import { useState } from 'react';
import { useMediaAsset } from '../../hooks/useMediaAsset';

interface MediaVideoProps {
  path: string;
  className?: string;
  fallback?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
}

export default function MediaVideo({
  path,
  className = '',
  fallback = '',
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  poster,
}: MediaVideoProps) {
  const videoUrl = useMediaAsset(path, fallback);
  const [videoError, setVideoError] = useState(false);

  const handleError = () => {
    setVideoError(true);
  };

  if (!videoUrl || videoError) {
    return (
      <div className={`bg-gray-900 flex items-center justify-center ${className}`}>
        <i className="ri-video-line text-4xl text-gray-400"></i>
      </div>
    );
  }

  return (
    <video
      src={videoUrl}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      poster={poster}
      onError={handleError}
    >
      Your browser does not support the video tag.
    </video>
  );
}
