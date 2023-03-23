import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Search from '../component/Search';
import Result from '../searchResult/Result';

function SearchResult(props) {
  return (
    <>
      <Header />
      <hr />
      <Search />
      <Result />
      <Footer />
    </>
  );
}

export default SearchResult;
