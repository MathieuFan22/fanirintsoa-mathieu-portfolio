import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Fade } from "react-awesome-reveal";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Get all sections
      const sections = document.querySelectorAll("section");
      let currentSection = "#home"; // Default section

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 50) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false); // Close the menu on mobile
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" onClick={() => handleClick("#home")}>
          <div className="brand">
            <img className="logo" src="/logo.png" alt="Logo" />
            <div className="name-logo">
              <Fade direction="right">Fanirintsoa</Fade>
              <Fade direction="left">Mathieu</Fade>
            </div>
          </div>
        </a>

        {/* Burger Menu Button */}
        <div
          className={`burger-menu ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "active" : "inactive"}`}>
          {["#home", "#about", "#skills", "#projects", "#contact"].map((id) => (
            <li key={id}>
              <a
                href={id}
                className={activeSection === id ? "active" : ""}
                onClick={() => handleClick(id)}
              >
                {id.replace("#", "").charAt(0).toUpperCase() + id.slice(2)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
