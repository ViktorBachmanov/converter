import React, { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";

import AppBar from "./AppBar";
import NavBar from "./NavBar";
import Input from "./Input/Input";

import { StoreContext } from "../index";

function Layout() {
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;

  const handleChangeAccuracy = (val: string) => {
    const accuracy = parseInt(val);
    if (isNaN(accuracy)) {
      console.log("Error: Accuracy is NaN");
      return;
    }

    carrencyStore.setAccuracy(accuracy);
  };

  return (
    <div className="Layout">
      <AppBar />

      <div
        className="container p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <NavBar />
        <div style={{ display: "flex" }}>
          Количество знаков после точки:
          <Input
            initialValue={String(carrencyStore.accuracy)}
            changeCallback={handleChangeAccuracy}
            style={{ width: "2rem", marginLeft: "0.5rem" }}
          />
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
