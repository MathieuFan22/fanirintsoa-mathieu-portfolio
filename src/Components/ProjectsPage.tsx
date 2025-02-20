import React from "react";
import "./ProjectsPage.css";
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
          
          
        </div>
      </div>
    </div>
  );
};
const project = [
  {
    imageSrcUrl: "BoardGames.jpg",
    projectTitle: "Board Games",
    projectTech: "React TS - CSS",
    projectDescription:
      "A digital board game platform that offers a variety of games, allowing players to compete against each other or challenge an AI in VS computer mode.",
  },
  {
    imageSrcUrl: "BoardGames.jpg",
    projectTitle: "Board Games",
    projectTech: "React TS - CSS",
    projectDescription:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
  },
  {
    imageSrcUrl: "BoardGames.jpg",
    projectTitle: "Board Games",
    projectTech: "React TS - CSS",
    projectDescription:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
  },
  {
    imageSrcUrl: "BoardGames.jpg",
    projectTitle: "Board Games",
    projectTech: "React TS - CSS",
    projectDescription:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
  },
];
export default ProjectsPage;
