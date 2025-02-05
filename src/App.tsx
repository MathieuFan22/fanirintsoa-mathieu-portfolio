import { Fade } from "react-awesome-reveal";
import Navbar from "./Components/NavBar";
import "./App.css";
import "./ui.css";
import WelcomePage from "./Components/WelcomePage";
import AboutPage from "./Components/AboutPage";
import InfiniteSlider from "./Components/InfiniteSlider";
import SkillsPage from "./Components/SkillsPage";
import ProjectsPage from "./Components/ProjectsPage";
import useLenis from "./useLenis";
import ScrollProgressCircle from "./ScrollProgressCircle";
import { useEffect, useState } from "react";
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    // Wait for fonts to load
    document.fonts.ready.then(() => {
      checkIfLoaded();
    });

    // Ensure full page is loaded
    window.onload = checkIfLoaded;
  }, []);

  // Callback function for images
  const onImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const checkIfLoaded = () => {
    if (loadedImages >= totalImages) {
      setIsLoading(false);
    }
  };
  useLenis(); 
  return (
    <div className="container">
            {isLoading ? (
        <div className="loading-screen">
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
      <ScrollProgressCircle />
      <Navbar />
      <section id="home" className="section dark">
        <Fade direction="left">
          <WelcomePage />
        </Fade>
      </section>
      <section id="about" className="section dark">
        <AboutPage />
      </section>
      <section id="skills" className="section dark">
        <SkillsPage />
      </section>
      <InfiniteSlider />
      <section id="projects" className="section dark">
        <ProjectsPage />
      </section>
      <section id="projects" className="section dark">
        <ProjectsPage />
      </section>
      <footer className="footer">
      <p>© {new Date().getFullYear()} Fanirintsoa Mathieu. All rights reserved.</p>
    </footer>
    </>
  )}
    </div>
  );
};
export default App;
