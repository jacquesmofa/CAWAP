
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { MediaAssets, MediaContextType } from '../types/media';

const MediaContext = createContext<MediaContextType | undefined>(undefined);

interface MediaProviderProps {
  children: ReactNode;
}

/**
 * MediaProvider – fetches media assets (including optional deep gallery manifest)
 * and supplies them via React Context.
 *
 * Guarantees:
 * - Single source of truth – only one provider component is exported.
 * - Robust error handling with clear messages.
 * - `refetch` method for manual reloads.
 */
export function MediaProvider({ children }: MediaProviderProps) {
  const [assets, setAssets] = useState<MediaAssets | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /** Fetch assets and optionally the deep‑gallery manifest */
  const fetchAssets = async () => {
    try {
      setLoading(true);
      setError(null);

      // Base assets
      const response = await fetch(`${__BASE_PATH__}/media/site-assets.json`);
      if (!response.ok) {
        throw new Error(`Failed to load media assets: ${response.status}`);
      }
      const data: MediaAssets = await response.json();

      // Optional deep gallery manifest – failures are non‑critical
      try {
        const galleryResponse = await fetch(`${__BASE_PATH__}/media/gallery-manifest.json`);
        if (galleryResponse.ok) {
          const galleryData = await galleryResponse.json();
          // Extend the original payload safely
          (data as any).galleryDeep = galleryData;
        }
      } catch (galleryError) {
        console.warn('Gallery manifest not found or failed to load, proceeding without it.', galleryError);
      }

      setAssets(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error loading media assets';
      setError(errorMessage);
      console.error('Media Context Error:', errorMessage);
      setAssets(null);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchAssets();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- fetchAssets is stable
  }, []);

  // Expose a manual refetch method
  const refetch = async () => {
    await fetchAssets();
  };

  const value: MediaContextType = {
    assets,
    loading,
    error,
    refetch,
  };

  return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>;
}

/** Hook to consume the MediaContext safely */
export function useMedia(): MediaContextType {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context;
}
