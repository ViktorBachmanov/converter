import React from "react";
import NavBar from "./NavBar";
import { ReactComponent as GitHub } from "./svg/github.svg";

import LightMode from "./LightMode";
import Accuracy from "./Accuracy";

import "./AppBar.css";
import Language from "./Language";

export default function AppBar() {
  return (
    <div className="AppBar">
      <NavBar />

      {/* <GitHub
        className="icon-button"
        onClick={() =>
          window.open("https://github.com/ViktorBachmanov/converter")
        }
      /> */}

      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
      >
        <Accuracy />
        <Language />
        <LightMode />
      </div>
    </div>
  );
}
