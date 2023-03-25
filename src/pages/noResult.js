import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Search from "../component/Search";
import NoResult from "../searchResult/NoResult";
import List from "../component/List";

function No(props) {
  return (
    <>
      <Header />
      <hr />
      <Search />
      <NoResult />
      <List title="찜한 관광지" />
      <Footer />
    </>
  );
}
export default No;
