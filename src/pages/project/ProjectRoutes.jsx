import {Routes, Route } from "react-router-dom"
import ProjectPage from "./ProjectPage"


const ProjectRoutes = () => {
  return (
    <Routes>
        <Route path=":URL" element={<ProjectPage />} />
    </Routes>
  )
}

export default ProjectRoutes