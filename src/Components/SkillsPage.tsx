import React from "react";
import "./SkillsPage.css";
import { Fade } from "react-awesome-reveal";
import HexagonContainer from "./HexagonContainer";

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
          <HexagonContainer />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer />
          <HexagonContainer />
        </div>

        <div className="third-line">
          <HexagonContainer />
        </div>
        <div className="second-line hexagon-row">
          <HexagonContainer />

          <HexagonContainer />
        </div>

        <div className="third-line">
          <HexagonContainer />
        </div>
        <div className="second-line hexagon-row">
          <HexagonContainer />

          <HexagonContainer />
        </div>

        <div className="third-line">
          <HexagonContainer />
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
