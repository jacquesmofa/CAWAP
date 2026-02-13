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

interface GalleryCategory {
  name: string;
  path: string;
  count: number;
  icon: string;
  description?: string;
  ext?: string;
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
    [key: string]: {
      name: string;
      icon: string;
      description?: string;
      photos: string[];
      videos: string[];
      allMedia: string[];
    };
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
// 🔧 SIMPLIFIED MEDIA URL GENERATOR
// ========================================

/**
 * 🎯 SAFE URL GENERATOR - No more crashes!
 */
function generateNumberedUrls(
  baseUrl: string,
  config: NumberedMediaConfig | undefined
): string[] {
  // 🛡️ SAFETY CHECK FIRST - before destructuring
  if (!config) {
    console.warn('generateNumberedUrls: config is undefined, returning empty array');
    return [];
  }
  
  const { path, count, ext } = config;

  // 🛡️ SAFETY: Handle missing path
  if (!path || count === 0) {
    console.warn(`generateNumberedUrls: Invalid path="${path}" or count=${count}, returning empty array`);
    return [];
  }

  const urls: string[] = [];

  // Determine extension: use specified ext, or default based on path type
  let extension = ext;
  
  if (!extension) {
    extension = path.includes('video') ? 'mp4' : 'png';
  }

  // Generate simple numbered URLs: 1.png, 2.png, 3.png...
  for (let i = 1; i <= count; i++) {
    urls.push(`${baseUrl}/${path}/${i}.${extension}`);
  }

  return urls;
}

/**
 * Generates assets from the config - SIMPLIFIED FLAT STRUCTURE
 */
function generateAssetsFromConfig(config: SiteAssetsConfig): GeneratedMediaAssets {
  const { baseUrl } = config;

  // Process flat gallery structure
  const galleryAssets: GeneratedMediaAssets['gallery'] = {};
  
  if (config.gallery) {
    Object.entries(config.gallery).forEach(([categoryKey, categoryConfig]) => {
      const urls = generateNumberedUrls(baseUrl, {
        path: categoryConfig.path,
        count: categoryConfig.count,
        ext: categoryConfig.ext || 'png'
      });

      // Separate photos and videos
      const photos: string[] = [];
      const videos: string[] = [];
      
      urls.forEach(url => {
        const ext = url.split('.').pop()?.toLowerCase() || '';
        if (ext === 'mp4' || ext === 'webm' || ext === 'mov') {
          videos.push(url);
        } else {
          photos.push(url);
        }
      });

      galleryAssets[categoryKey] = {
        name: categoryConfig.name,
        icon: categoryConfig.icon,
        description: categoryConfig.description,
        photos,
        videos,
        allMedia: urls
      };
    });
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
      const response = await fetch('/media/site-assets.json', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to load media config: ${response.status}`);
      }
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.warn('site-assets.json returned non-JSON content, using fallback configuration');
        throw new Error('Invalid content type - expected JSON');
      }
      
      const config: SiteAssetsConfig = await response.json();
      const generatedAssets = generateAssetsFromConfig(config);
      
      setAssets(generatedAssets);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error loading media assets';
      console.warn('Media Context Warning:', errorMessage, '- Using fallback configuration');
      
      // Use fallback configuration
      const fallbackConfig: SiteAssetsConfig = {
        baseUrl: '/media',
        branding: {
          logo_main: 'branding/cawap-logo.png',
          logo_white: 'branding/cawap-logo-white.png',
          favicon: 'branding/favicon.ico',
          social_card: 'branding/social-card.jpg'
        },
        hero: { path: 'hero', count: 10, ext: 'png' },
        programs: { path: 'programs', count: 20, ext: 'png' },
        events: { path: 'events', count: 20, ext: 'png' },
        flyers: { path: 'flyers', count: 20, ext: 'png' },
        trainings: { path: 'trainings', count: 20, ext: 'png' },
        documents: { path: 'documents', count: 30, ext: 'pdf' },
        videos: { path: 'videos', count: 50, ext: 'mp4' },
        gallery: {
          food_bank: {
            name: 'Food Bank',
            path: 'gallery/food-bank',
            count: 100,
            icon: 'ri-hand-heart-line',
            description: 'Our food bank operations and community support'
          },
          community: {
            name: 'Community Events',
            path: 'gallery/community',
            count: 50,
            icon: 'ri-community-line',
            description: 'Community gatherings and celebrations'
          },
          youth: {
            name: 'Youth Programs',
            path: 'gallery/youth',
            count: 50,
            icon: 'ri-user-smile-line',
            description: 'Youth leadership and development programs'
          },
          workshops: {
            name: 'Workshops & Training',
            path: 'gallery/workshops',
            count: 50,
            icon: 'ri-book-open-line',
            description: 'Skills training and educational workshops'
          },
          awards: {
            name: 'Awards & Recognition',
            path: 'gallery/awards',
            count: 50,
            icon: 'ri-award-line',
            description: 'Sankofa Royale Awards and recognition ceremonies'
          },
          cultural: {
            name: 'Cultural Events',
            path: 'gallery/cultural',
            count: 50,
            icon: 'ri-earth-line',
            description: 'Cultural celebrations and heritage events'
          },
          official_videos: {
            name: 'Official Videos',
            path: 'videos',
            count: 50,
            icon: 'ri-video-line',
            description: 'Official video content and recordings'
          }
        }
      };
      
      const generatedAssets = generateAssetsFromConfig(fallbackConfig);
      setAssets(generatedAssets);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  /**
   * Helper function to get photos and videos from a gallery category
   */
  const getGalleryMedia = (category: string): { photos: string[]; videos: string[] } => {
    if (!assets?.gallery?.[category]) {
      return { photos: [], videos: [] };
    }

    return {
      photos: assets.gallery[category].photos,
      videos: assets.gallery[category].videos
    };
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
