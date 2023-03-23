import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Info from '../component/Info';
import ReviewTable from '../component/ReviewTable';
import InfoAlbum from '../component/InfoAlbum';
import KakaoMap from '../component/KakaoMap';

function Detail(props) {
  return (
    <>
      <Header />
      <hr />
      <InfoAlbum />
      <Info />
      <ReviewTable />
      <KakaoMap />
      <Footer />
    </>
  );
}

export default Detail;
