import React from "react";
import "./AboutPage.css";
import { Fade } from "react-awesome-reveal";

const AboutPage: React.FC = () => {
  return (
    <div className="about-section">
      <div className="left-side">
        <Fade direction="left">
          <h1>About</h1>
        </Fade>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default AboutPage;
