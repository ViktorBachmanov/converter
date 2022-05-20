import React, { useState, useRef } from "react";

import "./Select.css";

interface Props {
  initialValue: string;
  initialOptions: string[];
  doneCallback?: any;
}

function Select({ initialValue, initialOptions, doneCallback }: Props) {
  const [options, setOptions] = useState(initialOptions);
  const [value, setValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();

    setValue(value);

    const pattern = new RegExp(`^${value}.*`);
    //console.log(pattern);
    const filteredOptions = initialOptions.filter((option) => {
      const rslt = option.match(pattern);
      //console.log(rslt);
      return rslt;
    });
    //console.log(options);
    setOptions(filteredOptions);

    if (value.length === 3 && filteredOptions.includes(value)) {
      selectDone(value);
    }
  };

  const selectDone = (value: string) => {
    //setIsOpen(false);
    const inputEl = inputRef.current! as HTMLImageElement;
    inputEl.blur();
    doneCallback(value);
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
    selectDone(e.target.textContent);
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
        ref={inputRef}
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
