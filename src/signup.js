import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Signup from "./component/signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <hr />
    <Signup />

    <Footer />
  </React.StrictMode>
);
