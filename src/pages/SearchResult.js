import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Search from "../component/Search";
import Result from "../searchResult/Result";
import axios from "axios";

// const env = require('dotenv').config();

async function getData() {
  try {
    const client = axios.create({
      baseURL: "http://apis.data.go.kr/B551011/KorService1",
      headers: {
        ServiceKey: process.env.REACT_APP_TOUR,
      },
    });

    const response = await client.get("/searchKeyword", {
      params: {
        numOfRows: 10,
        pageNo: 1,
        MobileOS: "ETC",
        MobileApp: "STTour",
        _type: "json",
        listYN: "Y",
        arrange: "A",
        keyword: "강원",
        contentTypeId: 12,
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

function SearchResult(props) {
  // console.log(env);
  return (
    <>
      <Header />
      <hr />
      <Search />
      <Result data={getData()} />
      <Footer />
    </>
  );
}

export default SearchResult;
