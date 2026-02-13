import { useState } from 'react';
import { useMediaAsset } from '../../hooks/useMediaAsset';

interface MediaImageProps {
  path: string;
  alt: string;
  className?: string;
  fallback?: string;
  loading?: 'lazy' | 'eager';
  onError?: () => void;
}

export default function MediaImage({
  path,
  alt,
  className = '',
  fallback = '',
  loading = 'lazy',
  onError,
}: MediaImageProps) {
  const assetUrl = useMediaAsset(path, fallback);
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  if (!assetUrl || imageError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <i className="ri-image-line text-4xl text-gray-400"></i>
      </div>
    );
  }

  return (
    <img
      src={assetUrl}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
    />
  );
}
