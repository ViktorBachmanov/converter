import React, { useContext, useState } from "react";

import Input from "./Input/Input";
import Select from "./Select/Select";

import { StoreContext } from "../index";

const initialName = "EUR";

function Converter() {
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;

  const [amount, setAmount] = useState(1);
  const [currencyName, setCurrencyName] = useState(initialName);
  const [value, setValue] = useState(() =>
    carrencyStore.evalQuote(initialName)
  );

  const handleChangeAmount = (value: number) => {
    const quote = carrencyStore.evalQuote(currencyName);
    setValue(quote * value);
    setAmount(value);
  };

  const handleChangeCurrency = (name: string) => {
    setCurrencyName(name);
    const quote = carrencyStore.evalQuote(name);
    setValue(quote * amount);
  };

  const handleChangeBase = (name: string) => {
    carrencyStore.setBase(name);
    const quote = carrencyStore.evalQuote(currencyName);
    setValue(quote * amount);
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
        <Input initialValue={amount} changeCallback={handleChangeAmount} />{" "}
        <Select
          initialValue={initialName}
          initialOptions={carrencyStore.names}
          doneCallback={handleChangeCurrency}
        />{" "}
        ={isNaN(value) ? " 0 " : value}
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
