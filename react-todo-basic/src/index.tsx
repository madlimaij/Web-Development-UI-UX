import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavigationPath from "./models/NavigationPath";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {NavigationPath.map((el) => (
          <Route path={el.path} element={<el.component />} key={el.path} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
