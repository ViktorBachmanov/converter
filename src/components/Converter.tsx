import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";

import Input from "./Input/Input";
import Select from "./Select/Select";

import { StoreContext } from "../index";

const initialName = "EUR";

const Converter = observer(function Converter() {
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;

  const [amount, setAmount] = useState(1);
  const [currencyName, setCurrencyName] = useState(initialName);
  const [value, setValue] = useState(() =>
    carrencyStore.evalQuote(initialName)
  );

  const handleChangeAmount = (value: string) => {
    const quote = carrencyStore.evalQuote(currencyName);
    const val = parseFloat(value);
    if (isNaN(val)) {
      console.log("Error: handleChangeAmount() - val isNaN");
      return;
    }
    setValue(quote * val);
    setAmount(val);
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
      <div>
        <Input
          initialValue={String(amount)}
          changeCallback={handleChangeAmount}
        />{" "}
        <Select
          initialValue={initialName}
          initialOptions={carrencyStore.names}
          doneCallback={handleChangeCurrency}
        />{" "}
        ={isNaN(value) ? " 0 " : value.toFixed(carrencyStore.accuracy)}
        <Select
          initialValue={carrencyStore.base}
          initialOptions={carrencyStore.names}
          doneCallback={handleChangeBase}
        />
      </div>
    </div>
  );
});

export default Converter;
