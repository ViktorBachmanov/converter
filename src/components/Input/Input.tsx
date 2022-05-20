import React, { useState } from "react";

import "./Input.css";

interface Props {
  initialValue: string;
}

function Input({ initialValue }: Props) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="vvb_input">
      <input
        type="text"
        value={value}
        style={{ textAlign: "right" }}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Input;
