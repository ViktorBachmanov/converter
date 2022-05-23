import React, { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";

import { observer } from "mobx-react-lite";

import AppBar from "./AppBar";
import Loader from "./Loader";
import { FetchStatus } from "../mobx/carrency/types";

//import NavBar from "./NavBar";
//import Input from "./Input/Input";

import { StoreContext } from "../index";

const Layout = observer(function () {
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;
  const themeStore = rootStore.theme;

  return (
    <div className="text-sm md:text-md lg:text-lg xl:text-xl">
      <AppBar />
      {carrencyStore.fetchStatus === FetchStatus.Fail ? (
        <div style={{ textAlign: "center" }}>
          {themeStore.tr("cacheDataUsed")}
        </div>
      ) : null}

      <div
        className="container p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <div style={{ display: "flex" }}>
          Количество знаков после точки:
          <Input
            initialValue={String(carrencyStore.accuracy)}
            changeCallback={handleChangeAccuracy}
            style={{ width: "2rem", marginLeft: "0.5rem" }}
          />
        </div> */}

        {carrencyStore.fetchStatus === FetchStatus.Loading ? (
          <Loader />
        ) : (
          <Outlet />
        )}
        {/* <Outlet /> */}
      </div>
    </div>
  );
});

export default Layout;
