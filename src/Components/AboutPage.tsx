import React from "react";
import "./AboutPage.css";
import { Fade } from "react-awesome-reveal";
import VScodeScrShot from "./VScodeScrShot";

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
      <div className="section-content">
        <div className="left-side">
          <div className="image-wrapper">
            <img className="image-circle" src="/me.png" alt="Profile" />
          </div>
        </div>
        <div className="right-side">
          <p>I'm Mathieu, a Malagasy developer and graphic designer with a strong interest in the digital world. 
            I studied at ISPM and am deeply involved in visual art. Curious and self-taught, 
            I enjoy creating innovative and visually appealing solutions that blend performance with creativity. 
            As a freelancer, I’m always eager to take on new projects and adapt to new challenges. 
            My goal is to turn ideas into unique and impactful digital experiences. 
            Feel free to reach out if you're looking for someone to bring your vision to life!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
