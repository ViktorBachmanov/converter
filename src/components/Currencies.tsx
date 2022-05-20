import React, { useContext } from "react";

import { observer } from "mobx-react-lite";

import { StoreContext } from "../index";

const Currencies = observer(function Currencies() {
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;

  return (
    <>
      <h2>Курсы валют</h2>
      <div
        style={{
          height: "400px",
          overflow: "auto",
          margin: "1rem",
          width: "fit-content",
          padding: "0.5rem",
        }}
      >
        {carrencyStore.quotes.map((quote) => {
          return (
            <div
              key={quote.name}
              style={{
                margin: "0.25rem",
                fontFamily: "'Roboto Mono', monospace",
              }}
            >
              1 {quote.name} = {quote.value}
            </div>
          );
        })}
      </div>
    </>
  );
});

export default Currencies;
