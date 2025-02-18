import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectCards() {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src="/Projects/test.jpg" alt="Project Preview" />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="project-title">Paint.app</h3>
          <a
            href="https://github.com/MathieuFan22"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <p className="project-tech">Flutter - MUI - Python - FastAPI</p>
        <p className="project-description">
          A real-time coaching app for students learning to paint. This app is
          my baby, designed and built on my own.{" "}
          
        </p>
      </div>
    </div>
  );
}

export default ProjectCards;
