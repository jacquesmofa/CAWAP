import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import MasonryGallery from '../../components/feature/MasonryGallery';
import Lightbox from '../../components/feature/Lightbox';
import { useMedia } from '../../context/MediaContext';

export default function GalleryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const { assets } = useMedia();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  const handlePhotoClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleCategoryClick = (categoryKey: string) => {
    setSearchParams({ category: categoryKey });
  };

  const handleBackToGallery = () => {
    setSearchParams({});
  };

  // If a category is selected, show its media
  if (selectedCategory && assets?.gallery?.[selectedCategory]) {
    const category = assets.gallery[selectedCategory];
    const allMedia = category.allMedia || [];

    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3c1053]/10 via-purple-500/5 to-pink-500/10"></div>
            <div className="container mx-auto px-6 relative z-10">
              <button
                onClick={handleBackToGallery}
                className="mb-8 flex items-center text-[#3c1053] hover:text-purple-700 transition-colors group"
              >
                <i className="ri-arrow-left-line text-2xl mr-2 group-hover:-translate-x-1 transition-transform"></i>
                <span className="font-semibold">Back to Gallery</span>
              </button>

              <div className="max-w-4xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3c1053] to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <i className={`${category.icon} text-3xl text-white`}></i>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-2">
                      {category.name}
                    </h1>
                    <p className="text-xl text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 text-lg">
                  <i className="ri-folder-image-line mr-2"></i>
                  <span className="font-semibold">{allMedia.length} items</span>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="pb-20">
            <div className="container mx-auto px-6">
              <MasonryGallery
                photos={category.photos || []}
                videos={category.videos || []}
                onPhotoClick={handlePhotoClick}
              />
            </div>
          </section>

          {/* Lightbox */}
          {lightboxOpen && (
            <Lightbox
              images={category.photos || []}
              currentIndex={lightboxIndex}
              onClose={() => setLightboxOpen(false)}
              onNavigate={setLightboxIndex}
            />
          )}
        </main>
        <Footer />
      </>
    );
  }

  // Main gallery view - show all categories
  const categories = assets?.gallery || {};

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3c1053]/10 via-purple-500/5 to-pink-500/10"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#3c1053] to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <i className="ri-gallery-line text-4xl text-white"></i>
                </div>
              </div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6">
                Our Gallery
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed">
                Explore our journey through photos and videos showcasing our programs, events, and community impact
              </p>
            </div>
          </div>
        </section>

        {/* Browse Section */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Browse Our Gallery
              </h2>
              <p className="text-xl text-gray-600">
                Select a category to view all photos and videos
              </p>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(categories).map(([key, category]) => {
                const itemCount = category.allMedia?.length || 0;
                const previewImages = (category.photos || []).slice(0, 4);

                return (
                  <div
                    key={key}
                    onClick={() => handleCategoryClick(key)}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                      {/* Preview Grid */}
                      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        {previewImages.length > 0 ? (
                          <div className="grid grid-cols-2 gap-1 h-full">
                            {previewImages.map((imgUrl, idx) => (
                              <div key={idx} className="relative overflow-hidden">
                                <img
                                  src={imgUrl}
                                  alt={`${category.name} preview ${idx + 1}`}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <i className={`${category.icon} text-6xl text-gray-300`}></i>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Category Info */}
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#3c1053] to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                            <i className={`${category.icon} text-2xl text-white`}></i>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#3c1053] transition-colors">
                              {category.name}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-[#3c1053] flex items-center">
                            <i className="ri-folder-image-line mr-2"></i>
                            {itemCount} items
                          </span>
                          <span className="text-[#3c1053] font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                            View Gallery
                            <i className="ri-arrow-right-line ml-2"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
