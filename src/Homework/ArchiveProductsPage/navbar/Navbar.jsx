import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import ROUTES from "../routes";
import { AiFillAlipayCircle } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(
    Boolean(window.localStorage.getItem("login"))
  );

  useEffect(() => {
    setIsLogin(Boolean(window.localStorage.getItem("login")));
  }, [isLogin]);

  const logOut = () => {
    window.localStorage.removeItem("login");
    setIsLogin(false);
  };

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
              <NavLink to={ROUTES.HOME}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/" + ROUTES.PRODUCTS}>Furniture</NavLink>
            </li>
            {isLogin && (
              <>
                <li>
                  <NavLink to={ROUTES.EDIT}>Edit</NavLink>
                </li>
                <li>
                  <NavLink to={ROUTES.ADD}>Add</NavLink>
                </li>
                <li>
                  <NavLink to={ROUTES.ARCHIVE}>Archive</NavLink>
                </li>
                <li>
                  <button onClick={logOut}>Log out</button>
                </li>
              </>
            )}
            {!isLogin && (
              <li>
                <NavLink to={ROUTES.LOGIN}>Log in</NavLink>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}
