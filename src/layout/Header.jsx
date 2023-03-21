import React from 'react';
import logo from '../resources/logo.png';
import '../style/reset.css';
import '../style/header.css';

function Header(props) {
  return (
    <header>
      <nav>
        <img src={logo} class="main-logo" />
        <ul>
          <li>
            <a href="">로그인</a>
          </li>
          <li>
            <a href="">회원가입</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
