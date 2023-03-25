import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Search from "../component/Search";
import Result from "../searchResult/Result";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { createProxyMiddleware } from 'http-proxy-middleware';

export default function SearchResult() {
  const key = decodeURIComponent(process.env.REACT_APP_TOUR);
  const [data, setData] = useState("");
  // const [value, setValue] = useState('');
  // console.log(value);
  const navigate = useNavigate();
  const [inputvalue, setValue] = useState("");
  console.log(inputvalue);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("/searchKeyword1", {
          baseURL: "https://apis.data.go.kr/B551011/KorService1",
          params: {
            numOfRows: 10,
            pageNo: 1,
            MobileOS: "ETC",
            MobileApp: "STTour",
            _type: "json",
            listYN: "Y",
            arrange: "A",
            keyword: inputvalue,
            contentTypeId: 12,
            serviceKey: key,
          },
        })
        .then((result) => setData(result.data.response.body.items.item));
    };
    void getData();
  }, [inputvalue]);

  const search = document.querySelector(".search-form");

  return (
    <>
      <Header />
      <hr />
      <Search setValue={setValue} />
      <Result data={data} />
      <Footer />
    </>
  );
}
