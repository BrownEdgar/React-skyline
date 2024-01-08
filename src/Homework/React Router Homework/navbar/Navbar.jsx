import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import ROUTES from "../routes";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.POSTS}>Posts</Link>
          </li>
          <li>
            <Link to={ROUTES.USERS}>Users</Link>
          </li>
          <li>
            <Link to={ROUTES.PHOTOS}>Photos</Link>
          </li>
          <li>
            <Link to={ROUTES.COMMENT}>Comments</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
