import { useState } from 'react';

interface UseDocumentDownloadOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useDocumentDownload(options?: UseDocumentDownloadOptions) {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const downloadDocument = async (fileUrl: string, fileName: string) => {
    try {
      setDownloading(true);
      setProgress(0);

      const response = await fetch(fileUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to download: ${response.statusText}`);
      }

      const contentLength = response.headers.get('content-length');
      const total = contentLength ? parseInt(contentLength, 10) : 0;
      
      const reader = response.body?.getReader();
      const chunks: Uint8Array[] = [];
      let receivedLength = 0;

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) break;
          
          chunks.push(value);
          receivedLength += value.length;
          
          if (total > 0) {
            setProgress(Math.round((receivedLength / total) * 100));
          }
        }
      }

      const blob = new Blob(chunks);
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      options?.onSuccess?.();
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Download failed');
      options?.onError?.(err);
      throw err;
    } finally {
      setDownloading(false);
      setProgress(0);
    }
  };

  return {
    downloadDocument,
    downloading,
    progress,
  };
}
