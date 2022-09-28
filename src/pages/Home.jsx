import { useRef, useEffect, useState } from 'react';
import setUpObserver from "../intersectionObserver"
import Header from '../Header'
import Main from '../Main'

const Home = () => {
    const [isOnMain, setIsOnMain] = useState(true)
    const [isOnProject, setIsOnProject] = useState(false)

    const heroRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)

    useEffect(() => {
        setUpObserver()
    })

    return (
    <>
        <Header heroRef={heroRef} projectsRef={projectsRef} contactRef={contactRef} />
        {isOnMain ? <Main heroRef={heroRef} projectsRef={projectsRef} contactRef={contactRef} /> : null}
        {isOnProject ? <Project /> : null }
        
    </>
    )
}

export default Home