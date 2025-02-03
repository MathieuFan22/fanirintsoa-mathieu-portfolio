import React from "react";
import "./SkillsPage.css";
import { Fade } from "react-awesome-reveal";

const SkillsPage: React.FC = () => {
  const images = [
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
  ];
  const hexagonRows = [[0], [1, 2], [3, 4, 5], [6, 7], [8]];
  return (
    <div className="about-section">
      <div className="section-title">
        <Fade direction="left">
          <div className="dot"></div>
          <h1>Skills</h1>
        </Fade>
        <div className="line"></div>
        
      </div>
      <div className="section-content">
          <div className="left-side">
            <div className="hexagon-container">
              {hexagonRows.map((row, rowIndex) => (
                <div key={rowIndex} className="hexagon-row">
                  {row.map((imageIndex) => (
                    <div key={imageIndex} className="hexagon">
                      <img
                        src={images[imageIndex]}
                        alt={`hexagon-${imageIndex}`}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default SkillsPage;
