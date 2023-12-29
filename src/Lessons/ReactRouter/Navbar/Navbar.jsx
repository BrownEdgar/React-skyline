import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import ROUTES from '../routes'

const toggleClassActive = ({ isActive }) => {
  return isActive ? "active__link" : ''
}

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <NavLink to={ROUTES.HOME}>Logo</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME} className={toggleClassActive}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT} className={toggleClassActive}>About</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG} className={toggleClassActive}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.POSTS} className={toggleClassActive}>Posts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
