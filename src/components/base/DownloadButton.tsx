import { useState } from 'react';

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
  label?: string;
  className?: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function DownloadButton({
  fileUrl,
  fileName,
  label = 'Download',
  className = '',
  icon = 'ri-download-2-line',
  variant = 'primary',
  size = 'md',
}: DownloadButtonProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);

      const response = await fetch(fileUrl);
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download file. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  const variantClasses = {
    primary: 'bg-teal-600 hover:bg-teal-700 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-900 text-white',
    outline: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        rounded-lg font-medium
        transition-all duration-300
        flex items-center justify-center gap-2
        whitespace-nowrap
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:shadow-lg
        ${className}
      `}
    >
      {downloading ? (
        <>
          <i className="ri-loader-4-line animate-spin"></i>
          <span>Downloading...</span>
        </>
      ) : (
        <>
          <i className={icon}></i>
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
