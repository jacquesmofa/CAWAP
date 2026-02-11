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
  galleryDeep?: {
    [key: string]: {
      name: string;
      icon: string;
      subcategories: {
        [key: string]: {
          name: string;
          photos: string[];
          videos: string[];
          isEmpty: boolean;
        };
      };
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
 * 🎯 STANDARDIZED MEDIA URL GENERATOR
 * PNG for images, MP4 for videos - NO EXTENSION GUESSING
 * 
 * ✨ NEW: "Always Visible" Mode - Generates URLs even if files don't exist
 * This ensures all categories/albums appear in the UI with placeholders
 * 
 * 🛡️ DEFENSIVE: Now handles undefined/null config safely
 */
function generateNumberedUrls(
  baseUrl: string,
  config: NumberedMediaConfig | undefined
): string[] {
  // 🛡️ CRITICAL SAFETY: Check BEFORE destructuring
  if (!config) {
    console.warn('generateNumberedUrls: config is undefined, returning empty array');
    return [];
  }
  
  // 🛡️ SAFE DESTRUCTURING: Now guaranteed config exists
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
    // Default logic: videos folder gets .mp4, everything else gets .png
    extension = path.includes('video') ? 'mp4' : 'png';
  }

  // Generate simple numbered URLs: 1.png, 2.png, 3.png...
  // ✨ NEW: Always generate URLs regardless of file existence
  // The UI will handle empty states with placeholders
  for (let i = 1; i <= count; i++) {
    urls.push(`${baseUrl}/${path}/${i}.${extension}`);
  }

  return urls;
}

/**
 * Generates assets from the config
 * 
 * ✨ NEW: "Always Visible" Structure
 * - All categories/subcategories from JSON are ALWAYS included
 * - Empty albums get isEmpty: true flag for placeholder UI
 * - No more hidden categories - everything is visible
 */
function generateAssetsFromConfig(config: SiteAssetsConfig): GeneratedMediaAssets {
  const { baseUrl } = config;

  // Handle both gallery and galleryDeep structures
  let galleryAssets: { [key: string]: string[] } = {};
  let galleryDeepAssets: GeneratedMediaAssets['galleryDeep'] = undefined;
  
  if (config.galleryDeep) {
    galleryDeepAssets = {};
    
    // ✨ NEW: Process ALL categories from JSON, even if empty
    Object.entries(config.galleryDeep).forEach(([categoryKey, category]) => {
      galleryDeepAssets![categoryKey] = {
        name: category.name,
        icon: category.icon,
        subcategories: {},
      };
      
      // ✨ NEW: Process ALL subcategories, even if count is 0
      Object.entries(category.subcategories).forEach(([subKey, subConfig]) => {
        const key = `${categoryKey}_${subKey}`;
        
        // 🛡️ SAFE: generateNumberedUrls now handles undefined gracefully
        const urls = generateNumberedUrls(baseUrl, subConfig);
        galleryAssets[key] = urls;

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

        // ✨ NEW: Add isEmpty flag for placeholder UI
        const isEmpty = subConfig.count === 0 || (photos.length === 0 && videos.length === 0);

        galleryDeepAssets![categoryKey].subcategories[subKey] = {
          name: subConfig.name,
          photos,
          videos,
          isEmpty, // ✨ NEW: Flag for UI to show placeholders
        };
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
    galleryDeep: galleryDeepAssets,
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
      
      // Check if response is actually JSON
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
      
      // Use fallback configuration instead of failing
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
        galleryDeep: {
          food_bank: {
            name: 'Food Bank Gallery',
            icon: 'ri-hand-heart-line',
            description: 'See our food bank in action - from food sorting to distribution',
            subcategories: {
              operations: {
                name: 'Food Bank Operations',
                path: 'gallery/food-bank',
                count: 100,
                ext: 'png',
                description: 'Daily operations, food sorting, and distribution activities'
              }
            }
          },
          community: {
            name: 'Community Events',
            icon: 'ri-community-line',
            description: 'Community gatherings, celebrations, and local initiatives',
            subcategories: {
              general: {
                name: 'Community Gatherings',
                path: 'gallery/community',
                count: 50,
                ext: 'png',
                description: 'General community events and gatherings'
              }
            }
          },
          programs: {
            name: 'Programs & Workshops',
            icon: 'ri-book-open-line',
            description: 'Educational programs, training sessions, and skill-building workshops',
            subcategories: {
              youth: {
                name: 'Youth Programs',
                path: 'gallery/youth',
                count: 50,
                ext: 'png',
                description: 'Youth leadership, mentorship, and development programs'
              },
              workshops: {
                name: 'Workshops & Training',
                path: 'gallery/workshops',
                count: 50,
                ext: 'png',
                description: 'Skills training, professional development, and educational workshops'
              }
            }
          },
          events: {
            name: 'Special Events',
            icon: 'ri-calendar-event-line',
            description: 'Annual celebrations, award ceremonies, and cultural events',
            subcategories: {
              awards: {
                name: 'Sankofa Royale Awards',
                path: 'gallery/awards',
                count: 50,
                ext: 'png',
                description: 'Annual awards ceremony celebrating community excellence'
              },
              cultural: {
                name: 'Cultural Celebrations',
                path: 'gallery/cultural',
                count: 50,
                ext: 'png',
                description: 'Cultural festivals, heritage celebrations, and traditional events'
              }
            }
          },
          official_videos: {
            name: 'Official Videos',
            icon: 'ri-video-line',
            description: 'Official video content, documentaries, and recorded events',
            subcategories: {
              main: {
                name: 'Video Library',
                path: 'videos',
                count: 50,
                ext: 'mp4',
                description: 'Official video content and recordings'
              }
            }
          }
        }
      };
      
      const generatedAssets = generateAssetsFromConfig(fallbackConfig);
      setAssets(generatedAssets);
      setError(null); // Don't show error to user since we have fallback
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

    // Simple extension check: .mp4 = video, everything else = photo
    allUrls.forEach(url => {
      const extension = url.split('.').pop()?.toLowerCase() || '';
      if (extension === 'mp4') {
        videos.push(url);
      } else {
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
