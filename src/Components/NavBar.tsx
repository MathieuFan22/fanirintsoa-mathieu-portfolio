import React, { useState, useEffect } from "react";
import "../Styles//navbar.css";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../ThemeContext";

const Navbar: React.FC = () => {
  const { isLightMode, toggleTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = document.querySelectorAll("section");
      let currentSection = "home";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isLightMode ? "light" : "dark"} ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="navbar-container">
        <a href="#home">
          <div className={`brand ${isLightMode ? "light" : "dark"}`}>
            <img className="logo" src="/logo.png" alt="Logo" />
            <div className="name-logo">
              <Fade direction="right">Fanirintsoa</Fade>
              <Fade direction="left">Mathieu</Fade>
            </div>
          </div>
        </a>

        <div
          className={`burger-menu ${isOpen ? "open" : ""} ${
            isLightMode ? "light" : "dark"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul
          className={`nav-links ${isOpen ? "active" : "inactive"} ${
            isLightMode ? "light" : "dark"
          }`}
        >
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
                onClick={() => {
                  setActiveSection(section);
                  setIsOpen(false);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}

          

                    <li>
                      <FontAwesomeIcon
                        icon={isLightMode ? faSun : faMoon}
                        className="light-switch-icon"
                        onClick={toggleTheme}
                      />
                    </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
