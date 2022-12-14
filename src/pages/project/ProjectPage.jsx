import allProjects from "../home/project-section/projectObjs"
import ErrorPage from "../404/ErrorPage"
import Project from "./Project"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import Header from "../home/Header"

const ProjectPage = () => {

    const { URL } = useParams()

    let project = [...allProjects.mainProjects, ...allProjects.smallProjects].find((project) => {
    if (project.URL === URL) {
        return project
        }
    })

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    if(!project) {
        return(<ErrorPage />)
    }

    return (
        <>
            <Header page={"ProjectPage"}/>
            <Project project={project}/>
        </>
    )
}

export default ProjectPage;