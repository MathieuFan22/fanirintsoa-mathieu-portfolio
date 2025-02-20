import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type ProjectCardProps = {
  imageSrcUrl: string;
  projectTitle: string;
  projectTech: string;
  projectDescription: string;
};
const ProjectCards: React.FC<ProjectCardProps> = ({
  imageSrcUrl,
  projectTitle,
  projectTech,
  projectDescription,
}) => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <div
      className={`card-container ${isHovered ? "hover" : ""}`}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <div className="card-image-container">
        <img src={`/Projects/${imageSrcUrl}`} alt="Project Preview" />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className={`project-title ${isHovered ? "hover" : ""}`}>
            {projectTitle}
          </h3>
          <a
            href="https://github.com/MathieuFan22"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <p className="project-tech">{projectTech}</p>
        <p className={`project-description ${isHovered ? "hover" : ""}`}>
          {projectDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectCards;
