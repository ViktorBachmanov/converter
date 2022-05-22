import React from "react";
import NavBar from "./NavBar";
import LightMode from "./LightMode";

import "./AppBar.css";

export default function AppBar() {
  return (
    <div className="AppBar">
      {/* <NavBar /> */}

      <a
        className="GitHubLink"
        href="https://github.com/ViktorBachmanov/Todos"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      {/* <BaseCurrency /> */}
      <LightMode />
    </div>
  );
}
