import allProjects from "./projectObjs";
import MainProjectCard from "./MainProjectCard";


const MainProjectsContainer = () => {
  return (<div className="container-projects">
    {allProjects.mainProjects.map((project) => (<MainProjectCard key={project.id} project={project}/>))}
  </div>)
}

export default MainProjectsContainer