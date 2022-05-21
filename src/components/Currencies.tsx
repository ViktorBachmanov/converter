import React, { useContext } from "react";

import { observer } from "mobx-react-lite";

import { StoreContext } from "../index";

import Select from "./Select/Select";

const Currencies = observer(function Currencies() {
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;

  return (
    <>
      <Select
        initialValue={carrencyStore.base}
        initialOptions={carrencyStore.names}
        doneCallback={(name: string) => carrencyStore.setBase(name)}
      />
      <ul
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
            <li
              key={quote.name}
              style={{
                margin: "0.25rem",
                fontFamily: "'Roboto Mono', monospace",
              }}
            >
              1 {quote.name} = {quote.value}
            </li>
          );
        })}
      </ul>
    </>
  );
});

export default Currencies;
