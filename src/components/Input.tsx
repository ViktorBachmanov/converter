import React, { useState } from "react";

import styles from "./Input.module.css";

interface Props {
  initialValue: string;
}

function Input({ initialValue }: Props) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className={`dark ${styles.MyInput}`}>
      <span>{value}</span>
    </div>
  );
}

export default Input;
