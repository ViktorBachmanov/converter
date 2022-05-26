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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "0.5rem",
        }}
      >
        <Accuracy />
        <Language />
        <LightMode />
        <GitHub
          className="settings text-neutral-800 dark:text-neutral-500"
          //color="#737373"
          onClick={() =>
            window.open("https://github.com/ViktorBachmanov/converter")
          }
        />
      </div>
    </div>
  );
}
