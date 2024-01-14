import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import ROUTES from "../routes";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT}>About</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.POSTS}>Posts</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.USERS}>Users</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.PHOTOS}>Photos</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.COMMENTS}>Comments</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.PRODUCTS}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
