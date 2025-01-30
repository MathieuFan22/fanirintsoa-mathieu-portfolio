import React from "react";
import "./WelcomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
  faFacebookMessenger,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";

const WelcomePage: React.FC = () => {
  return (
    <section className="welcome-section">
      <div className="left-side">
        <h1>HELLOO</h1>
        <h2>
          <span className="firstname">I'm</span>{" "}
          <div className="underline-name">
            <span>Mathieu</span>
            <Fade direction="left">
              <img src="/hand drawn underline.png" alt="Underline" />
            </Fade>
          </div>
        </h2>
        <div className="function">Developer / Designer</div>
        <p>
          I've spent the last 5 years building and scaling software for some
          pretty cool companies. I also teach people to paint online incase
          you've got an empty canvas layin' around{" "}
        </p>
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
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
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
