import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { useMedia } from '@/context/MediaContext';
import Breadcrumbs from '@/components/feature/Breadcrumbs';
import MasonryGallery from '@/components/feature/MasonryGallery';
import Lightbox from '@/components/feature/Lightbox';

const GalleryPage: React.FC = () => {
  const { assets, loading } = useMedia();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Read URL parameters on mount
  useEffect(() => {
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');
    
    if (category) setSelectedCategory(category);
    if (subcategory) setSelectedSubcategory(subcategory);
  }, [searchParams]);

  const handleCategoryClick = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
    setSelectedSubcategory(null);
    setSearchParams({ category: categoryKey });
  };

  const handleSubcategoryClick = (subcategoryKey: string) => {
    setSelectedSubcategory(subcategoryKey);
    if (selectedCategory) {
      setSearchParams({ category: selectedCategory, subcategory: subcategoryKey });
    }
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSearchParams({});
  };

  const handleBackToSubcategories = () => {
    setSelectedSubcategory(null);
    if (selectedCategory) {
      setSearchParams({ category: selectedCategory });
    }
  };

  // Get breadcrumb items
  const getBreadcrumbs = () => {
    const items = [{ label: 'Home', path: '/' }, { label: 'Gallery', path: '/gallery' }];
    
    if (selectedCategory && assets?.galleryDeep?.[selectedCategory]) {
      items.push({
        label: assets.galleryDeep[selectedCategory].name,
        path: selectedSubcategory ? `/gallery?category=${selectedCategory}` : undefined
      });
    }
    
    if (selectedSubcategory && selectedCategory && assets?.galleryDeep?.[selectedCategory]?.subcategories?.[selectedSubcategory]) {
      items.push({
        label: assets.galleryDeep[selectedCategory].subcategories[selectedSubcategory].name
      });
    }
    
    return items;
  };

  // Get current photos and videos
  const getCurrentMedia = () => {
    if (!selectedCategory || !selectedSubcategory || !assets?.galleryDeep) {
      return { photos: [], videos: [] };
    }

    const subcategory = assets.galleryDeep[selectedCategory]?.subcategories?.[selectedSubcategory];
    return {
      photos: subcategory?.photos || [],
      videos: subcategory?.videos || []
    };
  };

  const currentMedia = getCurrentMedia();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="ri-loader-4-line text-5xl text-teal-600 animate-spin"></i>
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Photo & Video Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Explore our community moments, events, and programs through photos and videos
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumbs */}
          <Breadcrumbs items={getBreadcrumbs()} />

          {/* Category View */}
          {!selectedCategory && assets?.galleryDeep && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(assets.galleryDeep).map(([key, category]) => {
                const subcategoryCount = Object.keys(category.subcategories || {}).length;
                const totalPhotos = Object.values(category.subcategories || {}).reduce(
                  (sum, sub) => sum + (sub.photos?.length || 0),
                  0
                );

                return (
                  <div
                    key={key}
                    onClick={() => handleCategoryClick(key)}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-100 to-teal-200">
                      {(() => {
                        const firstSub = Object.values(category.subcategories || {})[0];
                        const firstPhoto = firstSub?.photos?.[0];
                        return firstPhoto ? (
                          <img
                            src={firstPhoto}
                            alt={category.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <i className={`${category.icon} text-6xl text-teal-400`}></i>
                          </div>
                        );
                      })()}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                        {category.name}
                      </h3>
                      <div className="flex items-center text-gray-600 space-x-4">
                        <span className="flex items-center">
                          <i className="ri-folder-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                          {subcategoryCount} {subcategoryCount === 1 ? 'Album' : 'Albums'}
                        </span>
                        <span className="flex items-center">
                          <i className="ri-image-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                          {totalPhotos} {totalPhotos === 1 ? 'Photo' : 'Photos'}
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-gradient-to-r from-teal-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Subcategory View */}
          {selectedCategory && !selectedSubcategory && assets?.galleryDeep?.[selectedCategory] && (
            <>
              <button
                onClick={handleBackToCategories}
                className="mb-8 flex items-center text-teal-600 hover:text-teal-700 transition-colors font-medium cursor-pointer"
              >
                <i className="ri-arrow-left-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                Back to All Categories
              </button>

              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center">
                  <i className={`${assets.galleryDeep[selectedCategory].icon} mr-4 text-teal-600`}></i>
                  {assets.galleryDeep[selectedCategory].name}
                </h2>
                <p className="text-gray-600 text-lg">Select an album to view photos and videos</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Object.entries(assets.galleryDeep[selectedCategory].subcategories || {}).map(
                  ([key, subcategory]) => {
                    const photoCount = subcategory.photos?.length || 0;
                    const videoCount = subcategory.videos?.length || 0;
                    const firstPhoto = subcategory.photos?.[0];

                    return (
                      <div
                        key={key}
                        onClick={() => handleSubcategoryClick(key)}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden group"
                      >
                        {firstPhoto ? (
                          <div className="h-48 w-full overflow-hidden bg-gray-200">
                            <img
                              src={firstPhoto}
                              alt={subcategory.name}
                              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          <div className="h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <i className="ri-image-line text-6xl text-gray-400"></i>
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                            {subcategory.name}
                          </h3>
                          <div className="flex items-center text-sm text-gray-600 space-x-4">
                            <span className="flex items-center">
                              <i className="ri-image-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                              {photoCount} {photoCount === 1 ? 'Photo' : 'Photos'}
                            </span>
                            {videoCount > 0 && (
                              <span className="flex items-center">
                                <i className="ri-video-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                                {videoCount} {videoCount === 1 ? 'Video' : 'Videos'}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </>
          )}

          {/* Media View (Photos & Videos) */}
          {selectedCategory && selectedSubcategory && (
            <>
              <button
                onClick={handleBackToSubcategories}
                className="mb-8 flex items-center text-teal-600 hover:text-teal-700 transition-colors font-medium"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                Back to Albums
              </button>

              <MasonryGallery
                photos={currentMedia.photos}
                videos={currentMedia.videos}
                onPhotoClick={(index) => setLightboxIndex(index)}
              />
            </>
          )}

          {/* Empty State */}
          {!assets?.galleryDeep && !loading && (
            <div className="text-center py-20">
              <i className="ri-gallery-line text-8xl text-gray-300 mb-6"></i>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Gallery Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We're currently organizing our photo and video collection. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && currentMedia.photos.length > 0 && (
        <Lightbox
          photos={currentMedia.photos}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
