import { Fade } from "react-awesome-reveal";
import Navbar from "./Components/NavBar";
import "./App.css";
import WelcomePage from "./Components/WelcomePage";
import AboutPage from "./Components/AboutPage";
const App: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <section id="home" className="section dark">
        <Fade direction="left" >
          <WelcomePage/>
        </Fade>
      </section>
      <section id="about" className="section dark">
       <AboutPage/>
      </section>
      <section id="services" className="section dark">
        <Fade direction="left">
          <h1>Services Section</h1>
        </Fade>
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
