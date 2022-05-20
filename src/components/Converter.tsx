import React from "react";

import Input from "./Input/Input";

function Converter() {
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
        <Input initialValue="1" /> EUR = 65.44
      </span>
    </div>
  );
}

export default Converter;
