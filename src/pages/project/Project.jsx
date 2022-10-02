import { useState } from "react"

const Project = ({project}) => {

    const [imgNumber, setImgNumber] = useState(0)

    const updateImg = (num) => {
        let nextImage = imgNumber + num
        console.log(nextImage)
        if(nextImage >= project.img.length) {
            console.log(nextImage)
            setImgNumber(0)
        } else if (nextImage < 0) {
            console.log(nextImage)
            setImgNumber(project.img.length - 1)
        } else {
            console.log(nextImage)
            setImgNumber(nextImage)
        }
    }

    const targetImg = (num) => {
        let lastImage = imgNumber
        let newImage = num
        if(newImage != imgNumber) {
            if(newImage < lastImage) {
                setTimeout(() => {
               return setImgNumber(lastImage - 1);
                }, 250)
            }
            if(newImage > lastImage) {
                setTimeout(() => {
                    return setImgNumber(lastImage + 1);
                }, 250)
            }
        }
        setImgNumber(newImage);
    }

   
  return (
    <main>
        <section className="section section-project-page">
            <div className="container | padding-block-start-128 padding-block-end-80  grid-two-column-size-60-40">
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
                <div className="card-img-carousel">
                    {/* <img src={project.img[`${imgNumber}`]} alt="" /> */}
                    {project.img.map((each, index) => <img className={`${index === imgNumber ? "current" : ''} ${index === imgNumber + 1 || (index === 0 && imgNumber === project.img.length - 1 ) ? "right" : ''} ${index === imgNumber - 1 || (index === project.img.length - 1 && imgNumber === 0) ? "left" : ''}`} key={index} src={each} alt="" />)}
                    <div className="img-carousel-control">
                        <button onClick={() => updateImg(-1)} className="img-control-btn previous-btn"><div className="accent-font">^</div></button>
                        <div className="img-number-container">
                        
                            {project.img.map((each, index) => <div key={index} className={`${index === imgNumber ? "current-img" : ''} img-btn-wrapper`}><button onClick={() => targetImg(index)} className="img-btn"></button></div>
                            )}
                        </div>
                        <button onClick={() => updateImg(1)} className="img-control-btn next-btn"><div className="accent-font">^</div></button>
                    </div>
                </div>
                
            </div>
        
        </section>
    </main>
  )
}

export default Project