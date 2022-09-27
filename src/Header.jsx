const Header = (props) => {

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

  return (
    <header> 
        <nav className="container main-nav">
            <div>
              <button onClick={scrollToHero} className="btn main-btn underline | fs-600 fw-bold">main</button>
            </div>
            <div>
                <button onClick={scrollToProjects} className="btn projects-btn underline | fs-600 fw-bold">projects</button>
                <button onClick={scrollToContact} className="btn contact-btn underline | fs-600 fw-bold margin-inline-start-36 show">contact</button>
            </div>
        </nav>
        <button onClick={toggleMenu} className=" btn toggle-nav-btn"></button>
        <div className="nav-icon-display"></div>
        <div className="nav-icon-display-two"></div>
    </header>
  )
}

export default Header