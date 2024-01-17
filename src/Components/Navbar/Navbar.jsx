import React from "react";
import ROUTES from "../../Routes";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { SiNike } from "react-icons/si";


const toggleClassActive = ({ isActive }) => {
  return isActive ? "active__link" : "";
};


export default function Navbar() {
  return (
    <header>
      <div className="Logo"><SiNike className="a"/></div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME} className={toggleClassActive} > Home </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT} className={toggleClassActive} > About </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.PRODUCTS} className={toggleClassActive} > Products </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.LOGIN} className={toggleClassActive} > Log in </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
