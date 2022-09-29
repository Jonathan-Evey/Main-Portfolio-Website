import { Link } from "react-router-dom"

const SmallProjectCard = ({project}) => {
  return (
    <div className="card-small-project | clr-neutral-lightest padding-block-32 margin-block-end-144">
        <div className="container-project-img | margin-block-end-56">
            <img className="shadow-500" src={project.img[0]} alt="" />
            <img className="shadow-500" src={project.img[1]} alt="" />
        </div>
        <div className="container-project-text | padding-inline-24">
            <h4 className="title | clr-neutral-no-color-white fw-bold margin-inline-end-32 ">{project.title}</h4>
            <div className="flex margin-block-start-16">
              {project.languages.map((each, index) => <p className="clr-neutral-no-color-white fs-400 fw-bold margin-inline-start-16 margin-block-end-20" key={index}>{each}</p>)}
            </div>
            <div>
              {project.description.map((each, index) => <p className="fs-300 margin-block-end-8" key={index}>{each}</p>)}
            </div>
            <div className="container-project-links">
                <a className="link project" href={project.link.demo}>Demo<span>&#x2197;</span></a>
                <a className="link project" href={project.link.code}>Code<span>&#x2197;</span></a>
                <Link className="link project" to={`/project-write-up/${project.URL}`}>Write Up</Link>
            </div>
        </div>
    </div>
  )
}

export default SmallProjectCard