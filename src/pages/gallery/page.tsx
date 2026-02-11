import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useMedia } from '../../context/MediaContext';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumbs from '../../components/feature/Breadcrumbs';
import MasonryGallery from '../../components/feature/MasonryGallery';

export default function GalleryPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { assets } = useMedia();

  const category = searchParams.get('category');

  // Get current category data
  const currentCategory = category && assets?.gallery?.[category];
  
  // State for verified media (only images that actually exist)
  const [verifiedMedia, setVerifiedMedia] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  // Get hero image from numbered hero folder
  const heroImage = assets?.hero?.[0] || '/media/hero/1.png';

  // Check which images actually exist on the server
  useEffect(() => {
    if (!currentCategory) {
      setVerifiedMedia([]);
      return;
    }

    const checkMediaExists = async () => {
      setIsChecking(true);
      const mediaToCheck = currentCategory.allMedia;
      const existingMedia: string[] = [];

      // Check each media URL to see if it exists
      for (const url of mediaToCheck) {
        try {
          const response = await fetch(url, { method: 'HEAD' });
          if (response.ok) {
            existingMedia.push(url);
          }
        } catch (error) {
          // Image doesn't exist, skip it
          console.log(`Media not found: ${url}`);
        }
      }

      setVerifiedMedia(existingMedia);
      setIsChecking(false);
    };

    checkMediaExists();
  }, [currentCategory]);

  // Navigation handlers
  const handleCategoryClick = (cat: string) => {
    navigate(`/gallery?category=${cat}`);
  };

  const handleBackToGallery = () => {
    navigate('/gallery');
  };

  // Loading state
  if (!assets) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <i className="ri-loader-4-line text-5xl text-[#3c1053] animate-spin"></i>
            <p className="mt-4 text-lg text-gray-600">Loading gallery...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Using CAWAP Purple and Hero Folder Images */}
      <section 
        className="relative h-[50vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#3c1053]/80 via-[#3c1053]/70 to-[#3c1053]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl text-white/90">
              Explore our journey through photos and videos showcasing our programs, events, and community impact
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          {/* LEVEL 1: CATEGORY FOLDERS (Like Phone Gallery) */}
          {!category && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Our Gallery</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Select a category to view all photos and videos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(assets.gallery).map(([categoryKey, categoryData]) => {
                  // Get preview images (first 4 items)
                  const previewItems = categoryData.allMedia.slice(0, 4);
                  const totalCount = categoryData.count;

                  return (
                    <button
                      key={categoryKey}
                      onClick={() => handleCategoryClick(categoryKey)}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden text-left"
                    >
                      {/* Preview Grid */}
                      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        {previewItems.length > 0 ? (
                          <div className="grid grid-cols-2 gap-1 h-full p-2">
                            {previewItems.map((url, idx) => {
                              const isVideo = url.endsWith('.mp4') || url.endsWith('.webm');
                              return (
                                <div key={idx} className="relative overflow-hidden rounded-lg bg-gray-300">
                                  {isVideo ? (
                                    <video
                                      src={url}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                      muted
                                      onError={(e) => {
                                        // Hide broken videos
                                        e.currentTarget.style.display = 'none';
                                      }}
                                    />
                                  ) : (
                                    <img
                                      src={url}
                                      alt=""
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                      loading="lazy"
                                      onError={(e) => {
                                        // Hide broken images
                                        e.currentTarget.style.display = 'none';
                                      }}
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <i className={`${categoryData.icon} text-6xl text-gray-400`}></i>
                          </div>
                        )}
                        
                        {/* Overlay with count */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-4">
                          <div className="flex items-center text-white">
                            <i className="ri-image-line mr-2"></i>
                            <span className="font-semibold">{totalCount} items</span>
                          </div>
                          <i className={`${categoryData.icon} text-3xl text-white opacity-80`}></i>
                        </div>
                      </div>

                      {/* Category Info */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#3c1053] transition-colors duration-300">
                          {categoryData.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{categoryData.description}</p>
                        <div className="flex items-center text-[#3c1053] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          <span>View Gallery</span>
                          <i className="ri-arrow-right-line ml-2"></i>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* LEVEL 2: MEDIA DISPLAY (Inside the Folder) */}
          {category && currentCategory && (
            <div>
              {/* Back Button */}
              <button
                onClick={handleBackToGallery}
                className="mb-8 flex items-center text-[#3c1053] hover:text-[#5a1a7a] font-semibold transition-colors duration-200"
              >
                <i className="ri-arrow-left-line mr-2 text-xl"></i>
                <span>Back to Gallery</span>
              </button>

              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-2xl mb-4">
                  <i className={`${currentCategory.icon} text-4xl text-white`}></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentCategory.name}
                </h2>
                <p className="text-lg text-gray-600">{currentCategory.description}</p>
                {isChecking ? (
                  <p className="text-sm text-gray-500 mt-2">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Checking for media...
                  </p>
                ) : (
                  <p className="text-sm text-gray-500 mt-2">{verifiedMedia.length} items found</p>
                )}
              </div>

              {/* Media Grid */}
              {isChecking ? (
                <div className="text-center py-16">
                  <i className="ri-loader-4-line text-6xl text-[#3c1053] animate-spin mb-4"></i>
                  <p className="text-xl text-gray-600">Loading media...</p>
                </div>
              ) : verifiedMedia.length > 0 ? (
                <MasonryGallery items={verifiedMedia} />
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
                  <i className="ri-image-line text-6xl text-gray-300 mb-4"></i>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No Media Yet</h3>
                  <p className="text-lg text-gray-500 mb-4">This album is ready for content</p>
                  <div className="max-w-md mx-auto text-left bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-sm font-semibold text-gray-700 mb-2">📂 To add media to this category:</p>
                    <ol className="text-sm text-gray-600 space-y-2">
                      <li>1. Log in to your cPanel</li>
                      <li>2. Navigate to: <code className="bg-gray-100 px-2 py-1 rounded text-xs">/public_html/media/{currentCategory.path}</code></li>
                      <li>3. Upload files named: <code className="bg-gray-100 px-2 py-1 rounded text-xs">1.png, 2.jpg, 3.mp4</code>, etc.</li>
                      <li>4. Refresh this page to see your media!</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}
