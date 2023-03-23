import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Search from '../component/Search';
import MainList from '../main/MainList';

function Main(props) {
  return (
    <>
      <Header />
      <hr />
      <Search />
      <MainList />
      <Footer />
    </>
  );
}

export default Main;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
