import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function ProjectCards() {
  return (
    <div className='card-container'>
      <div className="card-image">
        <img src="/me.png" alt="Profile" />
      </div>
      <div className="card-title">
        <div className="project-title">
          <h1>Project Title</h1>
        </div>
        <div className="line"></div>
        <div className="github-link">
        <a
            href="https://github.com/MathieuFan22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="project-tech">
          <p>React Ts - Nest</p>
        </div>
        <div className="project-description">
          <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Pariatur reprehenderit odio esse sapiente obcaecati autem suscipit a excepturi ea quia, nisi nihil, 
              sed accusamus totam eius perspiciatis officiis porro saepe.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards