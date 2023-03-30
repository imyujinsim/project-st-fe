import React from 'react';
import logo from '../resources/logo.png';
import '../style/reset.css';
import '../style/signup.css';
import axios from 'axios';

function Signup(props) {
  const url = '//43.201.150.104:8080/account/join';

  const handleSubmit = async () => {
    const identification = document.querySelector('#identification').value;
    const passwd = document.querySelector('#passwd').value;
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const birth = document.querySelector('#birth').value;
    const tel = document.querySelector('#phoneNumber').value;

    await axios({
      url: url,
      method: 'post',
      data: {
        id: identification,
        passwd: passwd,
        name: name,
        address: email,
        tel: tel,
        date: birth,
      },
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
    <section className="signup">
      <div className="signup-wrapper">
        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 logo-wrapper">
          <img src={logo} width={300} />
        </h3>
        <form className="signup-form" action="/" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input
                  className="signup-input"
                  type="text"
                  id="name"
                  placeholder="이름"
                />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input
                  className="signup-input"
                  type="email"
                  id="email"
                  placeholder="이메일"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 d-flex align-items-center">
              <div className="form-outline w-100">
                <input
                  className="signup-input"
                  type="text"
                  id="identification"
                  placeholder="아이디"
                />
              </div>
            </div>
            <div className="col-md-6 mb-4 d-flex align-items-center">
              <div className="form-outline passwd ">
                <input
                  className="signup-input"
                  type="password"
                  name="passwd"
                  id="passwd"
                  placeholder="비밀번호"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline">
                <input
                  className="signup-input"
                  type="text"
                  name="userName"
                  id="birth"
                  placeholder="생년월일 (예시:981117)"
                />
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline">
                <input
                  className="signup-input"
                  type="text"
                  id="phoneNumber"
                  placeholder="전화번호"
                />
              </div>
            </div>
          </div>
          <div>
            <input
              type="submit"
              className="signup-btn"
              defaultValue="회원가입"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
