# Media Context System - Usage Guide

## 🎯 Overview

The Media Context System provides a professional, centralized way to manage all media assets (images, videos, documents) across your CAWAP website. All media is loaded once from your cPanel `site-assets.json` file and made available globally.

---

## 📦 What's Included

### 1. **Core Context System**
- `src/context/MediaContext.tsx` - Main context provider
- `src/types/media.ts` - TypeScript interfaces for all media categories
- `src/hooks/useMediaAsset.ts` - Custom hooks for accessing media

### 2. **React Components**
- `src/components/base/MediaImage.tsx` - Smart image component with error handling
- `src/components/base/MediaVideo.tsx` - Video component with fallback support
- `src/components/base/DownloadButton.tsx` - Document download button

---

## 🚀 How to Use

### **Basic Usage - Access Media in Any Component**

```typescript
import { useMedia } from '../context/MediaContext';

function MyComponent() {
  const { assets, loading, error } = useMedia();

  if (loading) return <div>Loading media...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <img src={assets.branding.logo_main} alt="CAWAP Logo" />
      <img src={assets.hero.home} alt="Home Hero" />
    </div>
  );
}
```

### **Using MediaImage Component (Recommended)**

```typescript
import MediaImage from '../components/base/MediaImage';

function Header() {
  return (
    <MediaImage 
      path="branding.logo_main"
      alt="CAWAP Logo"
      className="h-12 w-auto"
      loading="eager"
    />
  );
}
```

### **Using MediaVideo Component**

```typescript
import MediaVideo from '../components/base/MediaVideo';

function HeroSection() {
  return (
    <MediaVideo
      path="videos.hero_background"
      className="w-full h-screen object-cover"
      autoPlay
      loop
      muted
    />
  );
}
```

### **Download Documents**

```typescript
import DownloadButton from '../components/base/DownloadButton';

function DocumentsSection() {
  return (
    <DownloadButton
      path="documents.annual_report_2024"
      filename="CAWAP_Annual_Report_2024.pdf"
      className="bg-teal-600 text-white px-6 py-3 rounded-lg"
    >
      Download Annual Report
    </DownloadButton>
  );
}
```

### **Access Nested Assets with useMediaAsset Hook**

```typescript
import { useMediaAsset } from '../hooks/useMediaAsset';

function ProgramCard() {
  const foodBankImage = useMediaAsset('programs.food_bank');
  const fallbackImage = useMediaAsset('programs.food_bank', '/fallback.jpg');

  return <img src={foodBankImage} alt="Food Bank Program" />;
}
```

---

## 📂 Available Asset Categories

### **Branding**
- `assets.branding.logo_main` - Main logo
- `assets.branding.logo_white` - White version logo
- `assets.branding.favicon` - Site favicon
- `assets.branding.social_card` - Social media card

### **Hero Images**
- `assets.hero.home`
- `assets.hero.about`
- `assets.hero.programs`
- `assets.hero.contact`
- `assets.hero.donate`
- `assets.hero.gallery`

### **Programs**
- `assets.programs.food_bank`
- `assets.programs.youth_leadership`
- `assets.programs.women_empowerment`
- `assets.programs.mental_health`
- `assets.programs.financial_literacy`
- `assets.programs.newcomers_settlement`
- `assets.programs.capital_g_girls`
- `assets.programs.heart_wise_seniors`
- `assets.programs.new_breed_women`
- `assets.programs.javascript_program`

### **Events**
- `assets.events.christmas_2024`
- `assets.events.summer_camp`
- `assets.events.sankofa_awards`
- `assets.events.cultural_events`
- `assets.events.black_business_seminar`

### **Gallery (Arrays)**
- `assets.gallery.food_bank` - Array of image URLs
- `assets.gallery.events` - Array of image URLs
- `assets.gallery.programs` - Array of image URLs

### **Documents**
- `assets.documents.annual_report_2024`
- `assets.documents.program_guide`
- `assets.documents.donation_form`
- `assets.documents.volunteer_application`

### **Videos**
- `assets.videos.hero_background`
- `assets.videos.about_intro`
- `assets.videos.testimonials`

### **Flyers**
- `assets.flyers.black_business_seminar`
- `assets.flyers.summer_camp_2025`
- `assets.flyers.christmas_event`

### **Trainings**
- `assets.trainings.mental_health`
- `assets.trainings.financial_literacy`
- `assets.trainings.leadership`

---

## 🔄 Refetching Assets

If you update `site-assets.json` and need to reload without refreshing the page:

```typescript
const { refetch } = useMedia();

// Call this when you need to reload assets
await refetch();
```

---

## ⚡ Performance Features

1. **Single Load** - Assets loaded once on app startup
2. **Global Access** - Available to all components without prop drilling
3. **Error Handling** - Built-in fallback support
4. **Loading States** - Automatic loading indicators
5. **Type Safety** - Full TypeScript support

---

## 🛠️ Troubleshooting

### **Assets not loading?**
1. Check that `public/media/site-assets.json` exists
2. Verify all URLs in the JSON are correct (use **https://www.cawap.ca**)
3. Check browser console for errors

### **Images showing placeholder?**
1. Verify the path is correct (e.g., `"branding.logo_main"`)
2. Check that the URL in `site-assets.json` is accessible
3. Ensure proper CORS headers in cPanel `.htaccess`

### **TypeScript errors?**
1. Make sure you're using the correct path strings
2. Check that `MediaAssets` interface matches your JSON structure

---

## 📝 Next Steps

Now that the Media Context System is built, you can:

1. ✅ **Update site-assets.json** with your actual cPanel URLs (use **https://www.cawap.ca**)
2. ✅ **Replace hard-coded images** in components with `useMedia()` or `<MediaImage>`
3. ✅ **Upload media files** to your cPanel following the directory structure
4. ✅ **Test performance** and verify all assets load correctly

---

**The system is ready! All components can now access media from your cPanel professionally.** 🚀
