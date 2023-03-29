import React from "react";
import logo from "../resources/logo.png";
import "../style/reset.css";
import "../style/header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} className="main-logo" />
        </Link>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/userinfo" className="nav-item">
                  마이페이지
                </Link>
              </li>
              <li>
                <Link to="/logout" className="nav-item">
                  로그아웃
                </Link>
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
                <Link to="/signup" className="nav-item">
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
