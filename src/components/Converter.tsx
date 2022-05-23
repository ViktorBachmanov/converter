import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";

import Input_1 from "./Input_1/Input_1";
import Select from "./Select/Select";

import { ReactComponent as Equal } from "./svg/equal.svg";

import { StoreContext } from "../index";

const Converter = observer(function Converter() {
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;

  const handleChangeAmount = (value: string) => {
    const val = parseFloat(value);
    if (isNaN(val)) {
      console.log("Error: handleChangeAmount() - val isNaN");
      return;
    }
    carrencyStore.setAmount(val);
  };

  const handleChangeCurrency = (name: string) => {
    carrencyStore.setName(name);
  };

  const handleChangeBase = (name: string) => {
    carrencyStore.setConverterBase(name);
  };

  // if (carrencyStore.fetchStatus !== "success") {
  //   return <h2>Loading...</h2>;
  // }

  const value = carrencyStore.convert();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2rem",
        alignItems: "flex-end",
        fontSize: "200%",
        maxWidth: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <Input_1
          className="bg-gray-100 dark:bg-neutral-800 dark:text-slate-200 border-black dark:border-white"
          initialValue={String(carrencyStore.amount)}
          changeCallback={handleChangeAmount}
          style={{ textAlign: "right" }}
        />
        <Select
          initialValue={carrencyStore.name}
          initialOptions={carrencyStore.names}
          doneCallback={handleChangeCurrency}
          style={{ margin: "1rem" }}
        />
      </div>

      <Equal style={{ alignSelf: "center", width: "1em" }} />
      <div
        style={{
          display: "flex",
          //flexDirection: "column",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <Input_1
          className="bg-gray-100 dark:bg-neutral-800 dark:text-slate-200 border-black dark:border-white"
          initialValue={
            isNaN(value) ? "0" : value.toFixed(carrencyStore.accuracy)
          }
          style={{ textAlign: "right" }}
          isReadonly={true}
        />
        <Select
          initialValue={carrencyStore.converterBase}
          initialOptions={carrencyStore.names}
          doneCallback={handleChangeBase}
          style={{ margin: "1rem" }}
        />
      </div>
    </div>
  );
});

export default Converter;
