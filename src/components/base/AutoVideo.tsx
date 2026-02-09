
import { useState } from 'react';

interface AutoVideoProps {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  onClick?: () => void;
}

/**
 * AutoVideo - Video component with automatic error handling
 * If the video doesn't exist (404), it simply hides itself
 * This is the "Pro Secret" for the numbered media system
 */
export default function AutoVideo({
  src,
  className = '',
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  preload = 'metadata',
  onClick,
}: AutoVideoProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If error, hide the component completely
  if (hasError) {
    return null;
  }

  return (
    <video
      src={src}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      preload={preload}
      onClick={onClick}
      onLoadedMetadata={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      style={{ display: hasError ? 'none' : undefined }}
    >
      Your browser does not support the video tag.
    </video>
  );
}
