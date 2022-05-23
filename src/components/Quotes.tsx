import React, { useContext, useEffect, useRef, useState } from "react";

import { observer } from "mobx-react-lite";

import { StoreContext } from "../index";

import Select from "./Select/Select";

const Quotes = observer(function () {
  console.log("Currencies");
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;
  const themeStore = rootStore.theme;

  const accuracy = carrencyStore.accuracy;

  const columnsRef = useRef(null);

  //const [columnCount, setColumnCount] = useState(5);
  let columnCount = 7; // starting value

  //let columnsWidth = 0;

  useEffect(() => {
    let columnsEl = columnsRef.current! as HTMLElement;
    columnsEl.style.columnCount = String(columnCount);

    let columnsWidth = columnsEl.getBoundingClientRect().width;

    const parentEl = columnsEl.parentNode! as HTMLElement;
    const maxWidth = parentEl.getBoundingClientRect().width;

    while (columnsWidth > maxWidth && columnCount > 1) {
      columnsEl.style.columnCount = String(--columnCount);
      columnsWidth = columnsEl.getBoundingClientRect().width;
    }
  });

  return (
    <>
      <div
        style={{ display: "flex", fontSize: "120%", marginTop: "1em" }}
        className="font-medium"
      >
        {themeStore.tr("baseCurrency")}:
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
