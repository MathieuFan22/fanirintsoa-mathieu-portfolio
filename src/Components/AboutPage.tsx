import React from "react";
import "./AboutPage.css";
import { Fade } from "react-awesome-reveal";

const AboutPage: React.FC = () => {
  return (
    <div className="about-section">
      <div className="section-title">
        <Fade direction="left">
          <h1>About</h1>
        </Fade>
        <div className="line"></div>
      </div>
      <div className="section-content">
        <div className="left-side">
          <p>
            Hey! I'm Bob, if you haven't already gathered that by now. I'm a
            painter turned software engineer from Daytona, Florida. I specialize
            in the backend, primarily Node and Rust, but love building with
            whatever tools are right for the job. I currently work for Google on
            Google Photos. I also toss in my ¢2 with the design systems teams
            from time to time (once an artist, always an artist, amirite?).
            Outside of work, I still love to paint. Any given Sunday you'll find
            me scribbling some happy clouds with my son ☁️ I even teach courses
            online if you're looking to learn! I'm passively looking for new
            positions where I can merge my love for code with my love for the
            canvas. If you think you've got an opening that I might like, let's
            connect{" "}
          </p>
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
