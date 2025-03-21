import React from "react";
import "./project-page.css";
import { Fade } from "react-awesome-reveal";
import ProjectCards from "./ProjectCards";
import { useTheme } from "../ThemeContext";

const ProjectsPage: React.FC = () => {
  const { isLightMode } = useTheme();
  return (
    <div className="project-section">
      <div className="section-title">
        <Fade direction="left">
          <div className="dot"></div>
          <h1>Projects</h1>
        </Fade>
        <div className={`line ${isLightMode? "light" : "dark"}`}></div>
      </div>
      <div className="section-content-project">
        <div className="left-side">
        <Fade direction="left" fraction={0} triggerOnce={false} >
          {
            project.map((project, index) => (
              <ProjectCards
                key={index}
                projectTitle={project.projectTitle}
                projectTech={project.projectTech}
                projectDescription={project.projectDescription}
                imageSrcUrl={project.imageSrcUrl}
              />
            ))
          }
          </Fade>
          
        </div>
      </div>
    </div>
  );
};
const project = [
  {
    imageSrcUrl: "BoardGames.png",
    projectTitle: "Board Games",
    projectTech: "React - Typescript - CSS",
    projectDescription:
      "A digital board game web platform that offers a variety of games, allowing players to compete against each other or challenge an AI in VS computer mode.",
  },
  {
    imageSrcUrl: "RNA.png",
    projectTitle: "Prédiction de séries temporelles",
    projectTech: "React - Typescript - Tauri - CSS",
    projectDescription:
      "A desktop application for time series prediction that utilizes multilayer artificial neural networks to analyze and forecast the Hénon series. It provides interactive visualizations and supports both one-step-ahead and multi-step-ahead (3-10-20 steps) predictions.",
  },
  {
    imageSrcUrl: "Portfolio.png",
    projectTitle: "My Portfolio",
    projectTech: "React TS- Framer Motion - Lenis - CSS",
    projectDescription:
      "A personal portfolio website with modern and interactive UI designed to showcase my skills, projects, and achievements in software development, AI, and design.",
  },
  {
    imageSrcUrl: "Moradis.jpg",
    projectTitle: "Moradis Logo",
    projectTech: "Adobe Illustrator - Figma",
    projectDescription:
    'A logo for a sales company, it is the combination of the symbol of "cheap - easy" and the cart of a supermarket.',
  },
  {
    imageSrcUrl: "Signo.jpg",
    projectTitle: "Signo",
    projectTech: "Adobe Illustrator - Figma",
    projectDescription:
    "A logo for a mobile app for communication between hearing and deaf or mute individuals, it features a hand gesture that represents the letter “S” in alphabetic sign language.",
  },
];
export default ProjectsPage;
