import React from "react";
import "./AboutPage.css";
import { Fade } from "react-awesome-reveal";
const AboutPage: React.FC = () => {
  return (
    <div className="about-section">
      <div className="section-title">
        <Fade direction="right">
          <div className="dot"></div>
          <h1>About</h1>
        </Fade>
        <div className="line"></div>
      </div>
      <div className="section-content">
        <div className="left-side">
          <Fade direction="up" fraction={0.1} triggerOnce={false} cascade>
            <p className="intro">
              <span className="alinea">I</span> am Fanirintsoa Mathieu, a
              Malagasy developer and graphic designer based in Antananarivo.
              Currently pursuing higher education at{" "}
              <a
                href="https://www.facebook.com/ISPM2014"
                target="_blank"
                className="link"
              >
                ISPM Antsobolo
              </a>{" "}
              in Computer Science, Applied Statistics, and
              Artificial Intelligence. Besides my studies, I also work as a
              frontend developer and graphic designer freelancer.
            </p>
            <p className="intro">
              I was passionate about the IT world since my childhood, and I have
              a deep appreciation for visual arts, including graphic design,
              illustration, drawing, photography, and videography.
            </p>
          </Fade>
        </div>
        <div className="right-side">
          <div className="image-wrapper">
            <img className="image" src="/me.png" alt="Profile" />
          </div>
          <div className="whatido-title">What I offer ?</div>
          <div className="whatido">
            <div className="whatido-item dev">Mobile App</div>
            <div className="whatido-item dev">Desktop App</div>
            <div className="whatido-item dev">Website</div>
            <div className="whatido-item design">Social media Designs</div>
            <div className="whatido-item design">UI/UX Designs</div>
            <div className="whatido-item design">Logo Designs</div>
            <div className="whatido-item design">Packaging Designs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
