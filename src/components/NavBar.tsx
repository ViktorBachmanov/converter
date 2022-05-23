import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { Urls } from "../constants";

import "./NavBar.css";

import { StoreContext } from "../index";

const NavBar = observer(function () {
  const rootStore = useContext(StoreContext);
  const themeStore = rootStore.theme;

  return (
    <nav className="NavBar">
      <NavLink
        to={Urls.HOME}
        className={({ isActive }) =>
          isActive ? "activeNavLink" : "inactiveNavLink"
        }
      >
        {themeStore.tr("converter")}
      </NavLink>
      <NavLink
        to={Urls.QUOTES}
        className={({ isActive }) =>
          isActive ? "activeNavLink" : "inactiveNavLink"
        }
      >
        {themeStore.tr("quotes")}
      </NavLink>
    </nav>
  );
});

export default NavBar;
