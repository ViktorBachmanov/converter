import React from "react";
import { NavLink } from "react-router-dom";
import { Urls } from "../constants";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink
        to={Urls.HOME}
        className={({ isActive }) =>
          isActive ? "activeNavLink" : "inactiveNavLink"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={Urls.CURRENCIES}
        className={({ isActive }) =>
          isActive ? "activeNavLink" : "inactiveNavLink"
        }
      >
        Todos
      </NavLink>
    </nav>
  );
}
