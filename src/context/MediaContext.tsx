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

interface GallerySubcategory {
  name: string;
  path: string;
  count: number;
  ext?: string;
  extensions?: string[];
}

interface GalleryCategory {
  name: string;
  icon: string;
  subcategories: {
    [key: string]: GallerySubcategory;
  };
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
  gallery?: {
    [key: string]: NumberedMediaConfig;
  };
  galleryDeep?: {
    [key: string]: GalleryCategory;
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
const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'JPG', 'JPEG', 'png', 'PNG', 'gif', 'webp'];
const VIDEO_EXTENSIONS = ['mp4', 'webm', 'mov', 'avi', 'mkv'];

/**
 * 🌟 UNIVERSAL MEDIA URL GENERATOR
 * Generates URLs for all common file extensions to handle any format
 * Files can be: 1.jpg, 1.jpeg, 1.JPG, 1.JPEG, 1.png, 1.webp, etc.
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
    for (let i = 1; i <= count; i++) {
      for (const extension of extensions) {
        urls.push(`${baseUrl}/${path}/${i}.${extension}`);
      }
    }
  } else {
    // 🌟 UNIVERSAL MODE: No extension specified, try ALL common formats
    // This makes the system resilient to any file type
    const allExtensions = [...IMAGE_EXTENSIONS, ...VIDEO_EXTENSIONS];
    for (let i = 1; i <= count; i++) {
      for (const extension of allExtensions) {
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

  // Handle both gallery and galleryDeep structures
  let galleryAssets: { [key: string]: string[] } = {};
  
  if (config.galleryDeep) {
    // Flatten galleryDeep structure into simple gallery format
    Object.entries(config.galleryDeep).forEach(([categoryKey, category]) => {
      Object.entries(category.subcategories).forEach(([subKey, subConfig]) => {
        const key = `${categoryKey}_${subKey}`;
        galleryAssets[key] = generateNumberedUrls(baseUrl, subConfig);
      });
    });
  } else if (config.gallery) {
    // Use flat gallery structure
    galleryAssets = Object.entries(config.gallery).reduce((acc, [key, galleryConfig]) => {
      acc[key] = generateNumberedUrls(baseUrl, galleryConfig);
      return acc;
    }, {} as { [key: string]: string[] });
  }

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
    gallery: galleryAssets,
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

      // ✅ FIX: Use relative path instead of __BASE_PATH__
      const response = await fetch('/media/site-assets.json');
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
