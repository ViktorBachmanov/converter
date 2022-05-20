import React, { useState, useEffect, useContext } from "react";
import { ReactComponent as Sun } from "./svg/sun.svg";
import { ReactComponent as Moon } from "./svg/moon.svg";

import { observer } from "mobx-react-lite";

import { StoreContext } from "../index";

const BaseCurrency = observer(function BaseCurrency() {
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    carrencyStore.setBase(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      {carrencyStore.names.map((name) => {
        return (
          <option key={name} value={name}>
            {name}
          </option>
        );
      })}
    </select>
  );
});

export default BaseCurrency;
