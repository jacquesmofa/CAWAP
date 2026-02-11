import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useMedia } from '../../context/MediaContext';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Breadcrumbs from '../../components/feature/Breadcrumbs';
import MasonryGallery from '../../components/feature/MasonryGallery';
import { useTranslation } from '../../hooks/useTranslation';

export default function GalleryPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { assets } = useMedia();

  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');

  // Determine current level
  const currentLevel = subcategory ? 'media' : category ? 'subcategories' : 'categories';

  // Get available categories
  const availableCategories = assets?.galleryDeep ? Object.keys(assets.galleryDeep) : [];

  // Get subcategories for current category
  const availableSubcategories = category && assets?.galleryDeep?.[category]
    ? Object.keys(assets.galleryDeep[category].subcategories)
    : [];

  // Get media for current subcategory
  const currentSubcategory = category && subcategory && assets?.galleryDeep?.[category]?.subcategories?.[subcategory];
  const mediaItems = currentSubcategory ? [...currentSubcategory.photos, ...currentSubcategory.videos] : [];

  // Navigation handlers
  const handleCategoryClick = (cat: string) => {
    navigate(`/gallery?category=${cat}`);
  };

  const handleSubcategoryClick = (subcat: string) => {
    navigate(`/gallery?category=${category}&subcategory=${subcat}`);
  };

  const handleBackToCategories = () => {
    navigate('/gallery');
  };

  const handleBackToSubcategories = () => {
    navigate(`/gallery?category=${category}`);
  };

  // Loading state
  if (!assets) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <i className="ri-loader-4-line text-5xl text-teal-600 animate-spin"></i>
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl text-teal-50">
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

      {/* Main Content - EXCLUSIVE LEVELS */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          {/* LEVEL 1: CATEGORIES (The Street) */}
          {currentLevel === 'categories' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Categories</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Select a category to view albums and media
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {availableCategories.map((cat) => {
                  const categoryData = assets.galleryDeep![cat];
                  
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryClick(cat)}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden text-left"
                    >
                      <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-8 text-white">
                        <i className={`${categoryData.icon} text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300`}></i>
                        <h3 className="text-2xl font-bold mb-2">{categoryData.name}</h3>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">View albums and media from this category</p>
                        <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          <span>View Albums</span>
                          <i className="ri-arrow-right-line ml-2"></i>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* LEVEL 2: SUBCATEGORIES (The House) */}
          {currentLevel === 'subcategories' && (
            <div>
              {/* Back Button */}
              <button
                onClick={handleBackToCategories}
                className="mb-8 flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
              >
                <i className="ri-arrow-left-line mr-2 text-xl"></i>
                <span>Back to All Categories</span>
              </button>

              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl mb-4">
                  <i className={`${assets.galleryDeep![category!].icon} text-4xl text-white`}></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {assets.galleryDeep![category!].name}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Select an album to view photos and videos
                </p>
              </div>

              {/* Subcategory Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {availableSubcategories.map((subcat) => {
                  const subcatData = assets.galleryDeep![category!].subcategories[subcat];
                  const itemCount = subcatData.photos.length + subcatData.videos.length;

                  return (
                    <button
                      key={subcat}
                      onClick={() => handleSubcategoryClick(subcat)}
                      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-left"
                    >
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 border-b border-gray-300">
                        <i className="ri-folder-image-line text-4xl text-teal-600 mb-3 block group-hover:scale-110 transition-transform duration-300"></i>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{subcatData.name}</h3>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">View media from this album</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{itemCount} items</span>
                          <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                            <span>View Media</span>
                            <i className="ri-arrow-right-line ml-2"></i>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* LEVEL 3: MEDIA GRID (The Room) */}
          {currentLevel === 'media' && (
            <div>
              {/* Back Button */}
              <button
                onClick={handleBackToSubcategories}
                className="mb-8 flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
              >
                <i className="ri-arrow-left-line mr-2 text-xl"></i>
                <span>Back to Albums</span>
              </button>

              {/* Album Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentSubcategory?.name || subcategory}
                </h2>
                <p className="text-lg text-gray-600">
                  View all media from this album
                </p>
                <p className="text-sm text-gray-500 mt-2">{mediaItems.length} items</p>
              </div>

              {/* Media Grid */}
              {mediaItems.length > 0 ? (
                <MasonryGallery items={mediaItems} />
              ) : (
                <div className="text-center py-16">
                  <i className="ri-image-line text-6xl text-gray-300 mb-4"></i>
                  <p className="text-xl text-gray-500">No media available in this album yet</p>
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
