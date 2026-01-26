/**
 * Custom React Hook for Cloudinary Image Uploads
 * 
 * This hook provides a reusable way to upload images to Cloudinary
 * across your entire application. It handles:
 * - File validation (size, type)
 * - Upload progress tracking
 * - Error handling
 * - Success/failure states
 * 
 * LEARNING POINTS:
 * 1. Custom hooks in React start with "use" prefix
 * 2. They encapsulate reusable logic that can be shared across components
 * 3. useState manages component state (loading, error, progress)
 * 4. Async/await handles asynchronous operations cleanly
 */

import { useState } from 'react';
import { uploadToCloudinary, CloudinaryUploadResult } from '../utils/cloudinaryUpload';

/**
 * Interface defines the shape of data returned by this hook
 * TypeScript interfaces ensure type safety throughout your code
 */
interface UseCloudinaryUploadReturn {
  uploadImage: (file: File, folder?: string) => Promise<CloudinaryUploadResult | null>;
  uploading: boolean;      // Is upload in progress?
  progress: number;        // Upload progress percentage (0-100)
  error: string | null;    // Error message if upload fails
  uploadedUrl: string | null; // URL of successfully uploaded image
}

/**
 * Hook Configuration Options
 * Allows customization when using the hook
 */
interface UseCloudinaryUploadOptions {
  maxSizeInMB?: number;    // Maximum file size allowed (default: 5MB)
  allowedTypes?: string[]; // Allowed file types (default: images only)
}

/**
 * Main Hook Function
 * 
 * @param options - Configuration options for upload behavior
 * @returns Object with upload function and state variables
 * 
 * USAGE EXAMPLE:
 * const { uploadImage, uploading, error } = useCloudinaryUpload();
 * const result = await uploadImage(file, 'cawap/events');
 */
export const useCloudinaryUpload = (
  options: UseCloudinaryUploadOptions = {}
): UseCloudinaryUploadReturn => {
  
  // Destructure options with default values
  // The || operator provides fallback values if options aren't specified
  const {
    maxSizeInMB = 5,  // Default: 5MB max file size
    allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
  } = options;

  // STATE MANAGEMENT
  // useState creates reactive state variables that trigger re-renders when changed
  const [uploading, setUploading] = useState(false);        // Track upload status
  const [progress, setProgress] = useState(0);              // Track upload progress
  const [error, setError] = useState<string | null>(null);  // Store error messages
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null); // Store result URL

  /**
   * Main Upload Function
   * 
   * This is the function components will call to upload images
   * It's async because uploading takes time and we need to wait for the result
   * 
   * @param file - The image file to upload
   * @param folder - Optional Cloudinary folder path (e.g., 'cawap/events')
   * @returns Upload result with URL and metadata, or null if failed
   */
  const uploadImage = async (
    file: File,
    folder?: string
  ): Promise<CloudinaryUploadResult | null> => {
    
    // STEP 1: RESET STATE
    // Clear any previous errors and reset progress
    setError(null);
    setProgress(0);
    setUploadedUrl(null);

    // STEP 2: VALIDATE FILE TYPE
    // Check if the file type is in our allowed list
    if (!allowedTypes.includes(file.type)) {
      const errorMsg = `Invalid file type. Allowed types: ${allowedTypes.join(', ')}`;
      setError(errorMsg);
      return null;
    }

    // STEP 3: VALIDATE FILE SIZE
    // Convert bytes to megabytes: (bytes / 1024 / 1024)
    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > maxSizeInMB) {
      const errorMsg = `File too large. Maximum size: ${maxSizeInMB}MB`;
      setError(errorMsg);
      return null;
    }

    // STEP 4: START UPLOAD
    try {
      // Set uploading state to true (this can show loading spinners in UI)
      setUploading(true);
      
      // Simulate progress updates
      // In a real scenario, you'd track actual upload progress
      setProgress(30); // Started

      // CALL THE UPLOAD FUNCTION
      // This sends the file to Cloudinary's servers
      const result = await uploadToCloudinary(file, folder);
      
      // Update progress to show completion
      setProgress(100);
      
      // Store the uploaded image URL
      setUploadedUrl(result.secure_url);
      
      // Return the full result object
      // Contains: public_id, secure_url, width, height, format
      return result;

    } catch (err) {
      // STEP 5: HANDLE ERRORS
      // If anything goes wrong, catch the error and store it
      const errorMessage = err instanceof Error ? err.message : 'Upload failed';
      setError(errorMessage);
      console.error('Upload error:', err);
      return null;

    } finally {
      // STEP 6: CLEANUP
      // This runs whether upload succeeds or fails
      // Reset uploading state after a short delay (for smooth UI transitions)
      setTimeout(() => {
        setUploading(false);
      }, 500);
    }
  };

  // RETURN THE HOOK'S PUBLIC API
  // Components using this hook get access to these values and functions
  return {
    uploadImage,   // Function to call for uploading
    uploading,     // Boolean: is upload in progress?
    progress,      // Number: 0-100 progress percentage
    error,         // String or null: error message
    uploadedUrl    // String or null: URL of uploaded image
  };
};

/**
 * HOW TO USE THIS HOOK IN A COMPONENT:
 * 
 * import { useCloudinaryUpload } from '../hooks/useCloudinaryUpload';
 * 
 * function MyComponent() {
 *   const { uploadImage, uploading, error, uploadedUrl } = useCloudinaryUpload({
 *     maxSizeInMB: 10,  // Allow up to 10MB files
 *   });
 * 
 *   const handleFileSelect = async (event) => {
 *     const file = event.target.files[0];
 *     if (file) {
 *       const result = await uploadImage(file, 'cawap/gallery');
 *       if (result) {
 *         console.log('Uploaded successfully:', result.secure_url);
 *       }
 *     }
 *   };
 * 
 *   return (
 *     <div>
 *       <input type="file" onChange={handleFileSelect} accept="image/*" />
 *       {uploading && <p>Uploading...</p>}
 *       {error && <p>Error: {error}</p>}
 *       {uploadedUrl && <img src={uploadedUrl} alt="Uploaded" />}
 *     </div>
 *   );
 * }
 */
