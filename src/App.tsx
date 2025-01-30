import { Fade } from "react-awesome-reveal";
import Navbar from "./Components/NavBar";
import "./App.css";
import WelcomePage from "./Components/WelcomePage";
import AboutPage from "./Components/AboutPage";
import InfiniteSlider from "./Components/InfiniteSlider";
import SkillsPage from "./Components/SkillsPage";
import ProjectsPage from "./Components/ProjectsPage";
import useLenis from "./useLenis";
import CursorMask from "./CursorMask";
const App: React.FC = () => {
  useLenis(); 
  return (
    <div className="container">
      {/* <CursorMask /> */}
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
      <section id="contact" className="section dark">
        <Fade direction="left">
          <h1>Contact Section</h1>
        </Fade>
      </section>
    </div>
  );
};
export default App;
