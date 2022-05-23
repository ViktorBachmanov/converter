import React, { useState, useRef, useEffect } from "react";

import "./Input.css";

interface Props {
  initialValue: string;
  changeCallback?: (value: string) => void;
  className?: string;
  style?: any;
  title?: string;
  isReadonly?: boolean;
}

function Input({
  initialValue,
  changeCallback,
  className,
  style,
  title,
  isReadonly = false,
}: Props) {
  const [value, setValue] = useState(initialValue);

  const inputRef = useRef(null);
  const hiddenVal = useRef(null);

  useEffect(() => {
    if (isReadonly) {
      setValue(initialValue);
    }
    const hiddenValEl = hiddenVal.current! as HTMLElement;
    const width = hiddenValEl.getBoundingClientRect().width;

    const inputEl = inputRef.current! as HTMLElement;
    inputEl.style.width = width + 20 + "px";
  }, [value, setValue, isReadonly, initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const hadleKeyDown = (e: any) => {
    switch (e.key) {
      case "Enter":
        e.target.blur();
        break;
    }
  };

  const handleClick = (e: any) => {
    e.target.select();
  };

  const handleBlur = () => {
    if (changeCallback) {
      changeCallback(value);
    }
  };

  return (
    <div
      className={isReadonly ? "vvb-input-1 readonly" : "vvb-input-1"}
      tabIndex={-1}
    >
      <input
        ref={inputRef}
        tabIndex={-1}
        onClick={handleClick}
        onChange={handleChange}
        onKeyDown={hadleKeyDown}
        onBlur={handleBlur}
        value={value}
        title={title}
        className={className}
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

export default Input;
