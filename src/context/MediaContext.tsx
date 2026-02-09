
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ========================================
// 📋 TYPE DEFINITIONS
// ========================================
interface NumberedMediaConfig {
  path: string;
  count: number;
  ext?: string;
  extensions?: string[];
}

interface BrandingAssets {
  logo_main: string;
  logo_white: string;
  favicon: string;
  social_card: string;
}

interface SiteAssetsConfig {
  baseUrl: string;
  branding: BrandingAssets;
  hero: NumberedMediaConfig;
  programs: NumberedMediaConfig;
  events: NumberedMediaConfig;
  flyers: NumberedMediaConfig;
  trainings: NumberedMediaConfig;
  documents: NumberedMediaConfig;
  videos: NumberedMediaConfig;
  gallery: {
    [key: string]: NumberedMediaConfig;
  };
}

interface GeneratedMediaAssets {
  baseUrl: string;
  branding: {
    logo_main: string;
    logo_white: string;
    favicon: string;
    social_card: string;
  };
  hero: string[];
  programs: string[];
  events: string[];
  flyers: string[];
  trainings: string[];
  documents: string[];
  videos: string[];
  gallery: {
    [key: string]: string[];
  };
}

interface MediaContextType {
  assets: GeneratedMediaAssets | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  getGalleryMedia: (category: string) => { photos: string[]; videos: string[] };
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

interface MediaProviderProps {
  children: ReactNode;
}

// ========================================
// 🔧 MEDIA URL GENERATOR
// ========================================
const VIDEO_EXTENSIONS = ['mp4', 'webm', 'mov', 'avi', 'mkv'];
const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

/**
 * Generates numbered media URLs
 * Files should be named: 1.jpg, 2.jpg, 3.mp4, etc.
 */
function generateNumberedUrls(
  baseUrl: string,
  config: NumberedMediaConfig
): string[] {
  const urls: string[] = [];
  const { path, count, ext, extensions } = config;

  if (ext) {
    // Single extension mode: 1.jpg, 2.jpg, 3.jpg...
    for (let i = 1; i <= count; i++) {
      urls.push(`${baseUrl}/${path}/${i}.${ext}`);
    }
  } else if (extensions && extensions.length > 0) {
    // Multi-extension mode: Try all extensions for each number
    // This allows mixed media (photos + videos) in same folder
    for (let i = 1; i <= count; i++) {
      // We'll generate URLs for all possible extensions
      // The onError handler will hide non-existent files
      for (const extension of extensions) {
        urls.push(`${baseUrl}/${path}/${i}.${extension}`);
      }
    }
  }

  return urls;
}

/**
 * Generates assets from the config
 */
function generateAssetsFromConfig(config: SiteAssetsConfig): GeneratedMediaAssets {
  const { baseUrl } = config;

  return {
    baseUrl,
    branding: {
      logo_main: `${baseUrl}/${config.branding.logo_main}`,
      logo_white: `${baseUrl}/${config.branding.logo_white}`,
      favicon: `${baseUrl}/${config.branding.favicon}`,
      social_card: `${baseUrl}/${config.branding.social_card}`,
    },
    hero: generateNumberedUrls(baseUrl, config.hero),
    programs: generateNumberedUrls(baseUrl, config.programs),
    events: generateNumberedUrls(baseUrl, config.events),
    flyers: generateNumberedUrls(baseUrl, config.flyers),
    trainings: generateNumberedUrls(baseUrl, config.trainings),
    documents: generateNumberedUrls(baseUrl, config.documents),
    videos: generateNumberedUrls(baseUrl, config.videos),
    gallery: Object.entries(config.gallery).reduce((acc, [key, galleryConfig]) => {
      acc[key] = generateNumberedUrls(baseUrl, galleryConfig);
      return acc;
    }, {} as { [key: string]: string[] }),
  };
}

// ========================================
// 🎯 MEDIA PROVIDER COMPONENT
// ========================================
export function MediaProvider({ children }: MediaProviderProps) {
  const [assets, setAssets] = useState<GeneratedMediaAssets | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAssets = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${__BASE_PATH__}/media/site-assets.json`);
      if (!response.ok) {
        throw new Error(`Failed to load media config: ${response.status}`);
      }
      
      const config: SiteAssetsConfig = await response.json();
      const generatedAssets = generateAssetsFromConfig(config);
      
      setAssets(generatedAssets);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error loading media assets';
      setError(errorMessage);
      console.error('Media Context Error:', errorMessage);
      setAssets(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  /**
   * Helper function to separate photos and videos from a gallery category
   */
  const getGalleryMedia = (category: string): { photos: string[]; videos: string[] } => {
    if (!assets?.gallery?.[category]) {
      return { photos: [], videos: [] };
    }

    const allUrls = assets.gallery[category];
    const photos: string[] = [];
    const videos: string[] = [];

    allUrls.forEach(url => {
      const extension = url.split('.').pop()?.toLowerCase() || '';
      if (VIDEO_EXTENSIONS.includes(extension)) {
        videos.push(url);
      } else if (IMAGE_EXTENSIONS.includes(extension)) {
        photos.push(url);
      }
    });

    return { photos, videos };
  };

  const value: MediaContextType = {
    assets,
    loading,
    error,
    refetch: fetchAssets,
    getGalleryMedia,
  };

  return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>;
}

// ========================================
// 🪝 CUSTOM HOOK
// ========================================
export function useMedia(): MediaContextType {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context;
}
