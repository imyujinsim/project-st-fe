import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Myreview from "./mypage/Myreview";
import MyInfo from './mypage/MyInfo';
import { ListGroup } from 'react-bootstrap';
import List from './component/List';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <hr />
    <MyInfo />
    <List title="찜한 목록" />
    <Myreview />
    <Footer />
  </React.StrictMode>
);
