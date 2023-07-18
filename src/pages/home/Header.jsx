import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Header = (props) => {

  const [currentPage, setCurrentPage] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)


  const toggleMenu = (e) => {
    setMenuOpen(!menuOpen)
    document.querySelector(".main-nav").classList.toggle("open");
    document.querySelector(".nav-icon-display").classList.toggle("open");
    document.querySelector(".nav-icon-display-two").classList.toggle("open");
    document.querySelector('.nav-btn-background-shadow').classList.toggle("open");
    e.target.classList.toggle("open");
  }

  const closeMenu = () => {
    document.querySelector(".main-nav").classList.remove("open");
    document.querySelector(".nav-icon-display").classList.remove("open");
    document.querySelector(".nav-icon-display-two").classList.remove("open");
    document.querySelector(".toggle-nav-btn").classList.remove("open");
    document.querySelector('.nav-btn-background-shadow').classList.remove("open");
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
    setCurrentPage(props.page)
  })

  return (
    <header>
      {currentPage === "Home" ? 
        <>
          <nav className="container main-nav">
            <div>
              <button onClick={scrollToHero} className="btn main-btn nav-btn underline | fs-600 fw-bold">main</button>
            </div>
            <div>
                <button onClick={scrollToProjects} className="btn projects-btn nav-btn underline | fs-600 fw-bold">projects</button>
                <button onClick={scrollToContact} className="btn contact-btn nav-btn underline | fs-600 fw-bold margin-inline-start-36">contact</button>
            </div>
          </nav>
          <button onClick={toggleMenu} className="btn toggle-nav-btn" aria-labelledby="nav-btn-label">
            <span className="nav-btn-label" id="nav-btn-label">{menuOpen ? "Close Navigation" : "Open Navigation"}</span>
          </button>
          <div className="nav-btn-background-shadow"></div>
          <div className="nav-icon-display"></div>
          <div className="nav-icon-display-two"></div>
        </> : null } 
      {currentPage === "ProjectPage" ? 
        <>
          <nav className="container main-nav">
                <div>
                    <Link to={`/`} className="btn nav-btn underline show | fs-600 fw-bold">Main</Link>
                </div>
                <div>
                    <Link to={`/#projects`} className="btn nav-btn underline show | fs-600 fw-bold">projects</Link>
                    <Link to={`/#contact`} className="btn nav-btn underline show | fs-600 fw-bold margin-inline-start-36">Contact</Link>
                </div>
            </nav>
            <button onClick={toggleMenu} className="btn toggle-nav-btn" aria-labelledby="nav-btn-label">
              <span className="nav-btn-label" id="nav-btn-label">{menuOpen ? "Close Navigation" : "Open Navigation"}</span>
            </button>
            <div className="nav-btn-background-shadow"></div>
            <div className="nav-icon-display"></div>
            <div className="nav-icon-display-two"></div>
        </> : null } 
        
    </header>
  )
}

export default Header