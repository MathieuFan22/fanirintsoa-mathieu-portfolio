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
        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/html.png"} />
          <HexagonContainer url={"/Skills/html.png"} />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/css.png"} />
          <HexagonContainer url={"/Skills/js.png"} />
          <HexagonContainer url={"/Skills/js.png"} />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/react.png"} />
          <HexagonContainer url={"/Skills/react.png"} />
        </div>
        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/css.png"} />
          <HexagonContainer url={"/Skills/js.png"} />
          <HexagonContainer url={"/Skills/js.png"} />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/react.png"} />
          <HexagonContainer url={"/Skills/react.png"} />
        </div>
        <div className="margin"></div>

        <div className="first-line">
          <HexagonContainer url={"/Skills/html.png"} />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/css.png"} />
          <HexagonContainer url={"/Skills/js.png"} />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/react.png"} />
        </div>
        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/flutter.png"} />

          <HexagonContainer url={"/Skills/nest.png"} />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/mongo.png"} />
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
