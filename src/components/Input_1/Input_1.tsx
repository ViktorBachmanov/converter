import React, { useState, useRef, useEffect } from "react";

import "./Input_1.css";

interface Props {
  initialValue: string;
  changeCallback: (value: string) => void;
  style?: any;
}

function Input_1({ initialValue, changeCallback, style }: Props) {
  const [value, setValue] = useState(String(initialValue));

  const inputRef = useRef(null);
  const hiddenVal = useRef(null);

  useEffect(() => {
    const hiddenValEl = hiddenVal.current! as HTMLElement;
    const width = hiddenValEl.getBoundingClientRect().width;

    const inputEl = inputRef.current! as HTMLElement;
    inputEl.style.width = width + 20 + "px";
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const hadleKeyDown = (e: any) => {
    //console.log("hadleKeyDown code: ", e.code);
    console.log("hadleKeyDown key: ", e.key);
    switch (e.key) {
      case "Enter":
        e.target.blur();
        break;
    }
  };

  const handleClick = (e: any) => {
    e.target.select();

    // const inputEl = hiddenInput.current! as HTMLInputElement;
    // inputEl.focus();
  };

  const handleBlur = () => {
    changeCallback(value);
  };

  return (
    <div className="vvb_input_1" tabIndex={-1}>
      <input
        ref={inputRef}
        onClick={handleClick}
        onChange={handleChange}
        onKeyDown={hadleKeyDown}
        onBlur={handleBlur}
        value={value}
        style={{
          ...style,
        }}
      />
      <span
        style={{
          position: "absolute",
          visibility: "hidden",
          top: "0",
          left: "0",
        }}
        ref={hiddenVal}
      >
        {value}
      </span>
    </div>
  );
}

export default Input_1;
