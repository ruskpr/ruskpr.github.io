import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/layout/Header";
import BackToTop from "./components/utilities/BackToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <BackToTop />
  </React.StrictMode>
);
