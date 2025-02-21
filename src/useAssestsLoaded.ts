import { useEffect, useState } from 'react';

const useAssetsLoaded = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    // Function to check if all images are loaded
    const checkImagesLoaded = () => {
      const images = Array.from(document.querySelectorAll('img'));
      if (images.length === 0) return Promise.resolve();

      return Promise.all(
        images.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) resolve();
              else {
                img.addEventListener('load', () => resolve());
                img.addEventListener('error', () => resolve());
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
      }, 5000);
    });
  }, []);

  return assetsLoaded;
};

export default useAssetsLoaded;