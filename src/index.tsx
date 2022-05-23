import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import RootStore from "./mobx/RootStore";

const rootStore = new RootStore();

export const StoreContext = createContext<RootStore>(rootStore);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={rootStore}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
