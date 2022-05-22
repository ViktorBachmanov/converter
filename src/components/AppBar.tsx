import React from "react";
import NavBar from "./NavBar";
import { ReactComponent as GitHub } from "./svg/github.svg";

import LightMode from "./LightMode";

import "./AppBar.css";

export default function AppBar() {
  return (
    <div className="AppBar">
      {/* <NavBar /> */}

      {/* <a
        className="GitHubLink"
        href="https://github.com/ViktorBachmanov/Todos"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a> */}

      <GitHub
        className="icon-button"
        onClick={() =>
          window.open("https://github.com/ViktorBachmanov/converter")
        }
      />

      {/* <BaseCurrency /> */}
      <LightMode />
    </div>
  );
}
