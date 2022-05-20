import React, { useState } from "react";

import "./Select.css";

interface Props {
  initialValue: string;
  options: string[];
}

function Select({ initialValue, options }: Props) {
  const [value, setValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  const handleSelect = (e: any) => {
    setValue(e.target.textContent);
    //setIsOpen(false);
  };

  return (
    <div className="vvb-select" style={{ width: "3em" }}>
      <input
        type="text"
        value={value}
        style={{ textAlign: "center", fontFamily: "'Roboto Mono', monospace" }}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>

      <ul
        className="vvb-select__list"
        style={{
          display: isOpen ? "block" : "none",
          fontFamily: "'Roboto Mono', monospace",
        }}
        onMouseDown={handleSelect}
      >
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
