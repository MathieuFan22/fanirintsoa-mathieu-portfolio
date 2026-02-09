import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const useScrollAnimation = () => {
    useEffect(() => {
    
      const tl = gsap.timeline({
        defaults: { duration: 0 },
        paused: true,
        smoothChildTiming: true
      });
  
    
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
        
          const progress = self.progress;
          
        
          gsap.to('.h1-container', {
            x: progress * 100,
            ease: 'none',
            immediateRender: true
          });
          
          gsap.to('.h2-container', {
            x: progress * -100,
            ease: 'none',
            immediateRender: true
          });
        }
      });
  
    
      return () => {
        tl.kill();
        scrollTrigger.kill();
        ScrollTrigger.refresh();
      };
    }, []);
  
    return {};
  };

  export default useScrollAnimation;