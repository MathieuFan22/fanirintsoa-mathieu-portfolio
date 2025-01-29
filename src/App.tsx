// src/App.tsx
import React from "react";
import Navbar from "./Components/NavBar";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="section dark">
        <h1>Welcome to the Dark Theme Page</h1>
        <h1>Welcome to the Dark Theme Page</h1>
        <h1>Welcome to the Dark Theme Page</h1>
        
      </section>
      <section id="about" className="section dark">
        <h1>About Section</h1>
      </section>
      <section id="services" className="section dark">
        <h1>Services Section</h1>
      </section>
      <section id="contact" className="section dark">
        <h1>Contact Section</h1>
      </section>
    </div>
  );
};

export default App;
