import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Myreview from "./mypage/Myreview";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <hr />
    <Myreview />

    <Footer />
  </React.StrictMode>
);
