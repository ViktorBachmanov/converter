import React, { useContext } from "react";

import { observer } from "mobx-react-lite";

import { StoreContext } from "../index";

const Currencies = observer(function Currencies() {
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;

  return (
    <>
      <h2>Курсы валют</h2>
      {carrencyStore.quotes.map((quote) => {
        return (
          <div key={quote.name}>
            {quote.name}: {quote.value}
          </div>
        );
      })}
    </>
  );
});

export default Currencies;
