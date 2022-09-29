import { useRef, useEffect, useState } from 'react';
import setUpObserver from "../../intersectionObserver"
import Header from './Header'
import Hero from './hero/Hero'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

const Home = () => {

    const heroRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)

    // const scrollToLocation = () => {
    //     const { hash } = window.location;
    //     if (hash !== '') {
    //         let retries = 0;
    //         const id = hash.replace('#', '');
    //         const scroll = () => {
    //             retries += 0;
    //             if (retries > 50) return;
    //             const element = document.getElementById(id);
    //             if (element) {
    //             setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }),250);
    //             } else {
    //                 setTimeout(scroll, 100);
    //             }
    //         };
    //         scroll
    //     }
    // }

    useEffect(() => {
        setUpObserver()
    })

    useEffect(() => {
        const anchor = window.location.hash.split("#")[1];
        if (anchor) {
            const anchorElement = document.getElementById(anchor);
            if (anchorElement) {
                setTimeout(() => anchorElement.scrollIntoView({ block: "start", behavior: 'smooth' }), 100);
            }
        }
    }, []);

    return (
    <>
        <Header heroRef={heroRef} projectsRef={projectsRef} contactRef={contactRef} />
        <main className="main">
            <Hero ref={heroRef} />
            <Projects ref={projectsRef}/>
            <Contact ref={contactRef}/>
        </main>
        
    </>
    )
}

export default Home