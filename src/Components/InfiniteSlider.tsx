import React from "react";
import "./infinite-slider.css";
import { useTheme } from "../ThemeContext";

const technologies = [
  "Flutter",
  "React TS",
  "Next.js",
  "Node.js",
  "Nest Js",
  "JavaScript",
  "TypeScript",
  "CSS",
  "Tailwind CSS",
  "HTML",
  "MongoDB",
  "Figma",
  "A. Illustrator",
  "A. Photoshop",
  "A. Xd",
  "Git",
  "Github",
];

const InfiniteSlider: React.FC = () => {
  const { isLightMode } = useTheme();
  return (
    <div className={`slider-container ${isLightMode? "light" : "dark"}`}>
      <div className="slider">
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="text-item">
            {tech} <div className="dot-spacing"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
