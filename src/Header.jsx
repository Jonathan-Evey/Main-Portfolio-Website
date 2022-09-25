import Button from "./utilities/Button"

const Header = () => {
  return (
    <header> 
        <nav className="container">
            <div>
              <Button className={"main-btn | fs-600 fw-bold"} text={"main"} />
            </div>
            <div>
                <Button className={"projects-btn | fs-600 fw-bold show"} text={"projects"}/>
                <Button className={"contact-btn | fs-600 fw-bold margin-inline-start-36 show"} text={"contact"}/>
            </div>
        </nav>
    </header>
  )
}

export default Header