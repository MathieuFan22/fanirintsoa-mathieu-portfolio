import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const useScrollAnimation = () => {
    useEffect(() => {
      // Create timeline for smooth animation
      const tl = gsap.timeline({
        defaults: { duration: 0 },
        paused: true,
        smoothChildTiming: true
      });
  
      // Track scroll position precisely
      const container = document.querySelector('.container');
      if (!container) return;
  
      const scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
        markers: false,
        anticipatePin: 1,
        
        onUpdate: (self) => {
          // Calculate exact scroll progress (0 to 1)
          const progress = self.progress;
          
          // Move elements proportionally to scroll
          gsap.to('.h1-container', {
            x: progress * 100, // Scale progress to pixels
            ease: 'none',
            immediateRender: true
          });
          
          gsap.to('.h2-container', {
            x: progress * -100, // Negative for opposite direction
            ease: 'none',
            immediateRender: true
          });
        }
      });
  
      // Cleanup on unmount
      return () => {
        tl.kill();
        scrollTrigger.kill();
        ScrollTrigger.refresh();
      };
    }, []);
  
    return {};
  };

  export default useScrollAnimation;