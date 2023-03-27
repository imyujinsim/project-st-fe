import React, { useState } from 'react';
import '../style/reset.css';
import '../style/search.css';
import queryString from 'query-string';

const searchBar = document.querySelector('.search-bar-main');

function Search(props) {
  // const search = document.querySelector('.search-form');

  return (
    <div className="search">
      <form
        action="/result"
        onSubmit={(event) => {
          props.onsubmit(event);
        }}
        className="search-form"
      >
        <input
          type="text"
          className="search-bar-main"
          placeholder="도시나 관광지를 검색해보세요"
        />
      </form>
    </div>
  );
}
export default Search;
