# CAWAP Media Migration Checklist

## 📋 Current Media Inventory

### Images Currently Using AI-Generated URLs (readdy.ai)
These need to be replaced with professional photos uploaded to cPanel:

#### Hero Sections (20+ pages):
- [ ] Home page hero slider (3 images)
- [ ] About page hero
- [ ] Programs page hero
- [ ] Food Bank page hero
- [ ] Youth Leadership page hero
- [ ] Women Empowerment page hero
- [ ] Mental Health page hero
- [ ] Financial Literacy page hero
- [ ] Newcomers Settlement page hero
- [ ] Capital G Girls page hero
- [ ] Heart Wise Seniors page hero
- [ ] New Breed Women page hero
- [ ] JavaScript Program page hero
- [ ] Contact page hero
- [ ] Donate page hero
- [ ] Gallery page hero
- [ ] Christmas Event page hero
- [ ] Summer Camp page hero
- [ ] Sankofa Awards page hero
- [ ] Cultural Events page hero
- [ ] Upcoming Events page hero
- [ ] Past Events page hero

#### Program Cards & Features:
- [ ] Food Bank program card
- [ ] Youth Leadership program card
- [ ] Women Empowerment program card
- [ ] Mental Health program card
- [ ] Financial Literacy program card
- [ ] Newcomers Settlement program card
- [ ] Capital G Girls program card
- [ ] Heart Wise Seniors program card
- [ ] New Breed Women program card
- [ ] JavaScript Program card

#### Background Images:
- [ ] Home page sections backgrounds
- [ ] About page founder section
- [ ] Programs hub interactive background
- [ ] Donation CTA backgrounds

---

### Images Currently Using Imgur.com
These need to be migrated to cPanel:

#### Branding:
- [ ] Main logo: `i.imgur.com/pArmDNQ.png`

#### Food Bank Gallery (50+ images):
- [ ] All food bank photos from gallery page
- [ ] Food bank videos

#### Event Flyers:
- [ ] Black Business Start-Up Seminar flyer
- [ ] Other event promotional materials

---

### Training Images (trainings.ts)
- [ ] Mental Health training image
- [ ] Financial Literacy training image
- [ ] Leadership training image
- [ ] Other training program images

---

## 🎯 Migration Priority Order

### Phase 1: Critical Branding (HIGHEST PRIORITY)
1. [ ] Upload main logo to `media/branding/`
2. [ ] Create white version of logo
3. [ ] Create favicon
4. [ ] Update Header component
5. [ ] Update Footer component
6. [ ] Test logo displays correctly on all pages

### Phase 2: Hero Images (HIGH PRIORITY)
1. [ ] Prepare 20+ hero images (1920x1080px)
2. [ ] Upload to `media/hero/`
3. [ ] Update `site-assets.json` with URLs
4. [ ] Update all page hero sections
5. [ ] Test responsive display

### Phase 3: Program Images (MEDIUM PRIORITY)
1. [ ] Prepare 10 program feature images (800x600px)
2. [ ] Upload to `media/programs/`
3. [ ] Update program cards across site
4. [ ] Update programs page
5. [ ] Test card layouts

### Phase 4: Gallery & Events (MEDIUM PRIORITY)
1. [ ] Organize 50+ food bank photos
2. [ ] Upload to `media/gallery/food-bank/`
3. [ ] Upload event photos to `media/gallery/events/`
4. [ ] Update gallery page arrays
5. [ ] Test lightbox functionality

### Phase 5: Event Flyers (LOW PRIORITY)
1. [ ] Upload flyers to `media/flyers/`
2. [ ] Update flyers.ts data file
3. [ ] Update upcoming/past events pages
4. [ ] Test flyer displays

### Phase 6: Documents & Videos (LOW PRIORITY)
1. [ ] Upload PDFs to `media/documents/`
2. [ ] Upload videos to `media/videos/`
3. [ ] Implement download functionality
4. [ ] Test video playback

---

## 📸 Image Preparation Checklist

Before uploading each image:

