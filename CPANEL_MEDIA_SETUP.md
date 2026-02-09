# CAWAP cPanel Media Infrastructure Setup Guide

## 📁 Professional Directory Structure

Create this exact folder structure in your cPanel `public_html` directory:

```
public_html/
├── media/
│   ├── branding/           # Logos, favicons, brand assets
│   ├── hero/              # Hero section background images
│   ├── programs/          # Program feature images
│   ├── events/            # Event photos and banners
│   ├── gallery/           # Photo galleries
│   │   ├── food-bank/
│   │   ├── events/
│   │   └── programs/
│   ├── documents/         # PDFs, forms, reports
│   ├── videos/            # MP4/WebM video files
│   ├── flyers/            # Event flyers and promotional materials
│   ├── trainings/         # Training program images
│   ├── site-assets.json   # Master manifest file
│   └── .htaccess          # Performance & caching config
└── static/                # React build files (js, css)
```

---

## 🚀 Step-by-Step Setup Instructions

### Step 1: Create Directory Structure in cPanel

1. **Login to cPanel** → File Manager
2. Navigate to `public_html/`
3. Create new folder: `media`
4. Inside `media/`, create these subfolders:
   - `branding`
   - `hero`
   - `programs`
   - `events`
   - `gallery` (with subfolders: `food-bank`, `events`, `programs`)
   - `documents`
   - `videos`
   - `flyers`
   - `trainings`

### Step 2: Set Proper File Permissions

**Critical for security and performance:**

- **Folders**: Set to `755` (drwxr-xr-x)
- **Files**: Set to `644` (-rw-r--r--)

**How to set permissions in cPanel:**
1. Right-click on folder/file → Permissions
2. Enter `755` for folders or `644` for files
3. Click "Change Permissions"

### Step 3: Upload the .htaccess File

1. Upload the `.htaccess` file (from this project's `public/` folder) to `public_html/media/`
2. This file configures:
   - Browser caching (1 year for images, 1 month for PDFs)
   - Compression (faster loading)
   - CORS headers (cross-origin access)
   - Security (prevents directory browsing)

### Step 4: Upload the Master Manifest File

1. Upload `site-assets.json` to `public_html/media/`
2. **Important**: Replace all `https://yourdomain.com` with **https://www.cawap.ca**
3. Example: `https://www.cawap.ca/media/branding/cawap-logo.png`

### Step 5: Upload Your Media Files

Upload files to their respective folders following this naming convention:

**Branding:**
- `cawap-logo.png` (main logo)
- `cawap-logo-white.png` (white version for dark backgrounds)
- `favicon.ico` (browser tab icon)
- `social-card.jpg` (for social media sharing)

**Hero Images:**
- `home-hero.jpg`
- `about-hero.jpg`
- `programs-hero.jpg`
- `contact-hero.jpg`
- `donate-hero.jpg`
- `gallery-hero.jpg`

**Programs:**
- `food-bank.jpg`
- `youth-leadership.jpg`
- `women-empowerment.jpg`
- `mental-health.jpg`
- `financial-literacy.jpg`
- `newcomers-settlement.jpg`
- `capital-g-girls.jpg`
- `heart-wise-seniors.jpg`
- `new-breed-women.jpg`
- `javascript-program.jpg`

**Events:**
- `christmas-2024.jpg`
- `summer-camp.jpg`
- `sankofa-awards.jpg`
- `cultural-events.jpg`
- `black-business-seminar.jpg`

**Gallery** (organize by category):
- `gallery/food-bank/image-01.jpg`, `image-02.jpg`, etc.
- `gallery/events/event-01.jpg`, `event-02.jpg`, etc.
- `gallery/programs/program-01.jpg`, `program-02.jpg`, etc.

**Documents:**
- `annual-report-2024.pdf`
- `program-guide.pdf`
- `donation-form.pdf`
- `volunteer-application.pdf`

**Videos:**
- `hero-bg.mp4`
- `about-intro.mp4`
- `testimonials.mp4`

**Flyers:**
- `black-business-seminar.jpg`
- `summer-camp-2025.jpg`
- `christmas-event.jpg`

**Trainings:**
- `mental-health.jpg`
- `financial-literacy.jpg`
- `leadership.jpg`

---

## 🎯 Image Optimization Guidelines

### Before Uploading:

1. **Resize images** to appropriate dimensions:
   - Hero images: 1920x1080px
   - Program cards: 800x600px
   - Gallery images: 1200x800px
   - Logos: 500x500px (transparent PNG)

2. **Compress images** using tools like:
   - TinyPNG (https://tinypng.com)
   - ImageOptim (Mac)
   - Squoosh (https://squoosh.app)

3. **Use correct formats**:
   - Photos: `.jpg` (smaller file size)
   - Graphics/logos: `.png` (transparency support)
   - Modern browsers: `.webp` (best compression)

4. **Optimize PDFs**:
   - Use "Save as Optimized PDF" in Adobe Acrobat
   - Enable "Linearization" for fast web viewing

---

## 🔧 Testing Your Setup

### 1. Test Direct Access
Open your browser and try accessing:
```
https://www.cawap.ca/media/site-assets.json
```
You should see the JSON file content.

### 2. Test Image Loading
Try accessing an image directly:
```
https://www.cawap.ca/media/branding/cawap-logo.png
```
The image should load instantly.

### 3. Check Caching Headers
Use browser DevTools (F12) → Network tab:
- Load an image
- Check Response Headers
- Look for `Cache-Control: max-age=31536000`

---

## 📊 Performance Benchmarks

After setup, your media should load:
- **Images**: < 500ms (first load), < 50ms (cached)
- **PDFs**: < 1s (first page visible)
- **Videos**: Start streaming within 2s

---

## 🔒 Security Checklist

- ✅ Folder permissions set to `755`
- ✅ File permissions set to `644`
- ✅ `.htaccess` prevents directory browsing
- ✅ No sensitive files in public folders
- ✅ HTTPS enabled (SSL certificate installed)

---

## 🆘 Troubleshooting

### Images not loading?
- Check file permissions (should be `644`)
- Verify file names match exactly (case-sensitive)
- Ensure `.htaccess` is uploaded correctly

### Slow loading?
- Compress images before uploading
- Enable Cloudflare or CDN in cPanel
- Check server resources (CPU/RAM usage)

### 404 errors?
- Verify folder structure matches exactly
- Check `site-assets.json` URLs are correct
- Clear browser cache and test again

---

## 📝 Maintenance Tips

1. **Regular backups**: Use cPanel backup tool weekly
2. **Monitor storage**: Keep media folder under 2GB for optimal performance
3. **Update manifest**: When adding new files, update `site-assets.json`
4. **Clean old files**: Remove unused media monthly

---

## 🎓 Next Steps

After completing this setup:
1. ✅ Verify all folders are created
2. ✅ Upload `.htaccess` and `site-assets.json`
3. ✅ Set correct permissions
4. ✅ Upload your media files
5. ✅ Update `site-assets.json` with **https://www.cawap.ca**
6. ✅ Test direct access to files
7. 🚀 Ready for React integration (next phase)

---

## 📞 Need Help?

If you encounter issues:
1. Check cPanel error logs (Metrics → Errors)
2. Verify file permissions
3. Test with a single image first
4. Contact your hosting provider if server issues persist

---

**Created for CAWAP Canada**  
Professional Media Infrastructure v1.0
