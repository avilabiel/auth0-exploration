import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppWithRedirect from "./AppWithRedirect";
import AppWithAPI from "./AppWithAPI";
import AppWithSDK from "./AppWithSDK";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppWithSDK />
  </React.StrictMode>
);
