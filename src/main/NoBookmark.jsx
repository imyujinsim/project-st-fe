import React from 'react';
import '../style/reset.css';
import '../style/main.css';
import '../style/btn.css';

function NoBookmark(props) {
  return (
    <article className="wrapper list no-login">
      <div className="title">
        <h1>찜한 목록</h1>
      </div>
      <div className="ask-login">
        <p>북마크를 추가해주세요🙏🏻</p>
      </div>
    </article>
  );
}

export default NoBookmark;
