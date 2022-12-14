import { useState } from "react"

const Project = ({project}) => {

    const [imgNumber, setImgNumber] = useState(0)

    const updateImg = (num) => {
        let nextImage = imgNumber + num
        if(nextImage >= project.img.length) {
            setImgNumber(0)
        } else if (nextImage < 0) {
            setImgNumber(project.img.length - 1)
        } else {
            setImgNumber(nextImage)
        }
    }

    const targetImg = (num) => {
        setImgNumber(num)
    }
   
  return (
    <main>
        <section className="section section-project-page">
            <div className="container | padding-block-start-128 padding-block-end-80  flex">
                <div className="card-img-carousel">
                    {project.img.map((each, index) => <img className={`${index === imgNumber ? "current" : ''}${index === imgNumber + 1 || (index === 0 && imgNumber === project.img.length - 1 ) ? "right" : ''}${index === imgNumber - 1 || (index === project.img.length - 1 && imgNumber === 0) ? "left" : ''}`} key={index} src={each} alt="" />)}
                    <div className="img-carousel-control">
                        <button onClick={() => updateImg(-1)} className="img-control-btn previous-btn"><div className="accent-font">^</div></button>
                        <div className="img-number-container">
                        
                            {project.img.map((each, index) => <div key={index} className={`${index === imgNumber ? "current-img" : ''} img-btn-wrapper`}><button onClick={() => targetImg(index)} className="img-btn"></button></div>
                            )}
                        </div>
                        <button onClick={() => updateImg(1)} className="img-control-btn next-btn"><div className="accent-font">^</div></button>
                    </div>
                </div>
                <div className="project-wright-up | padding-inline-end-96 flex-1">
                    <h1 className="title project-page | fs-900 fw-bold">{project.title}</h1>
                    <div className="flex margin-block-start-16">
                        {project.languages.map((each, index) => <p className="clr-neutral-no-color-white fs-400 fw-bold margin-inline-start-16 margin-block-end-20" key={index}>{each}</p>)}
                    </div>
                    <div>
                        <h5 className="fs-600 fw-bold margin-block-end-16">Project Description and Uses</h5>
                        <p className="fs-400 padding-inline-8 margin-block-end-24">{project.wrightUp.projectSummary}</p>
                        <h5 className="fs-600 fw-bold margin-block-end-16">Overview</h5>
                        <p className="fs-400 padding-inline-8 margin-block-end-24">{project.wrightUp.overview}</p>
                        <h5 className="fs-600 fw-bold margin-block-end-16">Main Challenges and Achievements</h5>
                        {project.wrightUp.mainChallenges.map((each, index) => <p className="fs-400 padding-inline-8 margin-block-end-12" key={index}>{each}</p>)}
                        {project.wrightUp.commentsTakeaways !== "" ? 
                        <>
                            <h5 className="fs-600 fw-bold margin-block-end-16">Comments and Takeaways</h5>
                            <p className="fs-400 padding-inline-8 margin-block-end-24">{project.wrightUp.commentsTakeaways}</p>
                        </> : null}
                        
                        <h5 className="fs-600 fw-bold margin-block-end-16">Project Completion Date</h5>
                        <p className="fs-400 padding-inline-8 margin-block-end-24">{project.wrightUp.completionDate}</p>
                    </div>
                    <div className="container project-page-links">
                        {project.link.demo !== "" ? <a className="link project" href={project.link.demo}>Demo<span>&#x2197;</span></a> : null}
                        <a className="link project" href={project.link.code}>Code<span>&#x2197;</span></a>
                    </div>
                </div>
            </div>
        
        </section>
    </main>
  )
}

export default Project