import React from 'react';
import logo from '../resources/logo.png';
import '../style/reset.css';
import '../style/login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';

function Login(props) {
  // const LoginPage = () => {
  //   const navigate = useNavigate();
  //   const { state } = useLocation();

  //   const handleLogin = () => {
  //     Cookies.set("id", "id");

  //     if (state) {
  //       navigate(state);
  //     } else {
  //       navigate("/login");
  //     }
  //   };
  // };
  const url = encodeURI('http://3.36.124.165:8080/account/login');

  const handleSubmit = async () => {
    await axios({
      url: url,
      method: 'post',
      data: { id: 'donghee1234', passwd: 'donghee1234' },
      withCredentials: false,
      headers: {
        'Content-Type': `application/json;charset=UTF-8`,
        Accept: 'application/json',

        // 추가
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-wrapper">
        <h2>
          <img src={logo} width={300} />
        </h2>
        <form action="/" id="login-form" onSubmit={handleSubmit}>
          <input type="text" name="userName" placeholder="아이디(이메일)" />
          <input type="password" name="userPassword" placeholder="비밀번호" />
          <label htmlFor="remember-check">
            <input type="checkbox" id="remember-check" />
            아이디 저장하기
          </label>
          <input type="submit" defaultValue="로그인" />
          <Link to="/signup">
            <button
              // onClick={LoginPage.handleLogin}
              type="button"
              className="btn text"
              style={{ float: 'right' }}
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
