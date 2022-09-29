import allProjects from "../home/projects/projectObjs"
import Header from "../home/Header"
import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
 


const Projectpage = () => {

    const [currentProject, setCurrentProject] = useState(null)

    const { URL } = useParams()

    let project = [...allProjects.mainProjects, ...allProjects.smallProjects].find((project) => {
        if (project.URL === URL) {
            console.log(project)
            return project
        }
    })

    if(!project) {
        return(<>page not found</>)
    }

    return (
        <div>
            <h1> something {project.title}</h1>
            <Link to={`/home/#contact`}>Contact</Link>
        
        </div>


    // <div>
    //     <Link to={`/home/#contact`}>Contact</Link>
    //     <p>hello from project {project.title}</p>
        
    // </div>
    )
}

export default Projectpage;