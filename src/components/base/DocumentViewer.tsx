import { useState } from 'react';
import DownloadButton from './DownloadButton';

interface DocumentViewerProps {
  fileUrl: string;
  fileName: string;
  title?: string;
  className?: string;
}

export default function DocumentViewer({
  fileUrl,
  fileName,
  title,
  className = '',
}: DocumentViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openViewer = () => {
    setIsOpen(true);
  };

  const closeViewer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openViewer}
        className={`
          px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white
          rounded-lg font-medium transition-all duration-300
          flex items-center justify-center gap-2
          whitespace-nowrap hover:shadow-lg
          ${className}
        `}
      >
        <i className="ri-eye-line"></i>
        <span>View Document</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {title || fileName}
              </h3>
              
              <div className="flex items-center gap-2">
                <DownloadButton
                  fileUrl={fileUrl}
                  fileName={fileName}
                  label="Download"
                  variant="outline"
                  size="sm"
                />
                
                <button
                  onClick={closeViewer}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <i className="ri-close-line text-2xl text-gray-600"></i>
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-hidden">
              <iframe
                src={fileUrl}
                className="w-full h-full border-0"
                title={fileName}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
