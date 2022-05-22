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
  };

  const hadleKeyDown = (e: any) => {
    //console.log("hadleKeyDown code: ", e.code);
    console.log("hadleKeyDown key: ", e.key);
    if (e.key === "Tab") {
      e.preventDefault();
      e.target.blur();
    } else if (e.key === "Enter") {
      e.target.blur();
    }
  };

  const handleClick = (e: any) => {
    e.target.select();
  };

  const handleBlur = (e: any) => {
    changeCallback(e.target.value);
  };

  return (
    <div className="vvb_input">
      <input
        type="text"
        value={value}
        style={{ textAlign: "right", ...style }}
        onChange={handleChange}
        onKeyDown={hadleKeyDown}
        onClick={handleClick}
        onBlur={handleBlur}
      ></input>
    </div>
  );
}

export default Input;
