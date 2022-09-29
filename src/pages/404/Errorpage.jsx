import { Link } from "react-router-dom"

const Errorpage = () => {
  return (
    <div>
        <h1>Errorpage</h1>
        <Link to={`/`} className="btn submit show">Contact</Link>
    </div>
  )
}

export default Errorpage