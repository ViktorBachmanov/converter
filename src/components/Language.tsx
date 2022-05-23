import React, { useState, useEffect, useContext } from "react";

import { observer } from "mobx-react-lite";

import { StoreContext } from "../index";

const Language = observer(function () {
  const rootStore = useContext(StoreContext);
  const themeStore = rootStore.theme;

  const handleClick = (val: "en" | "ru") => {
    themeStore.setLanguage(val);
  };

  return (
    <div className="settings">
      {themeStore.language === "en" ? (
        <span onClick={() => handleClick("ru")}>En</span>
      ) : (
        <span onClick={() => handleClick("en")}>Ru</span>
      )}
    </div>
  );
});

export default Language;
