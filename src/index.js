import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Info from "./component/info";
import MapTest from "./component/MapTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <hr />
    <Info />
    <MapTest />

    <Footer />
  </React.StrictMode>
);
