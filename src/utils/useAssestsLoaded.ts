import { useEffect, useState } from 'react';

const useAssetsLoaded = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
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

    const checkFontsLoaded = () => {
      return document.fonts.ready;
    };

    Promise.all([checkImagesLoaded(), checkFontsLoaded()]).then(() => {
      setTimeout(() => {
        
        setAssetsLoaded(true);
      }, 5000);
    });
  }, []);

  return assetsLoaded;
};

export default useAssetsLoaded;