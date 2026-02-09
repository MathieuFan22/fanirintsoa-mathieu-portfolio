import React, { useEffect, useState } from "react";
import "../Styles/ScrollProgressCircle.css";
import { useTheme } from "../ThemeContext";

const ScrollProgressCircle: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isLightMode } = useTheme();
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={`progress-container ${isLightMode? "light" : "dark"}`} onClick={scrollToTop}>
      <svg className="progress-circle" width="50" height="50">
        <circle cx="25" cy="25" r="20" strokeWidth="4" stroke="transparent" fill="none" />
        <circle
          cx="25"
          cy="25"
          r="20"
          strokeWidth="4"
          stroke= {isLightMode? "rgb(206, 0, 0)" : "darkRed"}
          fill="none"
          strokeDasharray="125.6"
          strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
          strokeLinecap="round"
        />
      </svg>
      <div className="progress-text">{scrollProgress}%</div>
    </div>
  );
};

export default ScrollProgressCircle;
