import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import ROUTES from "../routes";
import { AiFillAlipayCircle } from "react-icons/ai";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <div className="logo-box">
            <li>
              <span>
                <AiFillAlipayCircle className="logo" />
                Aurora Decor
              </span>
            </li>
          </div>
          <div className="links">
            <li>
              <NavLink to={ROUTES.PRODUCTS}>Furniture</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ADD}>Add</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ARCHIVE}>Archive</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
