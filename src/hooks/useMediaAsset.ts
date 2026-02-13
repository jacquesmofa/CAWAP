import { useMedia } from '../context/MediaContext';

/**
 * Custom hook to safely access nested media assets with fallback support
 * @param path - Dot-notation path to the asset (e.g., 'branding.logo_main')
 * @param fallback - Optional fallback URL if asset is not found
 * @returns The asset URL or fallback
 */
export function useMediaAsset(path: string, fallback?: string): string {
  const { assets, loading } = useMedia();

  if (loading || !assets) {
    return fallback || '';
  }

  const keys = path.split('.');
  let value: any = assets;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return fallback || '';
    }
  }

  return typeof value === 'string' ? value : fallback || '';
}

/**
 * Hook to download a file with proper headers
 * @param assetUrl - The URL of the file to download
 * @param filename - The name to save the file as
 */
export function useDownloadAsset() {
  return (assetUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = assetUrl;
    link.setAttribute('download', filename);
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
}
