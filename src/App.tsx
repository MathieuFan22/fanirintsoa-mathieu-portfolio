import { Fade } from "react-awesome-reveal";
import Navbar from "./Components/NavBar";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="section dark">
        <Fade direction="left" >
          <h1>Welcome to the Dark Theme Page</h1>
          <h4 className="child">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio suscipit aspernatur necessitatibus tenetur, saepe quaerat laborum soluta est debitis officia consequuntur laboriosam eaque, beatae mollitia minus, nostrum placeat praesentium!</h4>

        </Fade>
      </section>
      <section id="about" className="section dark">
        <Fade direction="left">
          <h1>About Section</h1>
        </Fade>
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
