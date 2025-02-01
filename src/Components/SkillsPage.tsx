import React from "react";
import "./SkillsPage.css";
import { Fade } from "react-awesome-reveal";

const SkillsPage: React.FC = () => {
  return (
    <div className="about-section">
      <div className="section-title">
        <div className="line"></div>
        <Fade direction="left">
        <div className="dot"></div>
          <h1>Skills</h1>
        </Fade>
        <div className="section-content">
          <div className="left-side"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
