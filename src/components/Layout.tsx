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
        className="container p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12"
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
