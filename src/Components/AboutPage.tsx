import React from "react";
import "./AboutPage.css";
import { Fade } from "react-awesome-reveal";

const AboutPage: React.FC = () => {
  return (
    <div className="about-section">
      <div className="section-title">
        <Fade direction="right">
          {/* <div className="underline-name"> */}
            <h1>About</h1>

            {/* <img src="/hand drawn circle.png" alt="Underline" /> */}
          {/* </div> */}
        </Fade>
        <div className="line"></div>
      </div>
      <div className="section-content">
        <div className="left-side">
          <img className="image-circle" src="/me.jpg" alt="" />
        </div>
        <div className="right-side">
          <p>
            Hey! I'm Bob, if you haven't already gathered that by now. I'm a
            painter turned software engineer from Daytona, Florida. I specialize
            in the backend, primarily Node and Rust, but love building with
            whatever tools are right for the job. I currently work for Google on
            Google Photos. I also toss in my ¢2 with the design systems teams
            from time to time
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
