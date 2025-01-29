import React from "react";
import "./ProjectsPage.css";
import { Fade } from "react-awesome-reveal";

const ProjectsPage: React.FC = () => {
  return (
    <div className="about-section">
      <div className="left-side">
        <Fade direction="left">
          <h1>Projects</h1>
        </Fade>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default ProjectsPage;
