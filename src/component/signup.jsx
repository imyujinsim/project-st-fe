import React from 'react';
import logo from '../resources/logo.png';
import '../style/reset.css';
import '../style/signup.css';
import axios from 'axios';

function Signup(props) {
  const url = 'http://3.36.124.165:8080/account/join';

  const handleSubmit = async () => {
    await axios({
      url: url,
      method: 'post',
      data: {
        id: 'yujin',
        passwd: '1234',
        name: 'yujin',
        gender: '여',
        address: 'yujin@naver.com',
        tel: '010-8513-4832',
        city: 'busan',
        date: '1996-10-02',
      },
      withCredentials: true,
      headers: {
        'Content-Type': `application/json;charset=UTF-8`,
        Accept: 'application/json',

        // 추가
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
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
                  id="firstName"
                  placeholder="성"
                />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input
                  className="signup-input"
                  type="text"
                  id="lastName"
                  placeholder="이름"
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
                  id="emailAddress"
                  placeholder="아이디(이메일)"
                />
              </div>
            </div>
            <div className="col-md-6 mb-4 d-flex align-items-center">
              <div className="form-outline passwd ">
                <input
                  className="signup-input"
                  type="text"
                  name="passwd"
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
                  placeholder="생년월일"
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
