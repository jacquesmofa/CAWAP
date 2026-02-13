# CAWAP Document Management System Guide

## 📁 Overview

This guide explains how to manage downloadable documents (PDFs, Word docs, etc.) on your CAWAP website using the professional cPanel media infrastructure.

---

## 🗂️ Directory Structure

Upload all documents to your cPanel in this structure:

```
public_html/media/documents/
├── annual-report-2024.pdf
├── annual-report-2023.pdf
├── program-guide.pdf
├── donation-form.pdf
├── volunteer-application.pdf
├── partnership-proposal.pdf
├── community-impact-report.pdf
├── financial-statement-2024.pdf
├── cawap-bylaws.pdf
├── code-of-conduct.pdf
├── privacy-policy.pdf
└── terms-of-service.pdf
```

---

## 📋 Document Categories

### **1. Annual Reports**
- `annual-report-2024.pdf` - Latest annual report
- `annual-report-2023.pdf` - Previous year report

### **2. Program Information**
- `program-guide.pdf` - Complete guide to all CAWAP programs

### **3. Forms & Applications**
- `donation-form.pdf` - Printable donation form
- `volunteer-application.pdf` - Volunteer sign-up form
- `partnership-proposal.pdf` - Corporate partnership information

### **4. Impact & Financial**
- `community-impact-report.pdf` - Community impact statistics
- `financial-statement-2024.pdf` - Financial transparency report

### **5. Legal & Policies**
- `cawap-bylaws.pdf` - Organization bylaws
- `code-of-conduct.pdf` - Code of conduct for volunteers/staff
- `privacy-policy.pdf` - Privacy policy
- `terms-of-service.pdf` - Terms of service

---

## 🚀 How to Use in Your React Components

### **Method 1: Download Button Component**

```tsx
import DownloadButton from '../components/base/DownloadButton';
import { useMedia } from '../context/MediaContext';

function MyPage() {
  const { assets } = useMedia();

  return (
    <DownloadButton
      fileUrl={assets.documents.annual_report_2024}
      fileName="CAWAP_Annual_Report_2024.pdf"
      label="Download Annual Report"
      variant="primary"
      size="md"
    />
  );
}
```

### **Method 2: Document Card Component**

```tsx
import DocumentCard from '../components/base/DocumentCard';
import { useMedia } from '../context/MediaContext';

function DocumentsPage() {
  const { assets } = useMedia();

  return (
    <DocumentCard
      title="Annual Report 2024"
      description="Our comprehensive annual report showcasing community impact and financial transparency."
      fileUrl={assets.documents.annual_report_2024}
      fileName="CAWAP_Annual_Report_2024.pdf"
      fileType="pdf"
      fileSize="2.5 MB"
    />
  );
}
```

### **Method 3: Document Viewer Component**

```tsx
import DocumentViewer from '../components/base/DocumentViewer';
import { useMedia } from '../context/MediaContext';

function ViewDocument() {
  const { assets } = useMedia();

  return (
    <DocumentViewer
      fileUrl={assets.documents.program_guide}
      fileName="CAWAP_Program_Guide.pdf"
      title="CAWAP Program Guide"
    />
  );
}
```

### **Method 4: Custom Hook**

```tsx
import { useDocumentDownload } from '../hooks/useDocumentDownload';
import { useMedia } from '../context/MediaContext';

function CustomDownload() {
  const { assets } = useMedia();
  const { downloadDocument, downloading, progress } = useDocumentDownload({
    onSuccess: () => alert('Download complete!'),
    onError: (error) => alert(`Download failed: ${error.message}`),
  });

  return (
    <button
      onClick={() => downloadDocument(
        assets.documents.donation_form,
        'CAWAP_Donation_Form.pdf'
      )}
      disabled={downloading}
    >
      {downloading ? `Downloading... ${progress}%` : 'Download Form'}
    </button>
  );
}
```

---

## 📤 Uploading Documents to cPanel

### **Step 1: Access File Manager**
1. Log into your cPanel
2. Click **File Manager**
3. Navigate to `public_html/media/documents/`

### **Step 2: Upload Files**
1. Click **Upload** button
2. Select your PDF/document files
3. Wait for upload to complete

### **Step 3: Set Permissions**
1. Select uploaded files
2. Click **Permissions**
3. Set to **644** (read for everyone, write for owner)

### **Step 4: Verify URLs**
Test your document URL in browser:
```
https://www.cawap.ca/media/documents/annual-report-2024.pdf
```

---

## 🔧 PDF Optimization Tips

### **1. Web Optimization (Linearization)**
Before uploading PDFs, optimize them for web viewing:

**Using Adobe Acrobat:**
- File → Save As Other → Optimized PDF
- Check "Linearize for Fast Web View"

