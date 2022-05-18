import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Converter from "./components/Converter";
import Currencies from "./components/Currencies";
import { Urls } from "./constants";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={Urls.HOME} element={<Layout />}>
        <Route index element={<Converter />} />
        <Route path={Urls.CURRENCIES} element={<Currencies />} />
      </Route>
    </Routes>
  );
}

export default App;
