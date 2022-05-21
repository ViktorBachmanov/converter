import React, { useState } from "react";

import "./Input.css";

interface Props {
  initialValue: number;
  changeCallback: (value: number) => void;
}

function Input({ initialValue, changeCallback }: Props) {
  const [value, setValue] = useState(String(initialValue));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    changeCallback(parseFloat(e.target.value));
  };

  const hadleKeyDown = (e: any) => {
    if (e.code === "Tab") {
      e.preventDefault();
      e.target.blur();
    }
  };

  return (
    <div className="vvb_input">
      <input
        type="number"
        value={value}
        style={{ textAlign: "right" }}
        onChange={handleChange}
        onKeyDown={hadleKeyDown}
      ></input>
    </div>
  );
}

export default Input;
