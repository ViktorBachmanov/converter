import React, { useContext, useState } from "react";

import Input from "./Input/Input";
import Select from "./Select/Select";

import { StoreContext } from "../index";

function Converter() {
  const initialName = "EUR";

  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;

  const [value, setValue] = useState(() =>
    carrencyStore.evalQuote(initialName)
  );

  const handleChangeCurrency = (name: string) => {
    const quote = carrencyStore.evalQuote(name);
    setValue(quote);
  };

  const handleChangeBase = (name: string) => {
    carrencyStore.setBase(name);
    const quote = carrencyStore.evalQuote(name);
    setValue(quote);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "200%",
      }}
    >
      {/* <h2>Конвертер</h2> */}
      <span>
        <Input initialValue="1" />{" "}
        <Select
          initialValue={initialName}
          initialOptions={carrencyStore.names}
          doneCallback={handleChangeCurrency}
        />{" "}
        ={value}
        <Select
          initialValue={carrencyStore.base}
          initialOptions={carrencyStore.names}
          doneCallback={handleChangeBase}
        />
      </span>
    </div>
  );
}

export default Converter;
