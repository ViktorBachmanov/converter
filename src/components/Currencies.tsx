import React, { useContext, useEffect, useRef, useState } from "react";

import { observer } from "mobx-react-lite";

import { StoreContext } from "../index";

import Select from "./Select/Select";

const Currencies = observer(function Currencies() {
  console.log("Currencies");
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;

  const accuracy = carrencyStore.accuracy;

  const columnsRef = useRef(null);

  //const [columnCount, setColumnCount] = useState(5);
  let columnCount = 5;

  //let columnsWidth = 0;
  const maxWidth = window.innerWidth - 100;
  console.log("maxWidth: ", maxWidth);

  useEffect(() => {
    let columnsEl = columnsRef.current! as HTMLElement;
    columnsEl.style.columnCount = String(columnCount);

    let columnsWidth = columnsEl.getBoundingClientRect().width;
    console.log("columnsWidth: ", columnsWidth);

    //for(let columnCount = getComputedStyle(columnsEl).columnCount ; columnsWidth > maxWidth )
    //let columnCount: number = parseInt(columnsEl.style.columnCount);
    //let columnCount: number = parseInt(getComputedStyle(columnsEl).columnCount);
    console.log("columnCount: ", columnCount);
    while (columnsWidth > maxWidth && columnCount > 1) {
      columnsEl.style.columnCount = String(--columnCount);
      columnsWidth = columnsEl.getBoundingClientRect().width;
      console.log("columnsWidth: ", columnsWidth);
    }
    //setColumnCount(columnCount);
  });

  return (
    <div ref={columnsRef} style={{ columnCount }}>
      <div style={{ display: "flex" }}>
        Базовая валюта:
        <Select
          initialValue={carrencyStore.base}
          initialOptions={carrencyStore.names}
          doneCallback={(name: string) => carrencyStore.setBase(name)}
          style={{ marginLeft: "0.5rem" }}
        />
      </div>
      <ul
        style={{
          //height: "400px",
          //overflowX: "auto",
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
                whiteSpace: "nowrap",
              }}
            >
              {quote.name}: {quote.value.toFixed(accuracy)}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Currencies;
