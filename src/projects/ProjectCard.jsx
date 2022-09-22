const ProjectCard = ({project}) => {
  return (
    <div className="card-project | padding-inline-32 margin-block-end-96">
        <div className="container-project-img">
            <img src={project.img[0]} alt="" />
            <img src={project.img[1]} alt="" />
        </div>
        <div className="container-project-text | padding-block-56">
            <h4 className="title | fs-600 fw-bold margin-inline-end-32 ">{project.title}</h4>
            <p className="margin-block-start-20">{project.description}</p>
            <div className="container-project-links">
                <a href="#">Demo</a>
                <a href="#">Code</a>
                <a href="#">Write Up</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard