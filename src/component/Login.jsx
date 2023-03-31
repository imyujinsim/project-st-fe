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
  const url = 'https://api.bodam.site:8080/account/login';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = document.querySelector('#identification').value;
    const passwd = document.querySelector('#passwd').value;

    const data = JSON.stringify({ id: 'donghee1234', passwd: 'donghee1234' });

    axios.defaults.baseURL = 'https://api.bodam.site:8080';
    axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
    await axios
      .post('https://api.bodam.site:8080/account/login', {
        method: 'POST',
        data: data,
        withCredentials: true,
        // headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        console.log(localStorage.getItem('token'));
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
        <form
          action="/"
          id="login-form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            name="userName"
            placeholder="아이디"
            id="identification"
          />
          <input
            type="password"
            name="userPassword"
            placeholder="비밀번호"
            id="passwd"
          />
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
