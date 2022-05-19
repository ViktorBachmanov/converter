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
        Главная
      </NavLink>
      <NavLink
        to={Urls.CURRENCIES}
        className={({ isActive }) =>
          isActive ? "activeNavLink" : "inactiveNavLink"
        }
      >
        Валюты
      </NavLink>
    </nav>
  );
}
