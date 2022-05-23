import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import Input from "./Input/Input";

import { StoreContext } from "../index";

const Accuracy = observer(function () {
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;
  const themeStore = rootStore.theme;

  const handleChangeAccuracy = (val: string) => {
    const accuracy = parseInt(val);
    if (isNaN(accuracy)) {
      console.log("Error: Accuracy is NaN");
      return;
    }

    carrencyStore.setAccuracy(accuracy);
  };

  return (
    <Input
      initialValue={String(carrencyStore.accuracy)}
      changeCallback={handleChangeAccuracy}
      className="bg-slate-400 dark:bg-slate-700"
      style={{ minWidth: "2rem", textAlign: "center", margin: "0.5rem" }}
      title={themeStore.tr("accuracy")}
    />
  );
});

export default Accuracy;
