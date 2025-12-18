import "./welcome-page.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
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
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../ThemeContext";

const WelcomePage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { isLightMode } = useTheme();
  const h2X = useTransform(scrollYProgress, [0, 5], [0, 10500]);
  const h1X = useTransform(scrollYProgress, [0, 5], [0, -10500]);
  const [functionText] = useTypewriter({
    words: [
      "WebApp Developer",
      "Graphic Designer",
      "UI/UX Designer",
      "Mobile App Developer",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
  });
  const download_resume = (): void => {
    const link = document.createElement("a");
    link.href = "/CV_Fanirintsoa-Mathieu.pdf";
    link.download = "CV_Fanirintsoa-Mathieu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={`welcome-section ${isLightMode ? "light" : "dark"}`}>
      <div className={`left-side ${isLightMode ? "light" : "dark"}`}>
        <motion.h1 style={{ x: h1X, transition: "all 0s " }}>
          HELLOO <span className="world">WOORLD</span>
        </motion.h1>

        <motion.h2 style={{ x: h2X }}>
          <span className="firstname">I'm</span>{" "}
          <div className="underline-name">
            <span>
              <HackerText text="Mathieu" delay={50} randomCycleDuration={400} />
            </span>
            <Fade direction="left" triggerOnce delay={2000}>
              <img src="/hand drawn underline.png" alt="Underline" />
            </Fade>
          </div>
        </motion.h2>
        <Fade direction="left">
          <div className="function">{functionText}<Cursor cursorStyle="." /></div>
          <p>
            Passionate and fascinated by the IT world, creative, and
            resourceful. I turn ideas into unique digital experiences
          </p>
          <div className={`social-links ${isLightMode ? "light" : "dark"}`}>
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
          <div className={`download-resume ${isLightMode ? "light" : "dark"}`}>
            <button onClick={download_resume} className="download-resume-button">
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
