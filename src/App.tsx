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
import SectionWrapper from "./SectionWrapper";

const App: React.FC = () => {
  const assetsLoaded = useAssetsLoaded();
  const [opacity, setOpacity] = useState(0);
  useLenis();

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 2000);
  }, []);


  return (
    <div className="container">
      {!assetsLoaded ? (
        <div className="loading-screen">
          <Lottie animationData={animationData} className="lottie-logo" loop={true} />
          <p>Wait for assets to load . . .</p>
        </div>
      ) : (
        <div style={{ opacity: opacity }}>
        <ScrollProgressCircle />
        <Navbar />          
        <section id="home" className="section dark">
            <WelcomePage />
          </section>
        <section id="about" className="section dark">
          <AboutPage />
        </section>
        <section id="skills" className="section dark">
          <SkillsPage />
        </section>
        <section id="projects" className="section dark">
          <ProjectsPage />
        </section>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Fanirintsoa Mathieu. All rights reserved.</p>
        </footer>
      </div>
      )}
    </div>
  );
};

export default App;
