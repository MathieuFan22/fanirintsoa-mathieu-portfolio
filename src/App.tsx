import { useEffect, useState } from "react";
import Navbar from "./Components/NavBar";
import "./App.css";
import "./ui.css";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import useLenis from "./utils/useLenis";
import Lottie from "lottie-react";
import animationData from "./AnimatedLogo.json";
import useAssetsLoaded from "./utils/useAssestsLoaded";
import ContactPage from "./Pages/ContactPage";
import { useTheme } from "./ThemeContext";
import ProjectsPage from "./Pages/ProjectsPage";
import WelcomePage from "./Pages/WelcomePage";
import ScrollProgressCircle from "./ui/ScrollProgressCircle";

const App: React.FC = () => {
  const assetsLoaded = useAssetsLoaded();
  const [opacity, setOpacity] = useState(0);
  const { isLightMode } = useTheme();
  useLenis();

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 2000);
  }, []);

  return (
    <div className={`container ${isLightMode ? "light" : "dark"}`}>
      {!assetsLoaded ? (
        <div className="loading-screen">
          <Lottie animationData={animationData} className="lottie-logo" loop={true} />
          <p>Wait for assets to load . . .</p>
        </div>
      ) : (
        <div style={{ opacity: opacity }}>
          <ScrollProgressCircle />
          <Navbar />
          <section id="home" className="section ">
            <WelcomePage />
          </section>
          <section id="about" className="section ">
            <AboutPage />
          </section>
          <section id="skills" className="section ">
            <SkillsPage />
          </section>
          <section id="projects" className="section ">
            <ProjectsPage />
          </section>
          <section id="contact" className="section ">
            <ContactPage />
          </section>
          <footer className="footer">
            <p>© {new Date().getFullYear()}, Fanirintsoa Mathieu.</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
