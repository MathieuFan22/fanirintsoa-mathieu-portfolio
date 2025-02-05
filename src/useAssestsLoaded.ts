// useAssetsLoaded.ts
import { useEffect, useState } from 'react';

const useAssetsLoaded = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    // Example: Check if images are loaded
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    const imageLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setAssetsLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener('load', imageLoaded);
        img.addEventListener('error', imageLoaded); // Handle errors
      }
    });

    // Example: Check if fonts are loaded
    document.fonts.ready.then(() => {
      setAssetsLoaded(true);
    });

    // Cleanup
    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', imageLoaded);
        img.removeEventListener('error', imageLoaded);
      });
    };
  }, []);

  return assetsLoaded;
};

export default useAssetsLoaded;