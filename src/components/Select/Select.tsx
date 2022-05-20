import React, { useState } from "react";

import "./Select.css";

interface Props {
  initialValue: string;
}

function Select({ initialValue }: Props) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="vvb_select">
      <input
        type="text"
        value={value}
        style={{ textAlign: "center" }}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Select;
