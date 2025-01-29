import React from "react";
import "./InfiniteSlider.css";

const technologies = [
  "React", "Node.js", "JavaScript", "TypeScript", "Python", "CSS", "HTML", "MongoDB", "GraphQL", "Redux"
];

const InfiniteSlider: React.FC = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="text-item">{tech}</div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
