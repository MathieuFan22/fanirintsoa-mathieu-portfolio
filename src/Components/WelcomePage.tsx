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
          I'm <span className="firstname">Fanirintsoa</span> Mathieu
        </h2>
        <div className="function">Developer / Designer</div>
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
    </section>
  );
};

export default WelcomePage;
