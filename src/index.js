import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Info from './component/Info';
import ReviewTable from './component/ReviewTable';
import InfoAlbum from './component/InfoAlbum';
import KakaoMap from './component/KakaoMap';
import MyInfo from './mypage/MyInfo';
import { ListGroup } from 'react-bootstrap';
import List from './component/List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <hr />
    <MyInfo />
    <List title="찜한 목록" />
    <Footer />
  </React.StrictMode>
);
