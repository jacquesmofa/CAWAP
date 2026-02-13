# Cloudinary Setup Instructions

## ✅ What's Already Done
- Cloudinary configuration added to your project
- Helper functions created for image URLs
- CloudinaryImage component ready to use
- Upload utilities prepared

## 🔧 What You Need To Do

### 1. Create Upload Preset (IMPORTANT!)

1. Go to your Cloudinary Dashboard: https://console.cloudinary.com/
2. Navigate to **Settings** → **Upload** → **Upload presets**
3. Click **Add upload preset**
4. Configure:
   - **Preset name**: `cawap_uploads`
   - **Signing mode**: Select **Unsigned**
   - **Folder**: `cawap` (optional, for organization)
5. Click **Save**

### 2. Upload Your Images

You have two options:

#### Option A: Upload via Cloudinary Dashboard (Easiest)
1. Go to **Media Library** in your dashboard
2. Click **Upload**
3. Drag and drop your images
4. Organize into folders:
   - `cawap/events` - Event photos
   - `cawap/gallery` - Gallery images
   - `cawap/programs` - Program images
   - `cawap/team` - Team photos

#### Option B: Upload via Code (Advanced)
Use the `uploadToCloudinary` function in your components:
```typescript
import { uploadToCloudinary } from '../utils/cloudinaryUpload';

const handleUpload = async (file: File) => {
  const result = await uploadToCloudinary(file, 'cawap/events');
  console.log('Uploaded:', result.secure_url);
};
```

### 3. Get Your Image Public IDs

After uploading, each image gets a **public_id**. For example:
- If you upload to folder `cawap/events/christmas-2024.jpg`
- The public_id is: `cawap/events/christmas-2024`

### 4. Use Images in Your Code

Replace the old image URLs with CloudinaryImage component:

```tsx
import CloudinaryImage from '../components/base/CloudinaryImage';

// Instead of:
<img src="https://readdy.ai/api/search-image?query=..." alt="Event" />

// Use:
<CloudinaryImage 
  publicId="cawap/events/christmas-2024"
  alt="Christmas Event 2024"
  transformation="gallery"
  className="w-full h-full object-cover"
/>
```

## 📁 Recommended Folder Structure

```
cawap/
├── events/
│   ├── christmas-2024
│   ├── summer-camp-2024
│   └── youth-leadership-2024
├── gallery/
│   ├── community-1
│   ├── community-2
│   └── volunteers-1
├── programs/
│   ├── food-bank
│   ├── capital-g-girls
│   └── heart-wise-seniors
├── team/
│   ├── dr-irine-ashu
│   └── staff-members
└── hero/
    ├── hero-slide-1
    ├── hero-slide-2
    └── hero-slide-3
```

## 🎨 Available Transformations

Use these preset transformations:
- `thumbnail` - 300x300 square
- `hero` - 1920x800 hero images
- `gallery` - 800x600 gallery images
- `card` - 400x300 card images
- `optimized` - Auto quality and format

## 🚀 Next Steps

1. ✅ Create the upload preset (most important!)
2. ✅ Upload your event photos
3. ✅ Note down the public_ids
4. ✅ Tell me which images you want to replace first

**Ready to start uploading? Let me know when you've created the upload preset!**
