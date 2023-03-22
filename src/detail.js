
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Info from './component/Info';
import ReviewTable from './component/ReviewTable';
import InfoAlbum from './component/InfoAlbum';
import KakaoMap from './component/KakaoMap';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <InfoAlbum />
    <Info />
    <hr />
    <ReviewTable />
    <KakaoMap />
    <Footer />
  </React.StrictMode>
);
