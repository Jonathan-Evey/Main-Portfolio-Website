import Button from "./utilities/Button"

const Header = () => {

  const toggleMenu = (e) => {
    document.getElementById("main-nav").classList.toggle("open");
    document.querySelector(".nav-icon-display").classList.toggle("open");
    document.querySelector(".nav-icon-display-two").classList.toggle("open");
    e.target.classList.toggle("open");
  }

  return (
    <header> 
        <nav className="container" id="main-nav">
            <div>
              <Button className={"main-btn underline | fs-600 fw-bold"} text={"main"} />
            </div>
            <div>
                <Button className={"projects-btn underline | fs-600 fw-bold show"} text={"projects"}/>
                <Button className={"contact-btn underline | fs-600 fw-bold margin-inline-start-36 show"} text={"contact"}/>
            </div>
        </nav>
        <Button toggleMenu={toggleMenu} className={"toggle-nav-btn"} text={""} />
        <div className="nav-icon-display"></div>
        <div className="nav-icon-display-two"></div>
    </header>
  )
}

export default Header