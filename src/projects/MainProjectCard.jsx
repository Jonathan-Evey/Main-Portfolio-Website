const MainProjectCard = ({project}) => {
  return (
    <div className="card-project | clr-neutral-lightest padding-inline-32 margin-block-end-144">
        <div className="container-project-img">
            <img className="shadow-500" src={project.img[0]} alt="" />
            <img className="shadow-500" src={project.img[1]} alt="" />
        </div>
        <div className="container-project-text | padding-block-48">
            <h4 className="title | clr-neutral-no-color-white fs-700 fw-bold margin-inline-end-32 ">{project.title}</h4>
            <p className="fs-400 margin-block-start-20">{project.description}</p>
            <div className="container-project-links">
                <a className="link project" href="#">Demo <span>&#x2197;</span></a>
                <a className="link project" href="#">Code <span>&#x2197;</span></a>
                <a className="link project" href="#">Write Up</a>
            </div>
        </div>
    </div>
  )
}

export default MainProjectCard