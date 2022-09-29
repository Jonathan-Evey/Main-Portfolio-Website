import Home from "./pages/home/Home"
import { Route, Routes } from 'react-router-dom';
import ProjectRoutes from "./pages/ProjectRoutes";

const App = () => {

    return (
    <>
        
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/project-write-up/*" element={<ProjectRoutes />} />
        </Routes>
    </>
    )
}

export default App