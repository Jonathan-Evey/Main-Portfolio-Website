import allProjects from "./projectObjs";
import ProjectCard from "./ProjectCard";

const ProjectContainer = () => {
  return (<div className="container-projects">
    {allProjects.mainProjects.map((project) => (<ProjectCard key={project.id} project={project}/>))}
  </div>)
}

export default ProjectContainer