import React from 'react';
import logo from '../resources/logo.png';
import '../style/reset.css';
import '../style/header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  const isLoggedIn = props.isLoggedIn;
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
    localStorage.setItem('bookmark', '[]');
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} className="main-logo" />
        </Link>
        <ul>
          {token ? (
            <>
              <li>
                <Link to="/userinfo" className="nav-item">
                  마이페이지
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="nav-item">
                  로그아웃
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="nav-item">
                  로그인
                </Link>
              </li>
              <li>
                <Link to="/agree" className="nav-item">
                  회원가입
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
