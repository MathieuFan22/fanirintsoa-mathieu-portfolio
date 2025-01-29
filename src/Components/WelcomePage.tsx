import React from "react";
import "./WelcomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const WelcomePage: React.FC = () => {
  return (
    <section className="welcome-section">
      <div className="left-side">
        <h1>HELLOO</h1>
        <h2>
          <span className="firstname">I'm</span> Mathieu
        </h2>
        <div className="function">Developer / Designer</div>
        <p>I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online incase you've got an empty canvas layin' around </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="right-side">
        <img className="image-circle" src="/me.jpg" alt=""  />
      </div>
      
    </section>
  );
};

export default WelcomePage;
