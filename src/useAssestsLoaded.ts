// useAssetsLoaded.ts
import { useEffect, useState } from 'react';

const useAssetsLoaded = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    // Function to check if all images are loaded
    const checkImagesLoaded = () => {
      const images = Array.from(document.querySelectorAll('img'));
      if (images.length === 0) return Promise.resolve(); // No images to load

      return Promise.all(
        images.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) resolve();
              else {
                img.addEventListener('load', () => resolve());
                img.addEventListener('error', () => resolve()); // Handle errors
              }
            }),
        ),
      );
    };

    // Function to check if all fonts are loaded
    const checkFontsLoaded = () => {
      return document.fonts.ready;
    };

    // Wait for both images and fonts to load
    Promise.all([checkImagesLoaded(), checkFontsLoaded()]).then(() => {
      setTimeout(() => {
        
        setAssetsLoaded(true);
      }, 4000);
    });
  }, []);

  return assetsLoaded;
};

export default useAssetsLoaded;