# 📸 CAWAP Deep Gallery System - Complete Setup Guide

## 🎯 What This System Does

Your new gallery system is **professional, fast, and organized**. It allows you to:

✅ **Organize photos by categories and subcategories** (Food Bank → 2024 → January)
✅ **Share direct links** to specific albums (www.cawap.ca/gallery?category=food-bank&subcategory=2024)
✅ **Load images only when needed** (saves bandwidth and loads faster)
✅ **Display photos in a beautiful masonry layout** (like Pinterest)
✅ **Show breadcrumbs** so visitors know where they are
✅ **Include videos** alongside photos

---

## 📋 STEP-BY-STEP SETUP INSTRUCTIONS

---

### **STEP 1: Organize Your Files on cPanel** 📁

#### **1.1 Log into cPanel**
1. Go to your hosting provider's website
2. Log in to cPanel
3. Click **"File Manager"**

#### **1.2 Create Your Gallery Folders**

Navigate to: `public_html/media/gallery/`

Create these folders (you can add more later):

```
gallery/
├── food-bank/
│   ├── 2024/
│   ├── 2023/
│   └── 2022/
├── community/
│   ├── workshops/
│   ├── meetings/
│   └── celebrations/
├── youth/
│   ├── leadership/
│   ├── sports/
│   └── arts/
├── awards/
│   ├── 2024/
│   └── 2023/
├── cultural/
│   ├── festivals/
│   └── heritage/
└── workshops/
    ├── financial-literacy/
    ├── mental-health/
    └── tech-training/
```

**How to create folders in cPanel:**
1. Click **"+ Folder"** button
2. Type the folder name (example: `food-bank`)
3. Click **"Create New Folder"**
4. Repeat for all folders

---

#### **1.3 Upload Your Photos**

**For each category:**

1. **Open the folder** (example: `food-bank/2024/`)
2. Click **"Upload"** button
3. **Drag and drop** your photos OR click **"Select File"**
4. Wait for upload to complete

**Photo Requirements:**
- ✅ Format: JPG or PNG
- ✅ Size: 1200-1920px wide
- ✅ File size: Under 500KB each
- ✅ Name clearly: `food-bank-jan-2024-01.jpg`

