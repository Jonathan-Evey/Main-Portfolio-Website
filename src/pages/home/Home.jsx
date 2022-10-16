import { useRef, useEffect, useState } from 'react';
import setUpObserver from "../../intersectionObserver"
import Header from './Header'
import Hero from './hero/Hero'
import Projects from './project-section/Projects'
import Contact from './contact/Contact'

const Home = () => {

    const heroRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)

    useEffect(() => {
        setUpObserver()
    })

    useEffect(() => {
        const anchor = window.location.hash.split("#")[1];
        if (anchor) {
            const anchorElement = document.getElementById(anchor);
            if (anchorElement) {
                setTimeout(() => anchorElement.scrollIntoView({ block: "start", behavior: 'smooth' }), 150);
            }
        }
    }, []);

    return (
    <>
        <Header page={"Home"} heroRef={heroRef} projectsRef={projectsRef} contactRef={contactRef} />
        <main className="main">
            <Hero heroRef={heroRef} />
            <Projects projectsRef={projectsRef}/>
            <Contact contactRef={contactRef}/>
        </main>
        
    </>
    )
}

export default Home