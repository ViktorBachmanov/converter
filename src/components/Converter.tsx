import React, { useContext } from "react";

import Input from "./Input/Input";
import Select from "./Select/Select";

import { StoreContext } from "../index";

function Converter() {
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;

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
        <Select initialValue="EUR" options={carrencyStore.names} /> = 65.44{" "}
        <Select
          initialValue={carrencyStore.base}
          options={carrencyStore.names}
        />
      </span>
    </div>
  );
}

export default Converter;
