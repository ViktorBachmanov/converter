import React, { useState, useEffect, useContext } from "react";
import { ReactComponent as Sun } from "./svg/sun.svg";
import { ReactComponent as Moon } from "./svg/moon.svg";

import { observer } from "mobx-react-lite";

import { StoreContext } from "../index";

const LightMode = observer(function LightMode() {
  const rootStore = useContext(StoreContext);
  const themeStore = rootStore.theme;

  //const [lightMode, setLightMode] = useState(themeStore.lightStatus);

  // useEffect(() => {
  //   setLightMode(
  //     document.documentElement.classList.contains("dark") ? "dark" : "light"
  //   );
  // }, []);

  const handleClick = (val: "light" | "dark") => {
    // if (val === "dark") {
    //   document.documentElement.classList.add("dark");
    // } else {
    //   document.documentElement.classList.remove("dark");
    // }

    //localStorage.theme = val;
    //setLightMode(val);

    themeStore.setLightStatus(val);
  };

  return (
    <div className="LightMode">
      {themeStore.lightStatus === "dark" ? (
        <Sun onClick={() => handleClick("light")} />
      ) : (
        <Moon onClick={() => handleClick("dark")} />
      )}
    </div>
  );
});

export default LightMode;
