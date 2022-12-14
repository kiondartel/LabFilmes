import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./home/Home";
import Global from "./styles/globalstyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <Global />
  </React.StrictMode>
);
