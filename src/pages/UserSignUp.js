import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Signup from '../component/Signup';

function UserSignUp(props) {
  return (
    <>
      <Header />
      <hr />
      <Signup />
      <Footer />
    </>
  );
}

export default UserSignUp;
