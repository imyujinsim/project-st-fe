import React from 'react';
import logo from '../resources/logo.png';
import '../style/reset.css';
import '../style/header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} className="main-logo" />
        </Link>
        <ul>
          <li>
            <Link to="/login" className="nav-item">
              로그인
            </Link>
          </li>
          <li>
            <Link to="/signup" className="nav-item">
              회원가입
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
