import React from "react";
import "./SkillsPage.css";
import { Fade } from "react-awesome-reveal";

const SkillsPage: React.FC = () => {
 
  return (
    <div className="skills-section">
      <div className="section-title">
        <Fade direction="left">
          <div className="dot"></div>
          <h1>Skills</h1>
        </Fade>
        <div className="line"></div>
      </div>
      <div className="section-content">
        <div className="first-line">
          <div className="hexagon-container">
            <div className="hexagon-border"></div>
            <div className="hexagon">
              <img src="/logo.png" className="skill-logo" />
            </div>
          </div>
        </div>

        <div className="second-line hexagon-row">
          <div className="hexagon-container">
            <div className="hexagon-border"></div>
            <div className="hexagon">
              <img src="/logo.png" className="skill-logo" />
            </div>
          </div>

          <div className="hexagon-container">
            <div className="hexagon-border"></div>
            <div className="hexagon">
              <img src="/logo.png" className="skill-logo" />
            </div>
          </div>
        </div>

        <div className="third-line">
          <div className="hexagon-container">
            <div className="hexagon-border"></div>
            <div className="hexagon">
              <img src="/logo.png" className="skill-logo" />
            </div>
          </div>
        </div>
        <div className="second-line hexagon-row">
          <div className="hexagon-container">
            <div className="hexagon-border"></div>
            <div className="hexagon">
              <img src="/logo.png" className="skill-logo" />
            </div>
          </div>

          <div className="hexagon-container">
            <div className="hexagon-border"></div>
            <div className="hexagon">
              <img src="/logo.png" className="skill-logo" />
            </div>
          </div>
        </div>

        <div className="third-line">
          <div className="hexagon-container">
            <div className="hexagon-border"></div>
            <div className="hexagon">
              <img src="/logo.png" className="skill-logo" />
            </div>
          </div>
        </div>
        <div className="second-line hexagon-row">
          <div className="hexagon-container">
            <div className="hexagon-border"></div>
            <div className="hexagon">
              <img src="/logo.png" className="skill-logo" />
            </div>
          </div>

          <div className="hexagon-container">
            <div className="hexagon-border"></div>
            <div className="hexagon">
              <img src="/logo.png" className="skill-logo" />
            </div>
          </div>
        </div>

        <div className="third-line">
          <div className="hexagon-container">
            <div className="hexagon-border"></div>
            <div className="hexagon">
              <img src="/logo.png" className="skill-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
