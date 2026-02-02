import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';
import { useCloudinaryUpload } from '../../hooks/useCloudinaryUpload';
import { Link } from 'react-router-dom';

// ========================================
// 🎬 MEDIA TYPE DEFINITION
// ========================================
type MediaType = 'image' | 'video' | 'youtube' | 'vimeo';

interface GalleryMedia {
  url: string;
  category: string;
  title: string;
  type: MediaType;
  thumbnail?: string;
}

const FoodBankPage = () => {
  // ========================================
  // 🔐 ADMIN UPLOAD FUNCTIONALITY
  // ========================================
  const [showUploadInterface, setShowUploadInterface] = useState(false);
  const { uploadToCloudinary, uploading, uploadProgress, uploadedUrl, error: uploadError } = useCloudinaryUpload();

  // ========================================
  // 🎬 GALLERY STATE MANAGEMENT
  // ========================================
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllMedia, setShowAllMedia] = useState(false);

  // ========================================
  // 🎬 FOOD BANK GALLERY MEDIA - IMGUR LINKS
  // ========================================
  // 📝 HOW TO ADD YOUR IMGUR MEDIA:
  // --------------------------------
  // 1. Upload your image/video to Imgur (https://imgur.com/upload)
  // 2. Right-click on the uploaded media and select "Copy image address" or "Copy video address"
  // 3. Add it to the array below using this format:
  //
  // FOR IMAGES:
  // {
  //   url: 'https://i.imgur.com/YOUR_IMAGE_ID.jpg',  // Direct Imgur link
  //   category: 'food-bank',
  //   title: 'Descriptive Title Here',
  //   type: 'image'
  // },
  //
  // FOR VIDEOS (MP4):
  // {
  //   url: 'https://i.imgur.com/YOUR_VIDEO_ID.mp4',  // Direct Imgur video link
  //   category: 'food-bank',
  //   title: 'Video Title Here',
  //   type: 'video',
  //   thumbnail: 'https://i.imgur.com/THUMBNAIL_ID.jpg'  // Optional: custom thumbnail
  // },
  //
  // FOR YOUTUBE VIDEOS:
  // {
  //   url: 'dQw4w9WgXcQ',  // Just the video ID from youtube.com/watch?v=VIDEO_ID
  //   category: 'food-bank',
  //   title: 'YouTube Video Title',
  //   type: 'youtube'
  // },
  //
  // EXAMPLE WITH REAL IMGUR LINKS:
  // {
  //   url: 'https://i.imgur.com/yOjIsCg.mp4',
  //   category: 'food-bank',
  //   title: 'Food Bank Behind the Scenes',
  //   type: 'video'
  // },

  const galleryMedia: GalleryMedia[] = [
    // ========================================
    // 📸 ADD YOUR IMGUR LINKS HERE
    // ========================================
    // Replace the placeholder images below with your actual Imgur links
    // Keep the same format: { url: '...', category: 'food-bank', title: '...', type: '...' }
    
    {
      url: 'https://readdy.ai/api/search-image?query=welcoming%20community%20food%20bank%20volunteers%20organizing%20fresh%20produce%20and%20groceries%20on%20shelves%2C%20diverse%20team%20working%20together%20in%20bright%20organized%20space%2C%20professional%20photography%20showing%20community%20service%20and%20food%20security%20support%2C%20warm%20lighting%20with%20abundant%20fresh%20vegetables%20and%20nutritious%20food%20items&width=600&height=400&seq=food-bank-gallery-1&orientation=landscape',
      category: 'food-bank',
      title: 'Food Bank Organization',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=volunteers%20distributing%20food%20packages%20to%20grateful%20families%20at%20community%20food%20bank%2C%20heartwarming%20scene%20of%20diverse%20people%20helping%20neighbors%2C%20professional%20photography%20capturing%20compassion%20and%20community%20care%2C%20bright%20welcoming%20atmosphere%20with%20families%20receiving%20nutritious%20food%20assistance&width=600&height=400&seq=food-bank-gallery-2&orientation=landscape',
      category: 'food-bank',
      title: 'Food Distribution Day',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=community%20volunteers%20sorting%20and%20packing%20fresh%20vegetables%20and%20canned%20goods%20at%20food%20bank%2C%20organized%20teamwork%20in%20modern%20facility%2C%20professional%20photography%20showing%20efficient%20food%20pantry%20operations%2C%20bright%20clean%20space%20with%20diverse%20volunteers%20working%20together&width=600&height=400&seq=food-bank-gallery-3&orientation=landscape',
      category: 'food-bank',
      title: 'Food Sorting & Packing',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=community%20food%20drive%20collection%20with%20donated%20groceries%20and%20fresh%20produce%2C%20volunteers%20receiving%20food%20donations%20from%20generous%20community%20members%2C%20professional%20photography%20showing%20charitable%20giving%20and%20community%20support%2C%20bright%20welcoming%20space%20with%20abundant%20food%20donations&width=600&height=400&seq=food-bank-gallery-4&orientation=landscape',
      category: 'food-bank',
      title: 'Community Food Drive',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=food%20bank%20warehouse%20with%20shelves%20stocked%20full%20of%20nutritious%20groceries%20and%20canned%20goods%2C%20organized%20inventory%20system%20for%20community%20food%20assistance%2C%20professional%20photography%20showing%20food%20security%20infrastructure%2C%20bright%20warehouse%20with%20volunteers%20managing%20food%20supplies&width=600&height=400&seq=food-bank-gallery-5&orientation=landscape',
      category: 'food-bank',
      title: 'Food Bank Warehouse',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=volunteers%20loading%20food%20boxes%20into%20delivery%20van%20for%20home%20delivery%20service%2C%20community%20food%20bank%20outreach%20program%20bringing%20groceries%20to%20seniors%2C%20professional%20photography%20showing%20mobile%20food%20assistance%2C%20bright%20outdoor%20scene%20with%20volunteers%20carrying%20food%20boxes&width=600&height=400&seq=food-bank-gallery-6&orientation=landscape',
      category: 'food-bank',
      title: 'Food Delivery Service',
      type: 'image'
    },
    {
      url: 'https://i.imgur.com/yOjIsCg.mp4',
      category: 'food-bank',
      title: 'Food Bank Behind the Scenes',
      type: 'video'
    },
  ];

  // ========================================
  // 🎬 GALLERY DISPLAY LOGIC
  // ========================================
  // Filter media by category (all food-bank items)
  const filteredMedia = galleryMedia;
  
  // Show first 6 items initially, or all if expanded
  const INITIAL_DISPLAY_COUNT = 6;
  const displayMedia = showAllMedia ? filteredMedia : filteredMedia.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreMedia = filteredMedia.length > INITIAL_DISPLAY_COUNT;

  // ========================================
  // 🎬 VIDEO HELPER FUNCTIONS
  // ========================================
  // Generate thumbnail for videos
  const getVideoThumbnail = (media: GalleryMedia): string => {
    // If custom thumbnail is provided, use it
    if (media.thumbnail) return media.thumbnail;
    
    // For YouTube videos, use YouTube's thumbnail service
    if (media.type === 'youtube') {
      return `https://img.youtube.com/vi/${media.url}/maxresdefault.jpg`;
    }
    
    // For Vimeo videos, use placeholder (Vimeo requires API for thumbnails)
    if (media.type === 'vimeo') {
      return 'https://readdy.ai/api/search-image?query=video%20thumbnail%20placeholder%20with%20play%20button&width=600&height=400&seq=vimeo-thumb&orientation=landscape';
    }
    
    // For direct video files (MP4, WebM), use placeholder
    return 'https://readdy.ai/api/search-image?query=video%20thumbnail%20placeholder%20with%20play%20button&width=600&height=400&seq=video-thumb&orientation=landscape';
  };

  // ========================================
  // 🎬 LIGHTBOX CONTROLS
  // ========================================
  // Open lightbox viewer
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close lightbox viewer
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Navigate to next media item
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredMedia.length);
  };

  // Navigate to previous media item
  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredMedia.length) % filteredMedia.length);
  };

  // Keyboard navigation for lightbox
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'Escape') closeLightbox();
  };

  // ========================================
  // 📸 ADMIN UPLOAD HANDLER
  // ========================================
  const handleMediaUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const cloudinaryUrl = await uploadToCloudinary(file, 'cawap/food-bank');
    
    if (cloudinaryUrl) {
      alert('✅ Media uploaded successfully! Refresh the page to see it in the gallery.');
      setShowUploadInterface(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=welcoming%20community%20food%20bank%20interior%20with%20organized%20shelves%20full%20of%20fresh%20produce%20vegetables%20fruits%20and%20nutritious%20groceries%2C%20bright%20clean%20modern%20space%20with%20volunteers%20helping%20diverse%20families%2C%20professional%20photography%20showing%20compassion%20dignity%20and%20hope%2C%20warm%20natural%20lighting%20creating%20caring%20supportive%20atmosphere%2C%20high%20quality%20image%20representing%20food%20security%20and%20community%20support%20programs&width=1920&height=600&seq=food-bank-hero-main&orientation=landscape')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto">
            <i className="fas fa-shopping-basket text-5xl"></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">CAWAP Food Bank</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Nourishing Our Community with Dignity, Compassion, and Hope
          </p>
          <a
            href="tel:+16475815901"
            className="inline-block bg-[#c9b037] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer shadow-2xl"
          >
            Get Food Assistance Today
          </a>
        </div>
        <button
          onClick={() => setShowUploadInterface(!showUploadInterface)}
          className="absolute top-4 right-4 text-white/60 hover:text-white text-xs transition-colors duration-300 cursor-pointer z-20"
          title="Admin: Upload Media"
        >
          <i className="ri-upload-cloud-line text-lg"></i>
        </button>
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
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission: No One Goes Hungry</h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    At the Canadian and African Women Aid Program (CAWAP), we believe that access to nutritious food is a fundamental human right. Our Food Bank serves as a lifeline for families and individuals facing food insecurity, providing not just sustenance, but dignity, hope, and a pathway to stability.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <ScrollReveal>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://readdy.ai/api/search-image?query=diverse%20volunteers%20organizing%20fresh%20vegetables%20fruits%20and%20healthy%20food%20donations%20in%20bright%20community%20food%20bank%2C%20people%20working%20together%20sorting%20nutritious%20groceries%2C%20professional%20photography%20showing%20teamwork%20compassion%20and%20community%20spirit%2C%20warm%20lighting%20creating%20welcoming%20supportive%20atmosphere&width=600&height=400&seq=food-bank-volunteers-1&orientation=landscape"
                      alt="Food Bank Volunteers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Why We Exist</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Food insecurity affects thousands of families in our community. Rising costs of living, unexpected job loss, medical emergencies, and systemic barriers can push anyone into a situation where they struggle to put food on the table.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      CAWAP Food Bank was established to bridge this gap, ensuring that every person in our community has access to fresh, nutritious food regardless of their circumstances. We serve with compassion, respect, and cultural sensitivity.
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#c9b037]">500+</div>
                        <div className="text-sm text-gray-600">Families Served Monthly</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#c9b037]">15,000+</div>
                        <div className="text-sm text-gray-600">Meals Distributed</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - NOW FIRST */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">See Our Food Bank in Action</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Watch how we serve our community with dignity and compassion every day.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto" style={{ maxWidth: '600px' }}>
                  <video
                    className="w-full h-auto"
                    controls
                    preload="metadata"
                  >
                    <source src="https://i.imgur.com/yOjIsCg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ========================================
            📸 FOOD BANK IN PICTURES - HYBRID GALLERY SECTION - NOW SECOND
            ========================================
            This section displays both images and videos from Imgur
            Features:
            - Mixed media gallery (photos + videos)
            - Lightbox viewer with navigation
            - "View Full Gallery" button
            - Load more functionality
            ======================================== */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <i className="ri-gallery-line text-[#c9b037] text-3xl"></i>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">Food Bank in Pictures</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                    See our food bank in action - from food sorting to distribution, witness the impact of community support through photos and videos
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <i className="ri-image-line"></i>
                      {galleryMedia.filter(m => m.type === 'image').length} Photos
                    </span>
                    <span className="w-px h-4 bg-gray-300"></span>
                    <span className="flex items-center gap-2">
                      <i className="ri-video-line"></i>
                      {galleryMedia.filter(m => m.type !== 'image').length} Videos
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {displayMedia.map((media, index) => (
                  <ScrollReveal key={`${media.category}-${index}`} delay={index * 0.05}>
                    <div 
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="aspect-[3/2] w-full h-full overflow-hidden">
                        <img
                          src={media.type === 'image' ? media.url : getVideoThumbnail(media)}
                          alt={media.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Video Play Button Overlay */}
                        {media.type !== 'image' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300">
                            <div className="w-20 h-20 flex items-center justify-center bg-white/90 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                              <i className="ri-play-fill text-4xl text-[#c9b037] ml-1"></i>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Info Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#c9b037]/90 via-[#c9b037]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-white font-bold text-lg mb-2">{media.title}</h3>
                          <div className="flex items-center justify-center gap-2">
                            <i className={`${media.type === 'image' ? 'ri-eye-line' : 'ri-play-circle-line'} text-white`}></i>
                            <span className="text-white/90 text-sm">
                              {media.type === 'image' ? 'View Image' : 'Watch Video'}
                            </span>
                          </div>
                          <div className="mt-2">
                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-semibold">
                              {media.type === 'image' ? '📸 Photo' : '🎬 Video'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Load More / Show Less Button */}
                {hasMoreMedia && (
                  <button
                    onClick={() => setShowAllMedia(!showAllMedia)}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c9b037] to-[#b39f2f] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
                  >
                    <i className={`${showAllMedia ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} text-xl`}></i>
                    <span>
                      {showAllMedia 
                        ? 'Show Less' 
                        : `Load More (${filteredMedia.length - displayMedia.length} more)`}
                    </span>
                  </button>
                )}

                {/* View Full Gallery Button */}
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-3 bg-white border-2 border-[#c9b037] text-[#c9b037] px-8 py-4 rounded-full font-semibold hover:bg-[#c9b037] hover:text-white transition-all duration-300 cursor-pointer shadow-lg"
                >
                  <i className="ri-gallery-line text-xl"></i>
                  <span>View Full Gallery</span>
                  <i className="ri-arrow-right-line text-xl"></i>
                </Link>
              </div>

              {/* Results Count */}
              <div className="text-center mt-8">
                <p className="text-gray-600 text-lg">
                  Showing <strong className="text-[#c9b037]">{displayMedia.length}</strong> of <strong className="text-[#c9b037]">{filteredMedia.length}</strong> items
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            🎬 LIGHTBOX VIEWER
            ========================================
            Full-screen viewer for images and videos
            Features:
            - Keyboard navigation (arrows, ESC)
            - Previous/Next buttons
            - Video playback support
            - YouTube/Vimeo embedding
            ======================================== */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
            onKeyDown={handleKeyPress}
            tabIndex={0}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6 z-50">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">{filteredMedia[currentImageIndex].title}</h3>
                  <p className="text-white/70 text-sm">
                    {currentImageIndex + 1} of {filteredMedia.length}
                  </p>
                </div>
                <button
                  onClick={closeLightbox}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer"
                  title="Close (ESC)"
                >
                  <i className="ri-close-line text-white text-2xl"></i>
                </button>
              </div>
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer z-50"
              title="Previous (←)"
            >
              <i className="ri-arrow-left-line text-white text-3xl"></i>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer z-50"
              title="Next (→)"
            >
              <i className="ri-arrow-right-line text-white text-3xl"></i>
            </button>

            {/* Media Container */}
            <div className="relative max-w-7xl max-h-[90vh] w-full px-20">
              {/* Render Image */}
              {filteredMedia[currentImageIndex].type === 'image' && (
                <img
                  src={filteredMedia[currentImageIndex].url}
                  alt={filteredMedia[currentImageIndex].title}
                  className="w-full h-full object-contain max-h-[80vh] rounded-lg"
                />
              )}

              {/* Render Direct Video (MP4, WebM) */}
              {filteredMedia[currentImageIndex].type === 'video' && (
                <video
                  src={filteredMedia[currentImageIndex].url}
                  className="w-full h-full object-contain max-h-[80vh] rounded-lg"
                  controls
                  autoPlay
                />
              )}

              {/* Render YouTube Video */}
              {filteredMedia[currentImageIndex].type === 'youtube' && (
                <iframe
                  src={`https://www.youtube.com/embed/${filteredMedia[currentImageIndex].url}?autoplay=1&rel=0`}
                  className="w-full h-full max-h-[80vh] rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ aspectRatio: '16/9' }}
                />
              )}

              {/* Render Vimeo Video */}
              {filteredMedia[currentImageIndex].type === 'vimeo' && (
                <iframe
                  src={`https://player.vimeo.com/video/${filteredMedia[currentImageIndex].url}?autoplay=1`}
                  className="w-full h-full max-h-[80vh] rounded-lg"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{ aspectRatio: '16/9' }}
                />
              )}
            </div>

            {/* Bottom Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm">
              Use arrow keys to navigate • ESC to close
            </div>
          </div>
        )}

        {/* What We Provide */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">What We Provide</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our Food Bank offers a comprehensive range of nutritious food options and support services to meet the diverse needs of our community members.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-apple-alt text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Fresh Produce</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Weekly deliveries of fresh fruits, vegetables, and seasonal produce from local farms and partners.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Organic vegetables</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Fresh fruits</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Seasonal produce</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-bread-slice text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Staple Foods</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Essential non-perishable items including grains, proteins, and pantry staples for balanced nutrition.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Rice, pasta, and grains</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Canned proteins</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Cooking oils and spices</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-utensils text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Prepared Meals</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Hot, nutritious meals prepared with care and cultural sensitivity for immediate consumption.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Daily hot meals</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Culturally diverse options</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Dietary accommodations</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-baby text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Baby & Child Nutrition</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Specialized nutrition support for infants, toddlers, and children to ensure healthy development.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Baby formula and food</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Diapers and wipes</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Children's snacks</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-book-open text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Nutrition Education</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Workshops and resources to help families make the most of their food and develop healthy habits.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Cooking classes</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Meal planning tips</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Budget-friendly recipes</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-hands-helping text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Emergency Support</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Immediate assistance for families facing urgent food crises with same-day service available.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Same-day assistance</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Crisis intervention</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Referral services</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-br from-[#3c1053]/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c9b037] text-white rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Call us at <a href="tel:+16475815901" className="text-[#c9b037] font-semibold hover:underline">+1 (647) 581-5901</a> or visit our center during operating hours.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c9b037] text-white rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Simple Registration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Complete a brief, confidential registration form. No extensive documentation required.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c9b037] text-white rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Choose Your Food</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Select items that meet your family's needs and dietary preferences with guidance from our staff.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c9b037] text-white rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Take Home</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Leave with nutritious food and information about additional support services available.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Hours & Location */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <ScrollReveal>
                  <div className="bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] p-10 rounded-2xl text-white shadow-2xl">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-clock text-3xl"></i>
                    </div>
                    <h3 className="text-3xl font-bold mb-8">Operating Hours</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-white/20">
                        <span className="font-semibold">Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/20">
                        <span className="font-semibold">Saturday</span>
                        <span>10:00 AM - 3:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/20">
                        <span className="font-semibold">Sunday</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Emergency Line</span>
                        <span>24/7 Available</span>
                      </div>
                    </div>
                    <div className="mt-8 p-4 bg-white/10 rounded-lg">
                      <p className="text-sm">
                        <i className="fas fa-info-circle mr-2"></i>
                        Special holiday hours may apply. Please call ahead to confirm.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div>
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-map-marker-alt text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Visit Us</h3>
                    <div className="space-y-6 mb-8">
                      <div className="flex items-start gap-4">
                        <i className="fas fa-building text-[#c9b037] text-xl mt-1"></i>
                        <div>
                          <div className="font-semibold text-gray-800 mb-1">Address</div>
                          <div className="text-gray-600">
                            101 West Drive, Unit 7<br />
                            Brampton, ON L6T 5E9<br />
                            Canada
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <i className="fas fa-phone text-[#c9b037] text-xl mt-1"></i>
                        <div>
                          <div className="font-semibold text-gray-800 mb-1">Phone</div>
                          <a href="tel:+16475815901" className="text-gray-600 hover:text-[#c9b037]">
                            +1 (647) 581-5901
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <i className="fas fa-envelope text-[#c9b037] text-xl mt-1"></i>
                        <div>
                          <div className="font-semibold text-gray-800 mb-1">Email</div>
                          <a href="mailto:cawap2025@gmail.com" className="text-gray-600 hover:text-[#c9b037]">
                            cawap2025@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.8234567890123!2d-79.7234567890123!3d43.7234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQzJzI0LjQiTiA3OcKwNDMnMjQuNCJX!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="CAWAP Food Bank Location"
                      ></iframe>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Stories of Hope & Transformation</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Real stories from community members whose lives have been touched by the CAWAP Food Bank.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8">
                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20smiling%20African%20Canadian%20woman%20in%20her%2030s%20with%20warm%20expression%20showing%20gratitude%20and%20hope%2C%20bright%20natural%20lighting%2C%20high%20quality%20headshot%20representing%20community%20member%20success%20story&width=200&height=200&seq=food-bank-testimonial-1&orientation=squarish"
                        alt="Sarah M."
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-[#c9b037] mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="text-gray-600 italic leading-relaxed mb-4">
                        "When I lost my job, I didn't know how I would feed my children. CAWAP Food Bank not only provided us with nutritious food but treated us with such dignity and respect. They helped me get back on my feet."
                      </p>
                      <div className="font-semibold text-gray-800">Sarah M.</div>
                      <div className="text-sm text-gray-500">Single Mother of Three</div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20elderly%20African%20Canadian%20man%20in%20his%2060s%20with%20kind%20smile%20showing%20appreciation%20and%20dignity%2C%20warm%20natural%20lighting%2C%20high%20quality%20headshot%20representing%20senior%20community%20member&width=200&height=200&seq=food-bank-testimonial-2&orientation=squarish"
                        alt="James K."
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-[#c9b037] mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="text-gray-600 italic leading-relaxed mb-4">
                        "As a senior on a fixed income, the rising cost of food was overwhelming. The volunteers here are like family. They remember my dietary needs and always have a kind word."
                      </p>
                      <div className="font-semibold text-gray-800">James K.</div>
                      <div className="text-sm text-gray-500">Retired Senior</div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20African%20Canadian%20woman%20in%20her%2020s%20with%20hopeful%20smile%20showing%20resilience%20and%20determination%2C%20bright%20natural%20lighting%2C%20high%20quality%20headshot%20representing%20newcomer%20success%20story&width=200&height=200&seq=food-bank-testimonial-3&orientation=squarish"
                        alt="Amina T."
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-[#c9b037] mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="text-gray-600 italic leading-relaxed mb-4">
                        "As a newcomer to Canada, finding culturally appropriate food was challenging. CAWAP understands our needs and provides food that feels like home. They've been a blessing to our family."
                      </p>
                      <div className="font-semibold text-gray-800">Amina T.</div>
                      <div className="text-sm text-gray-500">Newcomer Family</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6">Our Impact by the Numbers</h2>
                  <p className="text-lg text-white/90 max-w-3xl mx-auto">
                    Every number represents a family fed, a child nourished, and hope restored.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-4 gap-8">
                <ScrollReveal>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#c9b037] mb-3">500+</div>
                    <div className="text-lg">Families Served Monthly</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#c9b037] mb-3">15,000+</div>
                    <div className="text-lg">Meals Distributed</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#c9b037] mb-3">50+</div>
                    <div className="text-lg">Volunteers</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#c9b037] mb-3">100%</div>
                    <div className="text-lg">Dignity & Respect</div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* How to Help */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">How You Can Help</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Your support makes it possible for us to serve our community. Here are ways you can make a difference:
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8">
                <ScrollReveal>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                    <div className="w-20 h-20 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <i className="fas fa-hand-holding-heart text-[#c9b037] text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Donate Food</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Drop off non-perishable food items at our center. We especially need rice, pasta, canned proteins, and baby food.
                    </p>
                    <a
                      href="/contact"
                      className="inline-block bg-[#c9b037] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer"
                    >
                      Learn More
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                    <div className="w-20 h-20 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <i className="fas fa-dollar-sign text-[#c9b037] text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Make a Donation</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Financial contributions help us purchase fresh produce and maintain our operations. Every dollar counts.
                    </p>
                    <a
                      href="/donate"
                      className="inline-block bg-[#c9b037] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer"
                    >
                      Donate Now
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                    <div className="w-20 h-20 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <i className="fas fa-users text-[#c9b037] text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Volunteer</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Join our team of dedicated volunteers. Help sort food, serve clients, or assist with special events.
                    </p>
                    <a
                      href="/contact"
                      className="inline-block bg-[#c9b037] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer"
                    >
                      Get Involved
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Food Assistance?</h2>
                <p className="text-xl mb-10 leading-relaxed">
                  Don't hesitate to reach out. We're here to help you and your family with dignity, compassion, and respect. No one should go hungry.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:+16475815901"
                    className="inline-block bg-[#c9b037] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer shadow-2xl"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    Call Us Now
                  </a>
                  <a
                    href="/contact"
                    className="inline-block bg-white text-[#3c1053] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer shadow-2xl"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Contact Us
                  </a>
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
};

export default FoodBankPage;