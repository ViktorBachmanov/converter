import React, { useState, useEffect, useContext } from "react";
import { ReactComponent as Sun } from "./svg/sun.svg";
import { ReactComponent as Moon } from "./svg/moon.svg";

import { StoreContext } from "../index";

function LightMode() {
  const rootStore = useContext(StoreContext);
  const themeStore = rootStore.theme;

  const [lightMode, setLightMode] = useState("light");

  useEffect(() => {
    setLightMode(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  const setTheme = (val: "light" | "dark") => {
    if (val === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.theme = val;
    setLightMode(val);
  };

  return (
    <div className="LightMode">
      {lightMode === "dark" ? (
        <Sun onClick={() => setTheme("light")} />
      ) : (
        <Moon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}

export default LightMode;
