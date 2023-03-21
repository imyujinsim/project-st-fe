import React from 'react';
import '../style/reset.css';
import '../style/main.css';
import '../style/btn.css';

function NoLogIn(props) {
  return (
    <article className="wrapper list no-login">
      <div className="title">
        <h1>찜한 목록</h1>
      </div>
      <div className="ask-login">
        <button class="main-login-btn">
          <a href="">로그인</a>
        </button>
      </div>
    </article>
  );
}

export default NoLogIn;
