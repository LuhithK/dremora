// Utility functions for image handling
export const getImageUrl = (imagePath: string, fallbackUrl?: string): string => {
  try {
    // In production, this would handle local asset loading
    // For now, we'll use the fallback URL or return the path
    return fallbackUrl || imagePath;
  } catch (error) {
    console.warn(`Failed to load image: ${imagePath}`);
    return fallbackUrl || '/placeholder-image.jpg';
  }
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (urls: string[]): Promise<void> => {
  try {
    await Promise.all(urls.map(url => preloadImage(url)));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

// Image optimization utilities
export const getOptimizedImageUrl = (
  baseUrl: string,
  width?: number,
  height?: number,
  quality: number = 80
): string => {
  if (baseUrl.includes('pexels.com')) {
    let optimizedUrl = baseUrl;
    if (width && height) {
      optimizedUrl += `&w=${width}&h=${height}&fit=crop`;
    } else if (width) {
      optimizedUrl += `&w=${width}`;
    }
    return optimizedUrl;
  }
  return baseUrl;
};

// Responsive image utilities
export const getResponsiveImageSizes = (baseUrl: string) => ({
  mobile: getOptimizedImageUrl(baseUrl, 480),
  tablet: getOptimizedImageUrl(baseUrl, 768),
  desktop: getOptimizedImageUrl(baseUrl, 1200),
  large: getOptimizedImageUrl(baseUrl, 1920)
});