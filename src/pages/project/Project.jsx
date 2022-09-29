import { useState } from "react"

const Project = ({project}) => {

    const [imgNumber, seImgNumber] = useState(0)

   
  return (
    <main>
        <section className="section">
            <div className="container | padding-block-128 grid-two-column-size-60-40">
                <div className="padding-inline-end-96">
                    <h1 className="title project-page | fs-900 fw-bold">{project.title}</h1>
                    <div className="flex margin-block-start-16">
                        {project.languages.map((each, index) => <p className="clr-neutral-no-color-white fs-400 fw-bold margin-inline-start-16 margin-block-end-20" key={index}>{each}</p>)}
                    </div>
                    <div>
                        {project.description.map((each, index) => <p className="fs-300 margin-block-end-8" key={index}>{each}</p>)}
                    </div>
                    <div className="container project-page-links">
                        <a className="link project" href={project.link.demo}>Demo<span>&#x2197;</span></a>
                        <a className="link project" href={project.link.code}>Code<span>&#x2197;</span></a>
                    </div>
                </div>
                <div>
                    <img src={project.img[`${imgNumber}`]} alt="" />
                </div>
                
            </div>
        
        </section>
    </main>
  )
}

export default Project