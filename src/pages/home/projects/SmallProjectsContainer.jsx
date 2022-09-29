import allProjects from "./projectObjs";
import SmallProjectCard from "./SmallProjectCard";

const SmallProjectsContainer = () => {
  return (<div className="container-small-projects">
  {allProjects.smallProjects.map((project) => (<SmallProjectCard key={project.id} project={project}/>))}
</div>)
}

export default SmallProjectsContainer