**Using Online Tools:**
- [iLovePDF](https://www.ilovepdf.com/compress_pdf)
- [Smallpdf](https://smallpdf.com/compress-pdf)

### **2. File Size Recommendations**
- **Forms:** < 500 KB
- **Reports:** < 5 MB
- **Guides:** < 3 MB

### **3. Naming Conventions**
- Use lowercase
- Use hyphens (not spaces or underscores)
- Be descriptive: `annual-report-2024.pdf` ✅
- Avoid: `Report 2024 Final v3.pdf` ❌

---

## 🎨 Component Props Reference

### **DownloadButton Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fileUrl` | string | required | URL to the document |
| `fileName` | string | required | Name for downloaded file |
| `label` | string | "Download" | Button text |
| `icon` | string | "ri-download-2-line" | Remix Icon class |
| `variant` | "primary" \| "secondary" \| "outline" | "primary" | Button style |
| `size` | "sm" \| "md" \| "lg" | "md" | Button size |
| `className` | string | "" | Additional CSS classes |

### **DocumentCard Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | Document title |
| `description` | string | optional | Document description |
| `fileUrl` | string | required | URL to the document |
| `fileName` | string | required | Name for downloaded file |
| `fileType` | "pdf" \| "doc" \| "txt" \| "other" | "pdf" | File type for icon |
| `fileSize` | string | optional | Display file size |
| `icon` | string | optional | Custom icon override |
| `className` | string | "" | Additional CSS classes |

### **DocumentViewer Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fileUrl` | string | required | URL to the document |
| `fileName` | string | required | Document file name |
| `title` | string | optional | Modal title |
| `className` | string | "" | Additional CSS classes |

---

## 🔒 Security Best Practices

### **1. File Permissions**
```bash
# Folders: 755 (rwxr-xr-x)
chmod 755 public_html/media/documents/

# Files: 644 (rw-r--r--)
chmod 644 public_html/media/documents/*.pdf
```

### **2. Prevent Directory Listing**
The `.htaccess` file already includes:
```apache
Options -Indexes
```

### **3. HTTPS Only**
Ensure all document URLs use HTTPS:
```
✅ https://www.cawap.ca/media/documents/report.pdf
❌ http://www.cawap.ca/media/documents/report.pdf
```

---

## 📊 Adding New Documents

### **Step 1: Upload to cPanel**
Upload your new document to `public_html/media/documents/`

### **Step 2: Update site-assets.json**
Edit `public/media/site-assets.json`:

```json
{
  "documents": {
    "annual_report_2024": "https://www.cawap.ca/media/documents/annual-report-2024.pdf",
    "new_document": "https://www.cawap.ca/media/documents/new-document.pdf"
  }
}
```

### **Step 3: Update TypeScript Types**
Edit `src/types/media.ts`:

```typescript
export interface MediaAssets {
  documents: {
    annual_report_2024: string;
    new_document: string;
  };
}
```

### **Step 4: Use in Components**
```tsx
const { assets } = useMedia();

<DownloadButton
  fileUrl={assets.documents.new_document}
  fileName="New_Document.pdf"
  label="Download New Document"
/>
```

---

## 🎯 Common Use Cases

### **1. About Page - Annual Reports**
```tsx
<section className="py-16">
  <h2 className="text-3xl font-bold mb-8">Annual Reports</h2>
  <div className="grid md:grid-cols-2 gap-6">
    <DocumentCard
      title="Annual Report 2024"
      description="Our latest annual report"
      fileUrl={assets.documents.annual_report_2024}
      fileName="CAWAP_Annual_Report_2024.pdf"
      fileType="pdf"
    />
    <DocumentCard
      title="Annual Report 2023"
      description="Previous year report"
      fileUrl={assets.documents.annual_report_2023}
      fileName="CAWAP_Annual_Report_2023.pdf"
      fileType="pdf"
    />
  </div>
</section>
```

### **2. Donate Page - Forms**
```tsx
<div className="bg-gray-50 p-8 rounded-xl">
  <h3 className="text-xl font-semibold mb-4">Prefer to Donate by Mail?</h3>
  <p className="text-gray-600 mb-6">
    Download our donation form and mail it with your contribution.
  </p>
  <DownloadButton
    fileUrl={assets.documents.donation_form}
    fileName="CAWAP_Donation_Form.pdf"
    label="Download Donation Form"
    variant="outline"
  />
</div>
```

### **3. Footer - Legal Documents**
```tsx
<div className="flex gap-4">
  <a href={assets.documents.privacy_policy} target="_blank" rel="noopener noreferrer">
    Privacy Policy
  </a>
  <a href={assets.documents.terms_of_service} target="_blank" rel="noopener noreferrer">
    Terms of Service
  </a>
</div>
```

---

## 🐛 Troubleshooting

### **Problem: Download button doesn't work**
**Solution:** Check browser console for CORS errors. Ensure `.htaccess` has:
```apache
Header set Access-Control-Allow-Origin "*"
```

### **Problem: PDF opens in browser instead of downloading**
**Solution:** The `.htaccess` forces download with:
```apache
Header set Content-Disposition "attachment"
```

### **Problem: 404 error on document URL**
**Solution:** 
1. Verify file exists in cPanel File Manager
2. Check file name matches exactly (case-sensitive)
3. Verify URL in `site-assets.json` is correct

### **Problem: Slow download speeds**
**Solution:**
1. Optimize PDF file size (compress images)
2. Enable gzip compression in `.htaccess`
3. Consider using a CDN for large files

---

## 📞 Support

For questions about document management:
- Check this guide first
- Review component examples in `src/components/base/`
- Test with browser developer tools (Network tab)

---

**Your document management system is now ready! Upload your PDFs to cPanel and they'll be professionally served with proper caching, security, and download functionality.** 🎉
