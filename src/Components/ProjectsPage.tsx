import React from "react";
import "./project-page.css";
import { Fade } from "react-awesome-reveal";
import ProjectCards from "./ProjectCards";

const ProjectsPage: React.FC = () => {
  
  return (
    <div className="project-section">
      <div className="section-title">
        <Fade direction="left">
          <div className="dot"></div>
          <h1>Projects</h1>
        </Fade>
        <div className="line"></div>
      </div>
      <div className="section-content-project">
        <div className="left-side">
        <Fade direction="left" fraction={0} triggerOnce={false} >
          {
            project.map((project) => (
              <ProjectCards
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
    imageSrcUrl: "BoardGames.jpg",
    projectTitle: "Board Games",
    projectTech: "React - Typescript - CSS",
    projectDescription:
      "A digital board game platform that offers a variety of games, allowing players to compete against each other or challenge an AI in VS computer mode.",
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
  {
    imageSrcUrl: "BoardGames.jpg",
    projectTitle: "Board Games",
    projectTech: "React - Typescript - CSS",
    projectDescription:
    "A digital board game platform that offers a variety of games, allowing players to compete against each other or challenge an AI in VS computer mode.",
  },
];
export default ProjectsPage;
