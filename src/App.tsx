import { useEffect, useState } from "react";
import Navbar from "./Components/NavBar";
import "./App.css";
import "./ui.css";
import WelcomePage from "./Components/WelcomePage";
import AboutPage from "./Components/AboutPage";
import SkillsPage from "./Components/SkillsPage";
import ProjectsPage from "./Components/ProjectsPage";
import useLenis from "./useLenis";
import ScrollProgressCircle from "./ScrollProgressCircle";
import Lottie from "lottie-react";
import animationData from "./AnimatedLogo.json";
import useAssetsLoaded from "./useAssestsLoaded";
import ContactPage from "./Components/ContactPage";
import { useTheme } from "./ThemeContext"; // Import theme context

const App: React.FC = () => {
  const assetsLoaded = useAssetsLoaded();
  const [opacity, setOpacity] = useState(0);
  const { isLightMode } = useTheme(); // Access global theme state
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
