import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = (): void => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjusts the smoothness (higher = smoother)
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // Custom easing function
      wheelMultiplier: 0.7  , // Controls scroll speed
      infinite: false, // Set true if you want infinite scrolling
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
