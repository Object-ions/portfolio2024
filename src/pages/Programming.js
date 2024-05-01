import { useState } from 'react';
import ProjectList from '../components/ProjectList';
import ProjectCard from '../components/ProjectCard';
import data from '../data/programming.json';

const Programming = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectedProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="programming">
      <ProjectList projects={data} onSelectProject={handleSelectedProject} />
      {selectedProject && <ProjectCard project={selectedProject} />}
    </div>
  );
};

export default Programming;
