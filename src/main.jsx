import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Search from "./components/Search";
import App from "./components/AppContent/index";
import Home from "./home/Home";
import Global from "./styles/globalstyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<App />} />
          <Route path="/movie/:id" element={<Movies />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
      <Global />
    </BrowserRouter>
  </React.StrictMode>
);
