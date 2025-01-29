import React from "react";
import "./SkillsPage.css";
import { Fade } from "react-awesome-reveal";

const SkillsPage: React.FC = () => {
  return (
    <div className="about-section">
      <div className="section-title">
        <Fade direction="left">
          <h1>Skills</h1>
        </Fade>
        <div className="line"></div>
        <div className="section-content">
          <div className="left-side"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
