import React from "react";
import "./AboutPage.css";
import { Fade } from "react-awesome-reveal";

const AboutPage: React.FC = () => {
  return (
    <div className="about-section">
      <div className="section-title">
        <Fade direction="right">
          {/* <div className="underline-name"> */}
          <div className="dot"></div>
          <h1>About</h1>

          {/* <img src="/hand drawn circle.png" alt="Underline" /> */}
          {/* </div> */}
        </Fade>
        <div className="line"></div>
      </div>
      <Fade direction="right">
        <div className="section-content">
          <div className="left-side">
            <p className="intro">
              <span className="alinea">I</span> am Fanirintsoa Mathieu, a
              Malagasy developer and graphic designer based in Antananarivo.
              Currently pursuing higher education at ISPM Antsobolo in Computer
              Science, Applied Statistics, and Artificial Intelligence. Besides
              my studies, I also work as a frontend developer and graphic
              designer freelancer.
            </p>
            <p className="intro">
              I was passionate about the IT world since my childhood, and I have
              a deep appreciation for visual arts, including graphic design,
              illustration, drawing, photography, and videography.
            </p>
          </div>
          <div className="right-side">
            <div className="image-wrapper">
              <img className="image-circle" src="/me.png" alt="Profile" />
            </div>
            <div className="whatido">
              <div className="whatido-item dev">Mobile App</div>
              <div className="whatido-item dev">Desktop App</div>
              <div className="whatido-item dev">Website</div>
              <div className="whatido-item design">Social media Designs</div>
              <div className="whatido-item design">UI/UX Designs</div>
              <div className="whatido-item design">Logo Designs</div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AboutPage;
