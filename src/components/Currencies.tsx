import React, { useContext } from "react";

import { observer } from "mobx-react-lite";

import { StoreContext } from "../index";

function Currencies() {
  const rootStore = useContext(StoreContext);
  const converterStore = rootStore.converter;

  return <h2>Currencies</h2>;
}

export default Currencies;
