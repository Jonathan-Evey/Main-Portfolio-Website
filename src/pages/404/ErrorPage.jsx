import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
        <h1>ErrorPage</h1>
        <Link to={`/`} className="btn submit show">Contact</Link>
    </div>
  )
}

export default ErrorPage