### Quality Standards:
- [ ] Image is high resolution (minimum 1920px wide for heroes)
- [ ] Image is properly compressed (< 500KB for web)
- [ ] Image is in correct format (.jpg for photos, .png for logos)
- [ ] Image has descriptive filename (no spaces, use hyphens)

### Hero Images:
- [ ] Dimensions: 1920x1080px
- [ ] Format: .jpg
- [ ] File size: < 500KB
- [ ] Shows relevant CAWAP activities
- [ ] Good contrast for text overlay

### Program Cards:
- [ ] Dimensions: 800x600px
- [ ] Format: .jpg
- [ ] File size: < 200KB
- [ ] Represents program accurately

### Gallery Photos:
- [ ] Dimensions: 1200x800px
- [ ] Format: .jpg
- [ ] File size: < 300KB
- [ ] Shows real CAWAP events/activities

### Logos:
- [ ] Dimensions: 500x500px
- [ ] Format: .png (with transparency)
- [ ] File size: < 100KB
- [ ] High quality, sharp edges

---

## 🔍 File Naming Convention

Use this exact naming pattern:

### Hero Images:
```
home-hero.jpg
about-hero.jpg
programs-hero.jpg
contact-hero.jpg
donate-hero.jpg
```

### Program Images:
```
food-bank.jpg
youth-leadership.jpg
women-empowerment.jpg
mental-health.jpg
financial-literacy.jpg
```

### Gallery Images:
```
food-bank/image-01.jpg
food-bank/image-02.jpg
events/event-01.jpg
programs/program-01.jpg
```

### Event Flyers:
```
black-business-seminar.jpg
summer-camp-2025.jpg
christmas-event.jpg
```

**Rules:**
- All lowercase
- Use hyphens (not spaces or underscores)
- Descriptive names
- Sequential numbering for series

---

## ✅ Post-Upload Verification

After uploading each batch:

### Test Direct Access:
- [ ] Open URL in browser: `https://yourdomain.com/media/branding/cawap-logo.png`
- [ ] Image loads correctly
- [ ] No 404 errors

### Test Performance:
- [ ] Image loads in < 500ms (first load)
- [ ] Image loads in < 50ms (cached)
- [ ] Check browser DevTools Network tab

### Test on Website:
- [ ] Image displays correctly on page
- [ ] Responsive sizing works
- [ ] No broken image icons
- [ ] Alt text displays if image fails

---

## 📊 Progress Tracking

### Overall Progress:
- **Branding**: 0/4 files uploaded
- **Hero Images**: 0/22 files uploaded
- **Program Images**: 0/10 files uploaded
- **Gallery**: 0/50+ files uploaded
- **Flyers**: 0/3 files uploaded
- **Documents**: 0/4 files uploaded
- **Videos**: 0/3 files uploaded

**Total Progress**: 0% complete

---

## 🚨 Common Issues & Solutions

### Issue: Image not displaying
**Solution**: 
- Check file permissions (644)
- Verify filename matches exactly (case-sensitive)
- Clear browser cache

### Issue: Slow loading
**Solution**:
- Compress image before uploading
- Use .jpg instead of .png for photos
- Enable caching in .htaccess

### Issue: 404 error
**Solution**:
- Verify folder structure is correct
- Check URL in site-assets.json
- Ensure file was uploaded successfully

---

## 📝 Notes for Each Upload Session

### Session 1: ___/___/___
**Uploaded:**
- 

**Issues encountered:**
- 

**Next steps:**
- 

---

### Session 2: ___/___/___
**Uploaded:**
- 

**Issues encountered:**
- 

**Next steps:**
- 

---

## 🎓 Ready for Next Phase?

Before moving to React integration, ensure:
- [ ] All critical images uploaded (branding + heroes)
- [ ] `site-assets.json` updated with correct URLs
- [ ] `.htaccess` configured and working
- [ ] All images tested and loading correctly
- [ ] File permissions set correctly (755/644)
- [ ] Performance benchmarks met (< 500ms load time)

---

**Last Updated**: ___/___/___  
**Completed By**: _______________
