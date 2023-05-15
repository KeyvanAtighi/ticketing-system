import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={'/'}>Ticketing System</Link>
      </div>
      <ul>
        <li className="navItem">
          <Link to={'/register'}>register</Link>
        </li>
        <li className="navItem">
          <Link to={'/login'}>login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar