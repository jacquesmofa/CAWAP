import DownloadButton from './DownloadButton';

interface DocumentCardProps {
  title: string;
  description?: string;
  fileUrl: string;
  fileName: string;
  fileType?: 'pdf' | 'doc' | 'txt' | 'other';
  fileSize?: string;
  icon?: string;
  className?: string;
}

export default function DocumentCard({
  title,
  description,
  fileUrl,
  fileName,
  fileType = 'pdf',
  fileSize,
  icon,
  className = '',
}: DocumentCardProps) {
  const getFileIcon = () => {
    if (icon) return icon;
    
    switch (fileType) {
      case 'pdf':
        return 'ri-file-pdf-line';
      case 'doc':
        return 'ri-file-word-line';
      case 'txt':
        return 'ri-file-text-line';
      default:
        return 'ri-file-line';
    }
  };

  const getFileColor = () => {
    switch (fileType) {
      case 'pdf':
        return 'text-red-600';
      case 'doc':
        return 'text-blue-600';
      case 'txt':
        return 'text-gray-600';
      default:
        return 'text-teal-600';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 ${className}`}>
      <div className="flex items-start gap-4">
        <div className={`w-16 h-16 flex items-center justify-center rounded-lg bg-gray-50 ${getFileColor()}`}>
          <i className={`${getFileIcon()} text-3xl`}></i>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          
          {description && (
            <p className="text-sm text-gray-600 mb-3">{description}</p>
          )}
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs text-gray-500 uppercase font-medium">
              {fileType.toUpperCase()}
            </span>
            {fileSize && (
              <>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-gray-500">{fileSize}</span>
              </>
            )}
          </div>
          
          <DownloadButton
            fileUrl={fileUrl}
            fileName={fileName}
            label="Download"
            variant="primary"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
}
