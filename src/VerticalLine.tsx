import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const VerticalLine: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-20px 0px" });

  useEffect(() => {
    if (inView) {
      // Delay of 100ms then animate height to 100%
      controls.start({ height: "100%", transition: { delay: 2, duration: 3, ease: "easeOut" } });
    } else {
      // Animate back to 0 when not in view
      controls.start({ height: "0%", transition: { duration: 1, ease: "easeIn" } });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ height: "0%" }}
      animate={controls}
      style={{
        width: "1px",
        backgroundColor: "#fff",
        position: "absolute",
        left: "30px",
        top: "20%",
        bottom: "30%",
        
      }}
    />
  );
};

export default VerticalLine;
