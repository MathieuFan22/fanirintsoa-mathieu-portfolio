import "./SkillsPage.css";
import { Fade } from "react-awesome-reveal";
import HexagonContainer from "./HexagonContainer";
import InfiniteSlider from "./InfiniteSlider";
import { useState } from "react";

const SkillsPage: React.FC = () => {
  const [isFrontend, setisFrontend] = useState(false);
  const [isBackend, setisBackend] = useState(false);
  const [isTools, setisTools] = useState(false);
  const [isDesign, setisDesign] = useState(false);
  const [isFiltred, setisFiltred] = useState(false);
  const showFrontend = () => {
    setisFrontend(true);
    setisBackend(false);
    setisTools(false);
    setisDesign(false);
    setisFiltred(true);
  }
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
        <div className="filter-skills">
        <div className="filter-skills-items " onClick={showFrontend}>Frontend</div>
        <div className="filter-skills-items backend-skills">Backend</div>
        <div className="filter-skills-items tools-skills">Tools</div>
        <div className="filter-skills-items design-skills">Design</div>
        </div>
        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/html.png"} classNameFilter={isFrontend? "frontend-skills" : ""} />
          <HexagonContainer url={"/Skills/html.png"} classNameFilter={isFrontend? "frontend-skills" : ""} />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/css.png"} classNameFilter={isFrontend? "frontend-skills" : ""} />
          <HexagonContainer url={"/Skills/ai.png"} classNameFilter={isDesign? "design-skills" : ""} />
          <HexagonContainer url={"/Skills/ps.png"} classNameFilter={isDesign? "design-skills" : ""} />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/react.png"} classNameFilter={isFrontend? "frontend-skills" : ""} />
          <HexagonContainer url={"/Skills/figma.png"} classNameFilter={isDesign? "design-skills" : ""} />
        </div>
        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/css.png"} classNameFilter={isFrontend? "frontend-skills" : ""} />
          <HexagonContainer url={"/Skills/js.png"} classNameFilter={isFrontend? "frontend-skills" : ""} />
          <HexagonContainer url={"/Skills/ts.png"} classNameFilter={isFrontend? "frontend-skills backend-skills" : ""} />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/git.png"} classNameFilter={isTools? "tools-skills" : ""} />
          <HexagonContainer url={"/Skills/react.png"} classNameFilter={isFrontend? "frontend-skills" : ""} />
        </div>
        <div className="margin"></div>

        <div className="first-line">
          <HexagonContainer url={"/Skills/docker.png"} classNameFilter={isTools? "tools-skills" : ""} />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/linux.png"} classNameFilter={isTools? "tools-skills" : ""} />
          <HexagonContainer url={"/Skills/github.png"} classNameFilter={isTools? "tools-skills" : ""} />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/react.png"} classNameFilter={isFrontend? "frontend-skills" : ""} />
        </div>
        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/flutter.png"} classNameFilter={isFrontend? "frontend-skills" : ""} />

          <HexagonContainer url={"/Skills/nest.png"} classNameFilter={isBackend? "backend-skills" : ""} />
        </div>

        <div className="second-line hexagon-row">
          <HexagonContainer url={"/Skills/mongo.png"} classNameFilter={isBackend? "backend-skills" : ""} />
        </div>
      </div>
      <InfiniteSlider />
    </div>
  );
};

export default SkillsPage;
