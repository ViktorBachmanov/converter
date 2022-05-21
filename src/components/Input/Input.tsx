import React, { useState } from "react";

import "./Input.css";

interface Props {
  initialValue: string;
  changeCallback: (value: string) => void;
  style?: any;
}

function Input({ initialValue, changeCallback, style }: Props) {
  const [value, setValue] = useState(String(initialValue));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    changeCallback(e.target.value);
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
        type="text"
        value={value}
        style={{ textAlign: "right", ...style }}
        onChange={handleChange}
        onKeyDown={hadleKeyDown}
      ></input>
    </div>
  );
}

export default Input;
