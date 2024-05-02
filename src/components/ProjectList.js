import { Link } from 'react-router-dom';

const ProjectList = ({ projects, onSelectProject }) => {
  return (
    <ul className="project-list">
      <>
        <hr className="top-hr" />
        <h3> {'> '}React</h3>
        <hr />
        {projects.map(
          (project) =>
            project.tech === 'react' && (
              <li key={project.itemId} onClick={() => onSelectProject(project)}>
                <Link>{project.title}</Link>
              </li>
            )
        )}
      </>
      <>
        <hr className="top-hr" />
        <h3>{'> '}C#</h3>
        <hr />
        {projects.map(
          (project) =>
            project.tech === 'c#' && (
              <li key={project.itemId} onClick={() => onSelectProject(project)}>
                <Link>{project.title}</Link>
              </li>
            )
        )}
      </>
      <>
        <hr className="top-hr" />
        <h3>{'> '}Vanilla JS</h3>
        <hr />
        {projects.map(
          (project) =>
            project.tech === 'javascript' && (
              <li key={project.itemId} onClick={() => onSelectProject(project)}>
                <Link>{project.title}</Link>
              </li>
            )
        )}
      </>
    </ul>
  );
};

export default ProjectList;
