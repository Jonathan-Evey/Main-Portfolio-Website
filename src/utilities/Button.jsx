const Button = (props) => {
  return (
    <button onClick={props.className === "toggle-nav-btn" ? props.toggleMenu : null } className={`btn ${props.className}`}>{props.text}</button>
  )
}

export default Button