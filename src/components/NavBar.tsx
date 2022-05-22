import React from "react";
import { NavLink } from "react-router-dom";
import { Urls } from "../constants";

import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink
        to={Urls.HOME}
        className={({ isActive }) =>
          isActive ? "activeNavLink" : "inactiveNavLink"
        }
      >
        Конвертер
      </NavLink>
      <NavLink
        to={Urls.QUOTES}
        className={({ isActive }) =>
          isActive ? "activeNavLink" : "inactiveNavLink"
        }
      >
        Котировки
      </NavLink>
    </nav>
  );
}
