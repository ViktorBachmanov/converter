import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { observer } from "mobx-react-lite";

import AppBar from "./AppBar";
import Loader from "./Loader";
import { FetchStatus } from "../mobx/carrency/types";

import { StoreContext } from "../index";

const Layout = observer(function () {
  const rootStore = useContext(StoreContext);
  const carrencyStore = rootStore.carrency;
  const themeStore = rootStore.theme;

  return (
    <div className="text-sm md:text-md lg:text-md xl:text-lg">
      <AppBar />
      {carrencyStore.fetchStatus === FetchStatus.Fail ? (
        <div style={{ textAlign: "center", marginTop: "0.5em" }}>
          {themeStore.tr("cacheDataUsed")}
        </div>
      ) : null}

      <div
        className="container p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {carrencyStore.fetchStatus === FetchStatus.Loading ? (
          <Loader />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
});

export default Layout;
