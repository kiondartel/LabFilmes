import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/MoviesCard";
import Search from "./components/Search";
import Home from "./components/Home";
import AppLab from "./App/App";
import Global from "./styles/globalstyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLab />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movies />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
      <Global />
    </BrowserRouter>
  </React.StrictMode>
);
