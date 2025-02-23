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
          <Fade direction="up" fraction={0.1} triggerOnce={true} cascade>
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
              in Computer Science, Applied Statistics, and Artificial
              Intelligence. Besides my studies, I also work as a frontend
              developer and graphic designer freelancer.
            </p>
            <p className="intro">
              Since my childhood, I have always been fascinated with the world
              of  <span className="yellow-highlight">IT</span>, with its limitless potential for innovation and
              problem-solving. As I also have a great admiration for <span className="yellow-highlight">visual arts </span>
              like graphic design, illustration, drawing, photography, and
              videography. As <strong> Cameron Conor </strong> once said :{" "}
              <i>
                " Passion is the fuel that ignites creativity, transforming
                dreams into art. "{" "}
              </i>
            </p>
            <p className="intro">
              I am a <span className="yellow-highlight">resourceful and autonomous problem-solver</span>, always finding
              innovative solutions and <span className="yellow-highlight">adapting</span> quickly to new challenges. My
              ability to learn independently allows me to face complex tasks, while my adaptability ensures I can navigate
              changing environments with ease. Whether working solo or in a
              team, I stay <span className="yellow-highlight">efficient</span>, and <span className="yellow-highlight">proactive</span> in achieving my
              goals.
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
