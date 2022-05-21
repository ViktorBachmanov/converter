import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className="Layout">
      <AppBar />

      <div
        className="container pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
