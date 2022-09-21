import Button from "./utilities/Button"

const Header = () => {
  return (
    <header>
        <nav>    
            <div className="conatiner">
                <div>
                  <Button className={"main-btn"} text={"Main"} />
                </div>
                <div>
                    {/* <Button />
                    <Button /> */}
                </div>
                
            </div>
        </nav>
    </header>
  )
}

export default Header