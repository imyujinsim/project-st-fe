import React from 'react';
import logo from '../resources/logo.png';
import '../style/reset.css';
import '../style/signup.css';

function Signup(props) {
  return (
    <section className="signup">
      <div className="signup-wrapper">
        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 logo-wrapper">
          <img src={logo} width={300} />
        </h3>
        <form className="signup-form">
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
              type="button"
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
