import { useState } from 'react';
import { getCloudinaryUrl, CLOUDINARY_TRANSFORMS } from '../../config/cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  transformation?: keyof typeof CLOUDINARY_TRANSFORMS | string;
  className?: string;
  width?: number;
  height?: number;
}

const CloudinaryImage = ({
  publicId,
  alt,
  transformation = 'optimized',
  className = '',
  width,
  height,
}: CloudinaryImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Get transformation string
  const transformStr = transformation in CLOUDINARY_TRANSFORMS
    ? CLOUDINARY_TRANSFORMS[transformation as keyof typeof CLOUDINARY_TRANSFORMS]
    : transformation;

  // Generate URL
  const imageUrl = getCloudinaryUrl(publicId, transformStr);

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <i className="ri-image-line text-gray-400 text-4xl"></i>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}></div>
      )}
      <img
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
};

export default CloudinaryImage;
