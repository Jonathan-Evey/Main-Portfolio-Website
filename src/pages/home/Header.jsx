import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = (props) => {

const location = useLocation();

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

  const scrollToHero = (e) => {
    e.target.blur()
    props.heroRef.current.scrollIntoView({ behavior: 'smooth' })
    return closeMenu()
  }

  const scrollToProjects = (e) => {
    e.target.blur()
    props.projectsRef.current.scrollIntoView({ behavior: 'smooth' })
    return closeMenu()
  }

  const scrollToContact = (e) => {
    e.target.blur()
    props.contactRef.current.scrollIntoView({ behavior: 'smooth' })
    return closeMenu()
  }

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <header> 
        <nav className="container main-nav">
            <div>
              <button onClick={scrollToHero} className="btn main-btn nav-btn underline | fs-600 fw-bold">main</button>
            </div>
            <div>
                <button onClick={scrollToProjects} className="btn projects-btn nav-btn underline show | fs-600 fw-bold">projects</button>
                <button onClick={scrollToContact} className="btn contact-btn nav-btn underline show | fs-600 fw-bold margin-inline-start-36">contact</button>
            </div>
        </nav>
        <button onClick={toggleMenu} className="btn toggle-nav-btn"></button>
        <div className="nav-icon-display"></div>
        <div className="nav-icon-display-two"></div>
    </header>
  )
}

export default Header