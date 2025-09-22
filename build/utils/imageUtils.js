// Utility functions for image handling
export const getImageUrl = (imagePath, fallbackUrl) => {
    try {
        // In production, this would handle local asset loading
        // For now, we'll use the fallback URL or return the path
        return fallbackUrl || imagePath;
    }
    catch (error) {
        console.warn(`Failed to load image: ${imagePath}`);
        return fallbackUrl || '/placeholder-image.jpg';
    }
};
export const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
    });
};
export const preloadImages = async (urls) => {
    try {
        await Promise.all(urls.map(url => preloadImage(url)));
    }
    catch (error) {
        console.warn('Some images failed to preload:', error);
    }
};
// Image optimization utilities
export const getOptimizedImageUrl = (baseUrl, width, height, quality = 80) => {
    if (baseUrl.includes('pexels.com')) {
        let optimizedUrl = baseUrl;
        if (width && height) {
            optimizedUrl += `&w=${width}&h=${height}&fit=crop`;
        }
        else if (width) {
            optimizedUrl += `&w=${width}`;
        }
        return optimizedUrl;
    }
    return baseUrl;
};
// Responsive image utilities
export const getResponsiveImageSizes = (baseUrl) => ({
    mobile: getOptimizedImageUrl(baseUrl, 480),
    tablet: getOptimizedImageUrl(baseUrl, 768),
    desktop: getOptimizedImageUrl(baseUrl, 1200),
    large: getOptimizedImageUrl(baseUrl, 1920)
});
