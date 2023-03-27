import React from "react";
import logo from "../resources/logo.png";
import "../style/reset.css";
import "../style/login.css";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className="login-wrapper">
      <div className="login-form-wrapper">
        <h2>
          <img src={logo} width={300} />
        </h2>
        <form method="post" action="" id="login-form">
          <input type="text" name="userName" placeholder="아이디(이메일)" />
          <input type="password" name="userPassword" placeholder="비밀번호" />
          <label htmlFor="remember-check">
            <input type="checkbox" id="remember-check" />
            아이디 저장하기
          </label>
          <input type="submit" defaultValue="로그인" />
          <Link to="/signup">
            <button
              type="button"
              className="btn text"
              style={{ float: "right" }}
            >
              회원가입
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
