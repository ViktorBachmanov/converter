import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Converter from "./components/Converter";
import Quotes from "./components/Quotes";
import { Urls } from "./constants";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={Urls.HOME} element={<Layout />}>
        <Route index element={<Converter />} />
        <Route path={Urls.QUOTES} element={<Quotes />} />
      </Route>
    </Routes>
  );
}

export default App;
