import './Navbar.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import ROUTES from '../routes'
import { useState, useEffect } from 'react'

const toggleClassActive = ({ isActive }) => {
  return isActive ? "active__link" : ''
}

export default function Navbar({ isLogin }) {
  const navigate = useNavigate()
  const logout = () => {
    window.localStorage.removeItem('login');
    navigate(ROUTES.HOME)
  }


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

          {isLogin ? (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          ) : null}

        </ul>
      </nav>
    </header>
  )
}
