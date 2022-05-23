import React from "react";

import "./Loader.scss";

export default function Loader() {
  return (
    <div
      className="loader"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 200px)",
      }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
