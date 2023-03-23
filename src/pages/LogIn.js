import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Login from '../component/Login';

function LogIn(props) {
  return (
    <>
      <Header />
      <hr />
      <Login />
      <Footer />
    </>
  );
}

export default LogIn;
