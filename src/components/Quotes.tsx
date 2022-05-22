import React, { useContext, useEffect, useRef, useState } from "react";

import { observer } from "mobx-react-lite";

import { StoreContext } from "../index";

import Select from "./Select/Select";

const Quotes = observer(function () {
  console.log("Currencies");
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;

  const accuracy = carrencyStore.accuracy;

  const columnsRef = useRef(null);

  //const [columnCount, setColumnCount] = useState(5);
  let columnCount = 7; // starting value

  //let columnsWidth = 0;

  useEffect(() => {
    let columnsEl = columnsRef.current! as HTMLElement;
    columnsEl.style.columnCount = String(columnCount);

    let columnsWidth = columnsEl.getBoundingClientRect().width;
    //console.log("columnsWidth: ", columnsWidth);

    //const maxWidth = window.innerWidth - 100;
    const parentEl = columnsEl.parentNode! as HTMLElement;
    const maxWidth = parentEl.getBoundingClientRect().width;
    //console.log("maxWidth: ", maxWidth);

    //for(let columnCount = getComputedStyle(columnsEl).columnCount ; columnsWidth > maxWidth )
    //let columnCount: number = parseInt(columnsEl.style.columnCount);
    //let columnCount: number = parseInt(getComputedStyle(columnsEl).columnCount);
    //console.log("columnCount: ", columnCount);
    while (columnsWidth > maxWidth && columnCount > 1) {
      columnsEl.style.columnCount = String(--columnCount);
      columnsWidth = columnsEl.getBoundingClientRect().width;
      //console.log("columnsWidth: ", columnsWidth);
    }
    //setColumnCount(columnCount);
  });

  return (
    <>
      <div style={{ display: "flex" }}>
        Базовая валюта:
        <Select
          initialValue={carrencyStore.quotesBase}
          initialOptions={carrencyStore.names}
          doneCallback={(name: string) => carrencyStore.setQuotesBase(name)}
          style={{ marginLeft: "0.5rem" }}
        />
      </div>
      <div style={{ overflowX: "auto", maxWidth: "100%" }}>
        <ul
          ref={columnsRef}
          style={{
            columnCount,
            columnGap: "2em",
            margin: "2rem 0",
            minWidth: "fit-content",
          }}
        >
          {carrencyStore.quotes.map((quote) => {
            return (
              <li
                key={quote.name}
                style={{
                  marginBottom: "0.25rem",
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
    </>
  );
});

export default Quotes;
