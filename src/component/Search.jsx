import React from 'react';
import '../style/reset.css';
import '../style/search.css';

function Search(props) {
  return (
    <div className="search">
      <input
        type="text"
        className="search_bar"
        placeholder="도시나 관광지를 검색해보세요"
      />
    </div>
  );
}
export default Search;
