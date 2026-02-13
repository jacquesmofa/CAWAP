
import { useState } from 'react';

interface AutoImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

/**
 * AutoImage - Image component with automatic error handling
 * If the image doesn't exist (404), it simply hides itself
 * This is the "Pro Secret" for the numbered media system
 */
export default function AutoImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  onClick,
}: AutoImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If error, hide the component completely
  if (hasError) {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      loading={loading}
      onClick={onClick}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      style={{ display: hasError ? 'none' : undefined }}
    />
  );
}
