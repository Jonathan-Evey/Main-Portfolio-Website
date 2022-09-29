import {Routes, Route } from "react-router-dom"
import Projectpage from "./Projectpage"


const ProjectRoutes = () => {
  return (
    <Routes>
        <Route path=":URL" element={<Projectpage />} />
    </Routes>
  )
}

export default ProjectRoutes