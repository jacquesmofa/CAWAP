
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';
import { useMedia } from '../../context/MediaContext';
import { Link } from 'react-router-dom';
import copy from '../../content/pages/food-bank.json';
// Text, images and links: src/content/pages/food-bank.json (editable in the website editors).

// ========================================
// 🎬 MEDIA TYPE DEFINITION
// ========================================
type MediaType = 'image' | 'video';

interface GalleryMedia {
  url: string;
  title: string;
  type: MediaType;
}

// ========================================
// 🔧 HELPER FUNCTIONS
// ========================================
const VIDEO_EXTENSIONS = copy.VIDEO_EXTENSIONS;

const getMediaType = (url: string): MediaType => {
  const extension = url.split('.').pop()?.toLowerCase() || '';
  return VIDEO_EXTENSIONS.includes(extension) ? 'video' : 'image';
};

export default function FoodBankPage() {
  // ========================================
  // 🎯 MEDIA CONTEXT - AUTO-NUMBERED SYSTEM
  // ========================================
  const { assets, loading: mediaLoading } = useMedia();
  
  // ========================================
  // 🎬 GALLERY STATE MANAGEMENT
  // ========================================
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllMedia, setShowAllMedia] = useState(false);
  const [validMedia, setValidMedia] = useState<GalleryMedia[]>([]);
  
  // ========================================
  // 🔍 ZOOM & PAN STATE (Mobile-like Experience)
  // ========================================
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });

  // ========================================
  // 🎬 GET MEDIA FROM MAIN GALLERY - food_bank category
  // This pulls directly from the main gallery's food_bank section
  // ========================================
  const galleryUrls = assets?.gallery?.food_bank?.allMedia || [];
  
  // Get hero image from numbered hero folder
  const heroImage = assets?.hero?.[0] || '/media/hero/1.png';
  
  // Get first video from the gallery for the video section
  const firstVideo = assets?.gallery?.food_bank?.videos?.[0] || assets?.videos?.[0] || null;

  // ========================================
  // 🎬 GALLERY DISPLAY LOGIC
  // ========================================
  const INITIAL_DISPLAY_COUNT = 6;
  const displayMedia = showAllMedia ? validMedia : validMedia.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreMedia = validMedia.length > INITIAL_DISPLAY_COUNT;

  // Separate photos and videos for display
  const allPhotos = validMedia.filter(m => m.type === 'image');

  // ========================================
  // 🎬 MEDIA VALIDATION HANDLERS
  // These handle the "Pro Secret" - hiding non-existent files
  // ========================================
  const handleMediaLoad = (url: string) => {
    setValidMedia(prev => {
      if (prev.some(m => m.url === url)) return prev;
      const newMedia: GalleryMedia = {
        url,
        title: `Food Bank ${getMediaType(url) === 'video' ? 'Video' : 'Photo'}`,
        type: getMediaType(url)
      };
      const updated = [...prev, newMedia];
      // Sort by original index to maintain order
      return updated.sort((a, b) => galleryUrls.indexOf(a.url) - galleryUrls.indexOf(b.url));
    });
  };

  const handleMediaError = () => {
    // File doesn't exist - just ignore it (the "Pro Secret")
  };

  // ========================================
  // 🎬 LIGHTBOX CONTROLS
  // ========================================
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allPhotos.length);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // ========================================
  // 🔍 ZOOM CONTROLS
  // ========================================
  const zoomIn = () => setScale(prev => Math.min(prev + 0.5, 4));
  const zoomOut = () => {
    setScale(prev => {
      const newScale = Math.max(prev - 0.5, 1);
      if (newScale === 1) setPosition({ x: 0, y: 0 });
      return newScale;
    });
  };
  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // ========================================
  // 👆 TOUCH & MOUSE HANDLERS
  // ========================================
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      if (scale > 1) {
        setIsDragging(true);
        setDragStart({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && scale > 1 && isDragging) {
      setPosition({ x: e.touches[0].clientX - dragStart.x, y: e.touches[0].clientY - dragStart.y });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches.length === 1 && scale === 1) {
      const touchEnd = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
      const deltaX = touchEnd.x - touchStart.x;
      const deltaY = Math.abs(touchEnd.y - touchStart.y);
      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > deltaY) {
        deltaX > 0 ? previousImage() : nextImage();
      }
    }
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleDoubleClick = () => {
    if (allPhotos[currentImageIndex]?.type === 'image') {
      scale === 1 ? zoomIn() : resetZoom();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'Escape') closeLightbox();
    if (e.key === '+' || e.key === '=') zoomIn();
    if (e.key === '-' || e.key === '_') zoomOut();
    if (e.key === '0') resetZoom();
  };

  // Show loading state
  if (mediaLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#c9b037] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">{copy.main.text}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ========================================
          🔍 HIDDEN MEDIA VALIDATORS
          These check which numbered files actually exist
          Files that don't exist are simply ignored
          ======================================== */}
      <div className="hidden">
        {galleryUrls.map((url) => {
          const type = getMediaType(url);
          if (type === 'video') {
            return (
              <video
                key={url}
                src={url}
                preload="metadata"
                onLoadedMetadata={() => handleMediaLoad(url)}
                onError={() => handleMediaError()}
              />
            );
          }
          return (
            <img
              key={url}
              src={url}
              onLoad={() => handleMediaLoad(url)}
              onError={() => handleMediaError()}
              alt=""
            />
          );
        })}
      </div>

      {/* 🖼️ HERO SECTION - Using Hero Folder Images */}
      <section 
        className="relative h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-[#D4AF37]/30">
            <span className="text-[#D4AF37] font-semibold text-sm tracking-wider">{copy.heroSectionUsingHeroFolder.label}</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-6xl md:text-7xl font-bold mb-6 leading-tight">{copy.heroSectionUsingHeroFolder.title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">{copy.heroSectionUsingHeroFolder.text}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href={copy.heroSectionUsingHeroFolder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#B8941F] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
            >{copy.heroSectionUsingHeroFolder.link}</a>
            <a 
              href="/donate"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 whitespace-nowrap"
            >{copy.heroSectionUsingHeroFolder.link2}</a>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${copy.whyWeExistSection.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-white/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-5xl font-bold text-gray-900 mb-6">{copy.whyWeExistSection.heading}</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">{copy.whyWeExistSection.text}</p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mt-4">{copy.whyWeExistSection.text2}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center border border-gray-200">
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">{copy.whyWeExistSection.text3}</div>
              <div className="text-gray-700 font-semibold">{copy.whyWeExistSection.text4}</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center border border-gray-200">
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">{copy.whyWeExistSection.text5}</div>
              <div className="text-gray-700 font-semibold">{copy.whyWeExistSection.text6}</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center border border-gray-200">
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">{copy.whyWeExistSection.text7}</div>
              <div className="text-gray-700 font-semibold">{copy.whyWeExistSection.text8}</div>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Mission Statement */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <i className="fas fa-heart text-[#c9b037] text-3xl"></i>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">{copy.missionStatement.heading}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">{copy.missionStatement.text}</p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <ScrollReveal>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={copy.missionStatement.image}
                      alt={copy.missionStatement.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">{copy.missionStatement.subheading}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{copy.missionStatement.text2}</p>
                    <p className="text-gray-600 leading-relaxed mb-4">{copy.missionStatement.text3}</p>
                    <div className="flex items-center gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#c9b037]">{copy.missionStatement.text4}</div>
                        <div className="text-sm text-gray-600">{copy.missionStatement.text5}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#c9b037]">{copy.missionStatement.text6}</div>
                        <div className="text-sm text-gray-600">{copy.missionStatement.text7}</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - WITH ACTUAL VIDEO DISPLAY */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">{copy.videoSectionWithActualVideo.heading}</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.videoSectionWithActualVideo.text}</p>
                </div>
              </ScrollReveal>

              {/* VIDEO DISPLAY - Always show video player */}
              <ScrollReveal>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto bg-gray-900" style={{ maxWidth: '800px' }}>
                  {firstVideo ? (
                    <video
                      className="w-full h-auto"
                      controls
                      preload="metadata"
                      poster={assets?.hero?.[1] || heroImage}
                    >
                      <source src={firstVideo} type="video/mp4" />{copy.videoDisplayAlwaysShowVideo.text}</video>
                  ) : (
                    <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[#3c1053] to-[#5a1a7a]">
                      <div className="text-center text-white p-8">
                        <i className="ri-video-line text-6xl mb-4 opacity-50"></i>
                        <p className="text-xl font-semibold mb-2">{copy.videoDisplayAlwaysShowVideo.text2}</p>
                        <p className="text-white/70">{copy.videoDisplayAlwaysShowVideo.text3}</p>
                        <p className="text-white/50 text-sm mt-2">{copy.videoDisplayAlwaysShowVideo.text4}</p>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FOOD BANK IN PICTURES - PULLS FROM MAIN GALLERY food_bank */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <i className="ri-gallery-line text-[#c9b037] text-3xl"></i>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">{copy.foodBankInPicturesPulls.heading}</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">{copy.foodBankInPicturesPulls.text}</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <i className="ri-image-line"></i>
                      {validMedia.filter(m => m.type === 'image').length}{copy.foodBankInPicturesPulls.label}</span>
                    <span className="w-px h-4 bg-gray-300"></span>
                    <span className="flex items-center gap-2">
                      <i className="ri-video-line"></i>
                      {validMedia.filter(m => m.type === 'video').length}{copy.foodBankInPicturesPulls.label2}</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Gallery Grid */}
              {displayMedia.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {displayMedia.map((media, index) => (
                      <ScrollReveal key={media.url} delay={index * 0.05}>
                        <div 
                          className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                          onClick={() => media.type === 'image' && openLightbox(allPhotos.findIndex(p => p.url === media.url))}
                        >
                          <div className="aspect-[3/2] w-full h-full overflow-hidden">
                            {media.type === 'video' ? (
                              <video
                                src={media.url}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                muted
                                playsInline
                                preload="metadata"
                              />
                            ) : (
                              <img
                                src={media.url}
                                alt={media.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            )}
                            
                            {media.type === 'video' && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300">
                                <div className="w-20 h-20 flex items-center justify-center bg-white/90 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                                  <i className="ri-play-fill text-4xl text-[#c9b037] ml-1"></i>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-[#c9b037]/90 via-[#c9b037]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <h3 className="text-white font-bold text-lg mb-2">{media.title}</h3>
                              <div className="flex items-center justify-center gap-2">
                                <i className={`${media.type === 'image' ? 'ri-eye-line' : 'ri-play-circle-line'} text-white`}></i>
                                <span className="text-white/90 text-sm">
                                  {media.type === 'image' ? 'View Image' : 'Watch Video'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {hasMoreMedia && (
                      <button
                        onClick={() => setShowAllMedia(!showAllMedia)}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c9b037] to-[#b39f2f] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
                      >
                        <i className={`${showAllMedia ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} text-xl`}></i>
                        <span>
                          {showAllMedia 
                            ? 'Show Less' 
                            : `Load More (${validMedia.length - displayMedia.length} more)`}
                        </span>
                      </button>
                    )}

                    <Link
                      to="/gallery?category=food_bank"
                      className="inline-flex items-center gap-3 bg-white border-2 border-[#c9b037] text-[#c9b037] px-8 py-4 rounded-full font-semibold hover:bg-[#c9b037] hover:text-white transition-all duration-300 cursor-pointer shadow-lg"
                    >
                      <i className="ri-gallery-line text-xl"></i>
                      <span>{copy.actionButtons.label}</span>
                      <i className="ri-arrow-right-line text-xl"></i>
                    </Link>
                  </div>

                  <div className="text-center mt-8">
                    <p className="text-gray-600 text-lg">{copy.actionButtons.text}<strong className="text-[#c9b037]">{displayMedia.length}</strong>{copy.actionButtons.text2}<strong className="text-[#c9b037]">{validMedia.length}</strong>{copy.actionButtons.text3}</p>
                  </div>
                </>
              ) : galleryUrls.length > 0 ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <i className="ri-loader-4-line text-4xl text-[#c9b037] animate-spin"></i>
                    <p className="mt-4 text-gray-600">{copy.actionButtons.text4}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20">
                  <i className="ri-image-line text-6xl text-gray-300 mb-4"></i>
                  <p className="text-xl text-gray-500">{copy.actionButtons.text5}</p>
                  <p className="text-gray-400 mt-2">{copy.actionButtons.text6}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* LIGHTBOX VIEWER */}
        {lightboxOpen && allPhotos.length > 0 && (
          <div 
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
            onKeyDown={handleKeyPress}
            tabIndex={0}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/90 to-transparent p-6 z-50">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-white">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold">{allPhotos[currentImageIndex]?.title}</h3>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold">{copy.topBar.label}</span>
                  </div>
                  <p className="text-white/70 text-sm">{currentImageIndex + 1}{copy.topBar.text}{allPhotos.length}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={zoomOut} disabled={scale <= 1} className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed" title={copy.topBar.title}>
                    <i className="ri-zoom-out-line text-white text-xl"></i>
                  </button>
                  <span className="text-white text-sm font-semibold min-w-[60px] text-center">{Math.round(scale * 100)}%</span>
                  <button onClick={zoomIn} disabled={scale >= 4} className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed" title={copy.topBar.title2}>
                    <i className="ri-zoom-in-line text-white text-xl"></i>
                  </button>
                  <button onClick={resetZoom} className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 cursor-pointer" title={copy.topBar.title3}>
                    <i className="ri-fullscreen-exit-line text-white text-xl"></i>
                  </button>
                  <button onClick={closeLightbox} className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 cursor-pointer ml-4" title={copy.topBar.title4}>
                    <i className="ri-close-line text-white text-2xl"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button onClick={(e) => { e.stopPropagation(); previousImage(); }} className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center bg-white text-gray-800 hover:bg-[#c9b037] hover:text-white rounded-full transition-all duration-300 cursor-pointer z-50 shadow-2xl" title={copy.navigation.title}>
              <i className="ri-arrow-left-s-line text-4xl"></i>
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center bg-white text-gray-800 hover:bg-[#c9b037] hover:text-white rounded-full transition-all duration-300 cursor-pointer z-50 shadow-2xl" title={copy.navigation.title2}>
              <i className="ri-arrow-right-s-line text-4xl"></i>
            </button>

            {/* Image */}
            <div 
              className="relative max-w-7xl max-h-[90vh] w-full px-24"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onDoubleClick={handleDoubleClick}
            >
              <img
                src={allPhotos[currentImageIndex]?.url}
                alt={allPhotos[currentImageIndex]?.title}
                className="w-full h-full object-contain max-h-[80vh] rounded-lg select-none"
                style={{
                  transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                  cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                }}
                draggable={false}
              />
            </div>

            {/* Bottom Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 text-white/80 text-sm bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="flex items-center gap-2"><i className="ri-arrow-left-right-line"></i><span>{copy.bottomHint.label}</span></span>
              <span className="w-px h-4 bg-white/30"></span>
              <span className="flex items-center gap-2"><i className="ri-zoom-in-line"></i><span>{copy.bottomHint.label2}</span></span>
            </div>
          </div>
        )}

        {/* WHAT WE PROVIDE */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">{copy.whatWeProvide.heading}</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.whatWeProvide.text}</p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8">
                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-apple-alt text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{copy.whatWeProvide.subheading}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{copy.whatWeProvide.text2}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label}</span></li>
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label2}</span></li>
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label3}</span></li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-bread-slice text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{copy.whatWeProvide.subheading2}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{copy.whatWeProvide.text3}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label4}</span></li>
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label5}</span></li>
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label6}</span></li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-utensils text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{copy.whatWeProvide.subheading3}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{copy.whatWeProvide.text4}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label7}</span></li>
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label8}</span></li>
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label9}</span></li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-baby text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{copy.whatWeProvide.subheading4}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{copy.whatWeProvide.text5}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label10}</span></li>
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label11}</span></li>
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label12}</span></li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-book-open text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{copy.whatWeProvide.subheading5}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{copy.whatWeProvide.text6}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label13}</span></li>
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label14}</span></li>
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label15}</span></li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-hands-helping text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{copy.whatWeProvide.subheading6}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{copy.whatWeProvide.text7}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label16}</span></li>
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label17}</span></li>
                      <li className="flex items-start gap-2 text-sm text-gray-600"><i className="fas fa-check-circle text-[#c9b037] mt-1"></i><span>{copy.whatWeProvide.label18}</span></li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-gradient-to-br from-[#3c1053]/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c9b037] text-white rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">{copy.howItWorks.text}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{copy.howItWorks.subheading}</h3>
                    <p className="text-gray-600 leading-relaxed">{copy.howItWorks.text2}<a href={copy.howItWorks.phoneLink} className="text-[#c9b037] font-semibold hover:underline">{copy.howItWorks.link}</a>{copy.howItWorks.text3}</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c9b037] text-white rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">{copy.howItWorks.text4}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{copy.howItWorks.subheading2}</h3>
                    <p className="text-gray-600 leading-relaxed">{copy.howItWorks.text5}</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c9b037] text-white rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">{copy.howItWorks.text6}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{copy.howItWorks.subheading3}</h3>
                    <p className="text-gray-600 leading-relaxed">{copy.howItWorks.text7}</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c9b037] text-white rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">{copy.howItWorks.text8}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{copy.howItWorks.subheading4}</h3>
                    <p className="text-gray-600 leading-relaxed">{copy.howItWorks.text9}</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* OPERATING HOURS & LOCATION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <ScrollReveal>
                  <div className="bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] p-10 rounded-2xl text-white shadow-2xl">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-clock text-3xl"></i>
                    </div>
                    <h3 className="text-3xl font-bold mb-6">{copy.operatingHoursAndLocation.subheading}</h3>
                    <div className="space-y-4">
                      <div className="pb-4 border-b border-white/20">
                        <div className="flex justify-between items-center mb-2"><span className="font-semibold text-[#c9b037]">{copy.operatingHoursAndLocation.label}</span></div>
                        <div className="flex justify-between items-center"><span>{copy.operatingHoursAndLocation.label2}</span><span>{copy.operatingHoursAndLocation.label3}</span></div>
                      </div>
                      <div className="pb-4 border-b border-white/20">
                        <div className="flex justify-between items-center mb-2"><span className="font-semibold text-[#c9b037]">{copy.operatingHoursAndLocation.label4}</span></div>
                        <div className="flex flex-col gap-1">
                          <Link to="/heart-wise-seniors" className="hover:text-[#c9b037] transition-colors cursor-pointer underline decoration-white/50 hover:decoration-[#c9b037]">{copy.operatingHoursAndLocation.text}</Link>
                          <span className="text-white/80 text-sm">{copy.operatingHoursAndLocation.label5}</span>
                          <div className="flex justify-between items-center mt-1"><span>{copy.operatingHoursAndLocation.label6}</span></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-white/20">
                        <span className="font-semibold">{copy.operatingHoursAndLocation.label7}</span>
                        <a href={copy.operatingHoursAndLocation.phoneLink} className="hover:text-[#c9b037] transition-colors">{copy.operatingHoursAndLocation.link}</a>
                      </div>
                    </div>
                    <div className="mt-8 p-4 bg-white/10 rounded-lg">
                      <p className="text-sm mb-3"><i className="fas fa-info-circle mr-2"></i>{copy.operatingHoursAndLocation.text2}</p>
                      <a href={copy.operatingHoursAndLocation.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#c9b037] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer">
                        <i className="fas fa-clipboard-list"></i>{copy.operatingHoursAndLocation.link2}</a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div>
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-map-marker-alt text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">{copy.operatingHoursAndLocation.subheading2}</h3>
                    <div className="space-y-6 mb-8">
                      <div className="flex items-start gap-4">
                        <i className="fas fa-building text-[#c9b037] text-xl mt-1"></i>
                        <div>
                          <div className="font-semibold text-gray-800 mb-1">{copy.operatingHoursAndLocation.text3}</div>
                          <div className="text-gray-600">{copy.operatingHoursAndLocation.text4}<br />{copy.operatingHoursAndLocation.text5}<br />{copy.operatingHoursAndLocation.text6}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <i className="fas fa-phone text-[#c9b037] text-xl mt-1"></i>
                        <div>
                          <div className="font-semibold text-gray-800 mb-1">{copy.operatingHoursAndLocation.text7}</div>
                          <a href={copy.operatingHoursAndLocation.phoneLink2} className="text-gray-600 hover:text-[#c9b037]">{copy.operatingHoursAndLocation.link3}</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <i className="fas fa-envelope text-[#c9b037] text-xl mt-1"></i>
                        <div>
                          <div className="font-semibold text-gray-800 mb-1">{copy.operatingHoursAndLocation.text8}</div>
                          <a href={copy.operatingHoursAndLocation.emailLink} className="text-gray-600 hover:text-[#c9b037]">{copy.operatingHoursAndLocation.link4}</a>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
                      <iframe src={copy.operatingHoursAndLocation.embedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={copy.operatingHoursAndLocation.title}></iframe>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT STORIES */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">{copy.impactStories.heading}</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.impactStories.text}</p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8">
                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <img src={copy.impactStories.image} alt={copy.impactStories.imageAlt} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-[#c9b037] mb-2"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                      <p className="text-gray-600 italic leading-relaxed mb-4">{copy.impactStories.text2}</p>
                      <div className="font-semibold text-gray-800">{copy.impactStories.text3}</div>
                      <div className="text-sm text-gray-500">{copy.impactStories.text4}</div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <img src={copy.impactStories.image2} alt={copy.impactStories.imageAlt2} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-[#c9b037] mb-2"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                      <p className="text-gray-600 italic leading-relaxed mb-4">{copy.impactStories.text5}</p>
                      <div className="font-semibold text-gray-800">{copy.impactStories.text6}</div>
                      <div className="text-sm text-gray-500">{copy.impactStories.text7}</div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <img src={copy.impactStories.image3} alt={copy.impactStories.imageAlt3} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-[#c9b037] mb-2"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                      <p className="text-gray-600 italic leading-relaxed mb-4">{copy.impactStories.text8}</p>
                      <div className="font-semibold text-gray-800">{copy.impactStories.text9}</div>
                      <div className="text-sm text-gray-500">{copy.impactStories.text10}</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="py-20 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6">{copy.statistics.heading}</h2>
                  <p className="text-lg text-white/90 max-w-3xl mx-auto">{copy.statistics.text}</p>
                </div>
              </ScrollReveal>
              <div className="grid md:grid-cols-4 gap-8">
                <ScrollReveal><div className="text-center"><div className="text-5xl font-bold text-[#c9b037] mb-3">{copy.statistics.text2}</div><div className="text-lg">{copy.statistics.text3}</div></div></ScrollReveal>
                <ScrollReveal><div className="text-center"><div className="text-5xl font-bold text-[#c9b037] mb-3">{copy.statistics.text4}</div><div className="text-lg">{copy.statistics.text5}</div></div></ScrollReveal>
                <ScrollReveal><div className="text-center"><div className="text-5xl font-bold text-[#c9b037] mb-3">{copy.statistics.text6}</div><div className="text-lg">{copy.statistics.text7}</div></div></ScrollReveal>
                <ScrollReveal><div className="text-center"><div className="text-5xl font-bold text-[#c9b037] mb-3">{copy.statistics.text8}</div><div className="text-lg">{copy.statistics.text9}</div></div></ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO HELP */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">{copy.howToHelp.heading}</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.howToHelp.text}</p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8">
                <ScrollReveal>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                    <div className="w-20 h-20 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto"><i className="fas fa-hand-holding-heart text-[#c9b037] text-4xl"></i></div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{copy.howToHelp.subheading}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{copy.howToHelp.text2}</p>
                    <a href="/contact" className="inline-block bg-[#c9b037] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer">{copy.howToHelp.link}</a>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                    <div className="w-20 h-20 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto"><i className="fas fa-dollar-sign text-[#c9b037] text-4xl"></i></div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{copy.howToHelp.subheading2}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{copy.howToHelp.text3}</p>
                    <a href="/donate" className="inline-block bg-[#c9b037] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer">{copy.howToHelp.link2}</a>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                    <div className="w-20 h-20 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto"><i className="fas fa-users text-[#c9b037] text-4xl"></i></div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{copy.howToHelp.subheading3}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{copy.howToHelp.text4}</p>
                    <a href="/contact" className="inline-block bg-[#c9b037] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer">{copy.howToHelp.link3}</a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-20 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{copy.callToAction.heading}</h2>
                <p className="text-xl mb-10 leading-relaxed">{copy.callToAction.text}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={copy.callToAction.phoneLink} className="inline-block bg-[#c9b037] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer shadow-2xl"><i className="fas fa-phone mr-2"></i>{copy.callToAction.link}</a>
                  <a href="/contact" className="inline-block bg-white text-[#3c1053] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer shadow-2xl"><i className="fas fa-envelope mr-2"></i>{copy.callToAction.link2}</a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <DonationCTA />
      <Footer />
    </div>
  );
}