**💡 Tip:** If your photos are too large, use a free tool like:
- **TinyPNG.com** (compress images online)
- **Squoosh.app** (Google's image compressor)

---

#### **1.4 Upload Your Videos (Optional)**

Create a videos folder: `public_html/media/videos/`

**Video Requirements:**
- ✅ Format: MP4 (H.264 codec)
- ✅ Resolution: 1920x1080 or 1280x720
- ✅ File size: Under 50MB
- ✅ Use **HandBrake** (free software) to compress large videos

**How to compress videos with HandBrake:**
1. Download HandBrake (handbrake.fr)
2. Open your video
3. Select "Fast 1080p30" preset
4. Click "Start Encode"
5. Upload the compressed file

---

### **STEP 2: Create Your Gallery Manifest File** 📝

This is the **most important step**. This file tells your website where all your photos are.

#### **2.1 Create the File**

1. In cPanel File Manager, go to: `public_html/media/`
2. Click **"+ File"** button
3. Name it: `gallery-manifest.json`
4. Click **"Create New File"**

#### **2.2 Edit the File**

1. **Right-click** on `gallery-manifest.json`
2. Click **"Edit"**
3. **Copy and paste** the template below
4. **Replace** `yourdomain.com` with **www.cawap.ca**
5. **Add your photo URLs**
6. Click **"Save Changes"**

---

### **📄 GALLERY MANIFEST TEMPLATE**

Copy this and customize it:

```json
{
  "food-bank": {
    "name": "Food Bank Events",
    "icon": "ri-restaurant-line",
    "subcategories": {
      "2024": {
        "name": "2024 Events",
        "photos": [
          "https://www.cawap.ca/media/gallery/food-bank/2024/photo-01.jpg",
          "https://www.cawap.ca/media/gallery/food-bank/2024/photo-02.jpg",
          "https://www.cawap.ca/media/gallery/food-bank/2024/photo-03.jpg"
        ],
        "videos": [
          "https://www.cawap.ca/media/videos/food-bank/2024-highlights.mp4"
        ]
      },
      "2023": {
        "name": "2023 Events",
        "photos": [
          "https://www.cawap.ca/media/gallery/food-bank/2023/photo-01.jpg",
          "https://www.cawap.ca/media/gallery/food-bank/2023/photo-02.jpg"
        ]
      }
    }
  },
  "community": {
    "name": "Community Programs",
    "icon": "ri-community-line",
    "subcategories": {
      "workshops": {
        "name": "Workshops",
        "photos": [
          "https://www.cawap.ca/media/gallery/community/workshops/photo-01.jpg",
          "https://www.cawap.ca/media/gallery/community/workshops/photo-02.jpg"
        ]
      },
      "meetings": {
        "name": "Community Meetings",
        "photos": [
          "https://www.cawap.ca/media/gallery/community/meetings/photo-01.jpg"
        ]
      }
    }
  },
  "youth": {
    "name": "Youth Activities",
    "icon": "ri-team-line",
    "subcategories": {
      "leadership": {
        "name": "Leadership Programs",
        "photos": [
          "https://www.cawap.ca/media/gallery/youth/leadership/photo-01.jpg"
        ]
      },
      "sports": {
        "name": "Sports Activities",
        "photos": [
          "https://www.cawap.ca/media/gallery/youth/sports/photo-01.jpg"
        ]
      }
    }
  },
  "awards": {
    "name": "Awards & Recognition",
    "icon": "ri-award-line",
    "subcategories": {
      "2024": {
        "name": "2024 Awards",
        "photos": [
          "https://www.cawap.ca/media/gallery/awards/2024/photo-01.jpg"
        ]
      }
    }
  },
  "cultural": {
    "name": "Cultural Events",
    "icon": "ri-global-line",
    "subcategories": {
      "festivals": {
        "name": "Cultural Festivals",
        "photos": [
          "https://www.cawap.ca/media/gallery/cultural/festivals/photo-01.jpg"
        ]
      }
    }
  }
}
```

---

### **2.3 How to Fill in Your URLs**

**Example:** If you uploaded a photo to:
- Folder: `public_html/media/gallery/food-bank/2024/`
- Filename: `event-photo-01.jpg`

**The URL is:**
```
https://www.cawap.ca/media/gallery/food-bank/2024/event-photo-01.jpg
```

**Use your actual domain: www.cawap.ca**

---

### **2.4 Available Icons**

You can use any Remix Icon. Here are popular ones:

- `ri-restaurant-line` (Food/Dining)
- `ri-community-line` (Community)
- `ri-team-line` (Youth/Groups)
- `ri-award-line` (Awards)
- `ri-global-line` (Cultural)
- `ri-heart-line` (Health/Care)
- `ri-book-line` (Education)
- `ri-calendar-line` (Events)
- `ri-home-line` (Home)
- `ri-user-line` (People)

**See all icons at:** https://remixicon.com/

---

### **STEP 3: Test Your Gallery** 🧪

#### **3.1 Check Your Files**

1. Open a new browser tab
2. Type your photo URL directly:
   ```
   https://www.cawap.ca/media/gallery/food-bank/2024/photo-01.jpg
   ```
3. **If the photo loads** ✅ = Success!
4. **If you see an error** ❌ = Check the file path

#### **3.2 Test the Manifest**

1. Open: `https://www.cawap.ca/media/gallery-manifest.json`
2. You should see your JSON code
3. **If it shows** ✅ = Success!
4. **If error** ❌ = Check the filename and location

#### **3.3 View Your Gallery**

1. Go to: `https://www.cawap.ca/gallery`
2. You should see your categories
3. Click a category → See albums
4. Click an album → See photos in masonry layout
5. Click a photo → Opens lightbox (full screen)

---

### **STEP 4: Add More Photos Later** 📸

**To add new photos:**

1. **Upload photos** to the correct folder in cPanel
2. **Edit** `gallery-manifest.json`
3. **Add the new photo URLs** to the correct section
4. **Save** the file
5. **Refresh** your website

**Example - Adding a new photo:**

```json
"2024": {
  "name": "2024 Events",
  "photos": [
    "https://www.cawap.ca/media/gallery/food-bank/2024/photo-01.jpg",
    "https://www.cawap.ca/media/gallery/food-bank/2024/photo-02.jpg",
    "https://www.cawap.ca/media/gallery/food-bank/2024/photo-NEW.jpg"
  ]
}
```

**Don't forget the comma after the previous line!**

---

### **STEP 5: Share Direct Links** 🔗

Your gallery now supports **deep linking**. You can share direct links to specific albums:

**Examples:**

- All categories: `https://www.cawap.ca/gallery`
- Food Bank category: `https://www.cawap.ca/gallery?category=food-bank`
- 2024 Food Bank album: `https://www.cawap.ca/gallery?category=food-bank&subcategory=2024`

**Use these links in:**
- Social media posts
- Email newsletters
- Event invitations
- Flyers and brochures

---

## 🎨 FEATURES OF YOUR NEW GALLERY

### ✅ **Breadcrumbs**
Shows visitors where they are:
```
Home > Gallery > Food Bank Events > 2024 Events
```

### ✅ **Masonry Layout**
Photos arrange beautifully like Pinterest:
- Vertical photos fit perfectly
- Horizontal photos fit perfectly
- No awkward gaps or cropping

### ✅ **Lazy Loading**
- Photos load only when you scroll to them
- Saves bandwidth
- Faster page load
- Better mobile experience

### ✅ **Lightbox Viewer**
Click any photo to:
- View full screen
- Navigate with arrow keys
- See photo counter (3 / 25)
- Close with ESC key

### ✅ **Video Support**
- Upload MP4 videos
- Built-in video player
- Controls for play/pause/volume

### ✅ **Responsive Design**
- Desktop: 4 columns
- Tablet: 2-3 columns
- Mobile: 1 column

---

## 🔧 TROUBLESHOOTING

### **Problem: Photos don't show**

**Solution:**
1. Check the URL in your browser
2. Make sure the file exists in cPanel
3. Check for typos in `gallery-manifest.json`
4. Ensure file permissions are 644

### **Problem: Gallery is empty**

**Solution:**
1. Check if `gallery-manifest.json` exists
2. Open it in browser: `www.cawap.ca/media/gallery-manifest.json`
3. Validate JSON syntax at: jsonlint.com
4. Clear browser cache (Ctrl + Shift + R)

### **Problem: Videos won't play**

**Solution:**
1. Ensure video is MP4 format
2. Compress video under 50MB
3. Check video URL in browser
4. Try different browser

### **Problem: Slow loading**

**Solution:**
1. Compress images (use TinyPNG.com)
2. Compress videos (use HandBrake)
3. Enable caching in `.htaccess` (see CPANEL_MEDIA_SETUP.md)

---

## 📊 RECOMMENDED STRUCTURE EXAMPLE

Here's a real-world example for CAWAP:

```
gallery/
├── food-bank/
│   ├── 2024/
│   │   ├── january-distribution.jpg
│   │   ├── february-volunteers.jpg
│   │   └── march-community.jpg
│   └── 2023/
│       └── annual-summary.jpg
├── youth-programs/
│   ├── leadership-camp-2024/
│   │   ├── day1-opening.jpg
│   │   ├── day2-activities.jpg
│   │   └── day3-graduation.jpg
│   └── sports-day/
│       └── soccer-tournament.jpg
├── community-events/
│   ├── cultural-festival-2024/
│   └── health-fair-2024/
└── awards/
    └── sankofa-royale-2024/
        ├── ceremony-opening.jpg
        ├── award-winners.jpg
        └── highlights-video.mp4
```

---

## 🎯 QUICK CHECKLIST

Before launching your gallery:

- [ ] All photos uploaded to correct folders
- [ ] All photos compressed (under 500KB each)
- [ ] `gallery-manifest.json` created and filled
- [ ] All URLs use **www.cawap.ca**
- [ ] Tested each photo URL in browser
- [ ] Tested gallery-manifest.json in browser
- [ ] Viewed gallery page and clicked through categories
- [ ] Tested on mobile device
- [ ] Tested lightbox (click photos)
- [ ] Tested breadcrumbs navigation

---

## 💡 PRO TIPS

1. **Organize by date** - Use YYYY-MM format for easy sorting
2. **Name files clearly** - Use descriptive names, not IMG_1234.jpg
3. **Backup regularly** - Download your photos from cPanel monthly
4. **Update often** - Add new photos after each event
5. **Share links** - Use deep links in social media posts
6. **Monitor size** - Keep total gallery under 2GB for best performance

---

## 🆘 NEED HELP?

If you get stuck:

1. **Check this guide again** - Read the troubleshooting section
2. **Validate your JSON** - Use jsonlint.com
3. **Check browser console** - Press F12 to see errors
4. **Test URLs directly** - Open photo URLs in new tab
5. **Ask for help** - Contact your developer or hosting support

---

## 🎉 YOU'RE DONE!

Your professional gallery system is now ready! 

**What you've achieved:**
✅ Professional organization
✅ Fast loading with lazy loading
✅ Beautiful masonry layout
✅ Shareable direct links
✅ Easy to update and maintain

**Next steps:**
1. Upload your photos
2. Fill in the manifest file
3. Test everything
4. Share your gallery with the community!

---

**Last Updated:** January 2025
**Version:** 1.0
**For:** CAWAP Website Gallery System
