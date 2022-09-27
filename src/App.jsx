import { useRef, useEffect, useState } from 'react';
import setUpObserver from "./intersectionObserver"
import Header from './Header'
import Main from './Main'

const App = () => {

    const heroRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)

    useEffect(() => {
        setUpObserver()
    })

    return (
    <>
        <Header heroRef={heroRef} projectsRef={projectsRef} contactRef={contactRef} />
        <Main heroRef={heroRef} projectsRef={projectsRef} contactRef={contactRef} />
    </>
    )
}

export default App