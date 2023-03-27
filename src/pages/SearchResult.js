import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Search from "../component/Search";
import Result from "../searchResult/Result";
import axios from "axios";
// import handleResultSubmit from './handleEvent';
// import { createProxyMiddleware } from 'http-proxy-middleware';

export default function SearchResult() {
  const key = decodeURIComponent(process.env.REACT_APP_TOUR);
  const [data, setData] = useState("");
  // const [value, setValue] = useState('');
  // console.log(value);
  const [value, setValue] = useState("");
  // console.log(value);
  const [detail, setDetail] = useState('');

  useEffect(() => {
    const localValue = window.localStorage.getItem("query");
    console.log(window.localStorage.getItem("query"));

    const getData = async () => {
      await axios
        .get('/KorService1/searchKeyword1', {
          baseURL: 'https://apis.data.go.kr/B551011',
          params: {
            numOfRows: 20,
            pageNo: 1,
            MobileOS: "ETC",
            MobileApp: "STTour",
            _type: "json",
            listYN: "Y",
            arrange: "A",
            keyword: value ? value : localValue,
            contentTypeId: 12,
            serviceKey: key,
          },
        })
        .then((result) => {
          setData(result.data.response.body.items.item);
        });
    };
    void getData();
  }, [value]);

  const handleResultSubmit = (event) => {
    // console.log(event);
    event.preventDefault();
    const query = event.target[0].value;
    // setFormData(query);
    console.log(query);
    setValue(query);
    window.localStorage.setItem("query", query);
  };

  return (
    <>
      <Header />
      <hr />
      <Search setValue={setValue} onsubmit={handleResultSubmit} />
      <Result data={data} value={value} setDetail={setDetail} />
      <Footer />
    </>
  );
}
