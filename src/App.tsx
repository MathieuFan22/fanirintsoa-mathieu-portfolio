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

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false); // Hide loading screen when everything is ready
    };

    // Wait for all images to load
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    if (images.length === 0) {
      handleLoad();
    } else {
      images.forEach((img) => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.onload = () => {
            loadedImages++;
            if (loadedImages === images.length) {
              handleLoad();
            }
          };
          img.onerror = () => {
            loadedImages++; // Prevent getting stuck if an image fails to load
            if (loadedImages === images.length) {
              handleLoad();
            }
          };
        }
      });
    }

    // Wait for fonts to load
    document.fonts.ready.then(handleLoad);

    // Ensure the entire page is loaded
    window.onload = handleLoad;
  }, []);
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
