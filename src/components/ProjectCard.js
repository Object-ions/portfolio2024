import { useState } from 'react';
import ImageModal from './ImageModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
  const [activeImage, setActiveImage] = useState(null);

  if (!project) return null;

  const openImage = (image) => setActiveImage(image);
  const closeImage = () => setActiveImage(null);

  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <hr />
      <p>{project.description}</p>
      <ul className="tags">
        {project.tags.map((tag, index) => (
          <li className="tag" key={index}>
            #{tag}
          </li>
        ))}
      </ul>
      <div className="links">
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <span className="live-demo">
            Live Demo{' '}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ fontSize: '12px' }}
            />
          </span>
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          GitHub Repo
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ fontSize: '12px' }}
          />
        </a>
      </div>
      <div className="images">
        {project.images.map((image, index) => (
          <div
            className="image-wrapper"
            key={index}
            onClick={() => openImage(image)}
          >
            <img src={image} alt={`Screenshot of ${project.title}`} />
          </div>
        ))}
      </div>

      {activeImage && (
        <ImageModal image={activeImage} closeImage={closeImage} />
      )}
    </div>
  );
};

export default ProjectCard;
