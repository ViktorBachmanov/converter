import React, { useContext } from "react";
import { ReactComponent as Sun } from "./svg/brightness-high.svg";
import { ReactComponent as Moon } from "./svg/moon-stars.svg";

import { observer } from "mobx-react-lite";

import { StoreContext } from "../index";

const LightMode = observer(function LightMode() {
  const rootStore = useContext(StoreContext);
  const themeStore = rootStore.theme;

  const handleClick = (val: "light" | "dark") => {
    themeStore.setLightStatus(val);
  };

  return (
    <div className="settings">
      {themeStore.lightStatus === "dark" ? (
        <Sun onClick={() => handleClick("light")} />
      ) : (
        <Moon
          onClick={() => handleClick("dark")}
          style={{ width: "1.25rem" }}
        />
      )}
    </div>
  );
});

export default LightMode;
