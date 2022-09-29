import allProjects from "../home/projects/projectObjs"
import Errorpage from "../404/Errorpage"
import Project from "./Project"
import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
 


const Projectpage = () => {

    const [currentProject, setCurrentProject] = useState(null)

    const { URL } = useParams()

    const toggleMenu = (e) => {
        document.querySelector(".main-nav").classList.toggle("open");
        document.querySelector(".nav-icon-display").classList.toggle("open");
        document.querySelector(".nav-icon-display-two").classList.toggle("open");
        e.target.classList.toggle("open");
    }
    
    const closeMenu = () => {
        document.querySelector(".main-nav").classList.remove("open");
        document.querySelector(".nav-icon-display").classList.remove("open");
        document.querySelector(".nav-icon-display-two").classList.remove("open");
        document.querySelector(".toggle-nav-btn").classList.remove("open");
    }

    let project = [...allProjects.mainProjects, ...allProjects.smallProjects].find((project) => {
    if (project.URL === URL) {
        return project
        }
    })

    if(!project) {
        console.log(project)
        return(<Errorpage />)
    }

    return (
        <>
        <header>
            <nav className="container main-nav">
                <div>
                    <Link to={`/`} className="btn nav-btn underline show | fs-600 fw-bold">Main</Link>
                </div>
                <div>
                    <Link to={`/#projects`} className="btn nav-btn underline show | fs-600 fw-bold">projects</Link>
                    <Link to={`/#contact`} className="btn nav-btn underline show | fs-600 fw-bold margin-inline-start-36">Contact</Link>
                </div>
            </nav>
            <button onClick={toggleMenu} className="btn toggle-nav-btn"></button>
            <div className="nav-icon-display"></div>
            <div className="nav-icon-display-two"></div>
            
        </header>
            <Project project={project}/>
            
        
        </>
    )
}

export default Projectpage;