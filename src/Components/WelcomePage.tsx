import "./WelcomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";
import HackerText from "./HackerStyleText";

const WelcomePage: React.FC = () => {

  return (
    <section className="welcome-section">
      <div className="left-side">
        <h1>
          HELLOO <span className="world">WOORLD</span>
        </h1>
        <h2>
          <span className="firstname">I'm</span>{" "}
          <div className="underline-name">
            <span>
              <HackerText text="Mathieu" delay={50} randomCycleDuration={400} />
            </span>
            <Fade direction="left" triggerOnce>
              <img src="/hand drawn underline.png" alt="Underline" />
            </Fade>
          </div>
        </h2>
        <Fade direction="left">
          <div className="function">Developer / Designer</div>
          <p>
            Passionate and fascinated by the IT world, creative, and resourceful.
            I turn ideas into unique digital experiences
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/mathieu22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://wa.me/qr/K6TKT2TLZTAWN1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.facebook.com/fanirintsoa.mathieu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://x.com/Fanirintsoa_22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://github.com/MathieuFan22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="download-resume">
            <button>
              My resume <span className="padding"></span>
              <FontAwesomeIcon icon={faArrowDown} className="up-right-icon" />
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default WelcomePage;