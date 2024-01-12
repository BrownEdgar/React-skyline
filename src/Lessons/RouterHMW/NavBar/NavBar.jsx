import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import ROUTES from "../routes";

const toggleClassActive = ({ isActive }) => {
  return isActive ? "active__link" : "";
};

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME} className={toggleClassActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.JAZZ_ARTISTS} className={toggleClassActive}>
              JAZZ
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.RAP_ARTISTS} className={toggleClassActive}>
              Rap
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.REGGAE_ARTISTS} className={toggleClassActive}>
              Reggae
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ROCK_ARTISTS} className={toggleClassActive}>
              Rock
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.OTHER_ARTISTS} className={toggleClassActive}>
              Others
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
