import React from "react";
import "./InfiniteSlider.css";

const technologies = [
  "Flutter",
  "React TS",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "CSS",
  "HTML",
  "MongoDB",
  "Figma",
  "A. Illustrator",
  "A. Photoshop",
  "A. Xd",
  "Nest Js",
  "Git",
  "Github",
];

const InfiniteSlider: React.FC = () => {
  return (
    <div className="slider-container">
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
