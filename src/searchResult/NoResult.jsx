import React from 'react';
import icon from '../resources/icons/icon-no-result.png';
import '../style/reset.css';
import '../style/list.css';
import '../style/no-result.css';

function NoResult(props) {
  return (
    <div className="no-result">
      <div className="no-result-logo">
        <img src={icon} alt="no result" />
        <p>검색 결과가 없습니다😥</p>
      </div>
    </div>
  );
}

export default NoResult;
