import './Navbar.scss'
import ROUTES from '../../routes'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <header>
      <div className='logo'>
        <NavLink to={ROUTES.HOME}>Logo</NavLink>
      </div>
        <nav className='navbar'>
          <ul>
              <li>
                <NavLink to={ROUTES.HOME}>Home</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.USERPAGE}>Userpage</NavLink>
              </li>
          </ul>
        </nav>
    </header>
    
  )
}
