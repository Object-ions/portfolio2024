import { Link } from 'react-router-dom';

const ProjectList = ({ projects, onSelectProject }) => {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.itemId} onClick={() => onSelectProject(project)}>
          <Link>{project.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
