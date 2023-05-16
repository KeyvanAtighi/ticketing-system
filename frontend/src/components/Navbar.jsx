import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="nav container">
        <Link to={'/'}>
      <div className="logo">
          Ticketing System
      </div>
          </Link>
      <ul className="nav-items">
          <Link to={'/register'}>
        <li className="btn">
            register
        </li>
            </Link>
          <Link to={'/login'}>
        <li className="btn">
            login
        </li>
            </Link>
      </ul>
    </nav>
  )
}

export default Navbar