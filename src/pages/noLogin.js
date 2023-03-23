import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Search from '../component/Search';
import NoResult from '../searchResult/NoResult';
import NoLogIn from '../main/NoLogIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <hr />
    <Search />
    <NoResult />
    <NoLogIn />
    <Footer />
  </React.StrictMode>
);
