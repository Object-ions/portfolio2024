import { ReactComponent as ArrowOutward } from '../assets/svg/arrow_outward.svg';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <hr />
      <p>{project.description}</p>
      <ul className="tags">
        {project.tags.map((tag) => (
          <li className="tag">{tag}</li>
        ))}
      </ul>
      <div className="links">
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <span className="live-demo">
            Live Demo <ArrowOutward width="15px" height="15px" />
          </span>
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          GitHub Repo
        </a>
      </div>
      <div className="images">
        {project.images.map((image, index) => (
          <div className="image-wrapper">
            <img
              key={index}
              src={image}
              alt={`Screenshot of ${project.title}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
