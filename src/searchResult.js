import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Search from './component/Search';
import Result from './searchResult/Result';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <hr />
    <Search />
    <Result />
    <Footer />
  </React.StrictMode>
);
