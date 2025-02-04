import React from "react";
import "./ProjectsPage.css";
import { Fade } from "react-awesome-reveal";

const ProjectsPage: React.FC = () => {
  return (
    <div className="about-section">
      <div className="section-title">
        <Fade direction="left">
          <div className="dot"></div>
          <h1>Projects</h1>
        </Fade>
        <div className="line"></div>
        <div className="section-content">
          <div className="left-side">
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
