import Home from "./pages/home/Home"
import { Route, Routes } from 'react-router-dom';
import ProjectRoutes from "./pages/project/ProjectRoutes";
import ErrorPage from "./pages/404/ErrorPage";

const App = () => {

    return (
    <>
        
        <Routes>
            
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/project-write-up/*" element={<ProjectRoutes />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    </>
    )
}

export default App