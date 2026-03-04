import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent, useState } from "react";

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
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--spotlight-x", `${x}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <div
      className={`card-container ${isHovered ? "hover" : ""}`}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      onMouseMove={handleMouseMove}
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
