import React from "react";
import "./contact-page.css";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../ThemeContext";
import { faEnvelope, faWarning } from "@fortawesome/free-solid-svg-icons";

const ContactPage: React.FC = () => {
  const email = "fanirintsoamathieu@gmail.com";

  const mailtoLink = `mailto:${email}`;

  const { isLightMode } = useTheme();
  return (
    <div className="contact-section">
      <div className="section-title">
        <Fade direction="left">
          <div className="dot"></div>
          <h1>Contacts</h1>
        </Fade>
        <div className={`line ${isLightMode? "light" : "dark"}`}></div>
      </div>
      <div className="section-content">
        <h2 className="get-in-touch">GET IN TOOUCH</h2>
        <p className="contact-info">
          Got a project idea, or need a developer or graphic designer? Don’t hesitate to reach
          out! I'm always open to new opportunities, collaborations, or a
          friendly chat. Let’s bring your ideas to life, I'll get back to you as soon as possible!
        </p>
        <div className="contact-social-links">
        <a
            href={mailtoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            fanirintsoamathieu@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/mathieu22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            Fanirintsoa Mathieu
          </a>
          <a
            href="https://wa.me/qr/K6TKT2TLZTAWN1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            +261 34 72 363 79
          </a>
          <a
            href="https://www.facebook.com/fanirintsoa.mathieu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
            Fanirintsoa Mathieu
          </a>
          <a
            href="https://x.com/Fanirintsoa_22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
            Fanirintsoa Mathieu
          </a>
          <a
            href="https://github.com/MathieuFan22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            MathieuFan22
          </a>
        </div>
      </div>
      <div className="disclaimer">
            <p>
            <FontAwesomeIcon icon={faWarning} /> This website is a work in progress, some sections have not been finished yet.
            </p>
          </div>
    </div>
  );
};
export default ContactPage;
