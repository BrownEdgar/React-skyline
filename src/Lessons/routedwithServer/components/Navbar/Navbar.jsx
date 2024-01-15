import ROUTES from '../../routes'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'


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
            <NavLink to={ROUTES.PRODUCTS} className={toggleClassActive}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
