import { CLOUDINARY_CONFIG } from '../config/cloudinary';

export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
}

/**
 * Upload image to Cloudinary
 * Note: You need to create an unsigned upload preset in your Cloudinary dashboard
 * Settings > Upload > Upload presets > Add upload preset
 * Set it to "Unsigned" and name it "cawap_uploads"
 */
export const uploadToCloudinary = async (
  file: File,
  folder?: string
): Promise<CloudinaryUploadResult> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
  
  if (folder) {
    formData.append('folder', folder);
  }

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
};

/**
 * Delete image from Cloudinary
 * Note: This requires a signed request, so you'll need to implement this on your backend
 */
export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
  // This would need to be implemented via a backend endpoint
  // as it requires your API secret
  console.warn('Delete functionality requires backend implementation');
};
