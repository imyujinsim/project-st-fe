import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Myreview from '../mypage/Myreview';
import MyInfo from '../mypage/MyInfo';
import List from '../component/List';

function UserInfo(props) {
  return (
    <>
      <Header />
      <hr />
      <MyInfo />
      <List title="찜한 관광지" />
      <Myreview />
      <Footer />
    </>
  );
}

export default UserInfo;
