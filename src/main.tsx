import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SearchProvidex from "./context/SearchProvidex";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SearchProvidex>
      <App />
    </SearchProvidex>
  </React.StrictMode>
);
