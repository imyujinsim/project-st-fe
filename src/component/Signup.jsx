import React from 'react';
import logo from '../resources/logo.png';
import '../style/reset.css';
import '../style/signup.css';
import axios from 'axios';

function Signup(props) {
  const url = 'https://api.bodam.site:8080/account/join';

  // 유효성 오류 메시지
  const [identificationError, setIdentificationMessage] = React.useState('');
  const [passwdError, setPasswdMessage] = React.useState('');
  const [nameError, setNameMessage] = React.useState('');
  const [emailError, setEmailMessage] = React.useState('');
  const [phoneError, setPhoneMessage] = React.useState('');
  const [birthError, setBirthMessage] = React.useState('');

  // 유효성 check(True, False)
  const [isIdentification, setIsIdentification] = React.useState(false);
  const [isPasswd, setIsPasswd] = React.useState(false);
  const [isName, setIsName] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState(false);
  const [isPhone, setIsPhone] = React.useState(false);
  const [isBirth, setIsBirth] = React.useState(false);

  // 서버 요청
  const handleSubmit = async (event) => {
    if (
      isIdentification &&
      isPasswd &&
      isName &&
      isEmail &&
      isPhone &&
      isBirth
    ) {
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
          email: email,
          tel: tel,
          date: birth,
        },
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',

          // 추가
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Credentials': true,
        },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          alert('존재하는 ID 입니다.');
        });
    } else {
      event.preventDefault();
      alert('올바른 정보를 입력해주세요.');
    }
  };

  //아이디 부분
  const handleIdentificationErrorCheck = (event) => {
    const identification = event.target.value;
    const identificationPattern = /^[A-Za-z0-9]{6,20}$/;
    const isValidIdentification = identificationPattern.test(identification);
    if (!isValidIdentification) {
      setIdentificationMessage('유효하지 않은 아이디 입니다.');
      setIsIdentification(false);
    } else {
      setIdentificationMessage('');
      setIsIdentification(true);
    }
  };
  // 비밀번호 부분
  const handlePasswdCheck = (event) => {
    const passwdValue = event.target.value;
    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const isValidPassword = passwordPattern.test(passwdValue);
    if (!isValidPassword) {
      setPasswdMessage('유효하지 않은 비밀번호입니다.');
      setIsPasswd(false);
    } else {
      setPasswdMessage('');
      setIsPasswd(true);
    }
  };
  // 이름 부분
  const handleNameCheck = (event) => {
    const nameValue = event.target.value;
    const namePattern = /^[가-힣]{2,50}$/;
    const isValidName = namePattern.test(nameValue);
    if (!isValidName) {
      setNameMessage('유효하지 않은 이름입니다.');
      setIsName(false);
    } else {
      setNameMessage('');
      setIsName(true);
    }
  };

  //이메일 부분
  const handleEmailCheck = (event) => {
    const emailValue = event.target.value;
    // 이메일 주소의 유효성을 검사
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(emailValue);

    // 유효하지 않은 경우에는 에러 메시지를 표시
    if (!isValidEmail) {
      setEmailMessage('유효하지 않은 이메일 주소입니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('');
      setIsEmail(true);
    }
  };

  // 폰 번호 부분
  const handlePhoneCheck = (event) => {
    event.target.value = event.target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    const phoneValue = event.target.value;
    const phonePatter = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    const isValidPhone = phonePatter.test(phoneValue);

    if (!isValidPhone) {
      setPhoneMessage('유효한 전화번호가 아닙니다.');
      setIsPhone(false);
    } else {
      setPhoneMessage('');
      setIsPhone(true);
    }
  };

  // 생년월일 체크
  const handleBirthCheck = (event) => {
    const birthValue = event.target.value;
    const birthPatter = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])/;
    const isValidBirth = birthPatter.test(birthValue);

    if (!isValidBirth) {
      setBirthMessage('유효한 생년월일을 입력해주세요');
      setIsBirth(false);
    } else {
      setBirthMessage('');
      setIsBirth(true);
    }
  };

  return (
    <section className="signup">
      <div className="signup-wrapper">
        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 logo-wrapper">
          <img src={logo} width={300} />
        </h3>
        <form
          className="signup-form"
          action="/"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input
                  className="signup-input"
                  type="text"
                  id="name"
                  maxlength="50"
                  placeholder="이름(한글 2~50자)"
                  onChange={handleNameCheck}
                />
                {nameError && <p style={{ color: 'red' }}>{nameError} </p>}
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input
                  className="signup-input"
                  type="email"
                  id="email"
                  placeholder="이메일"
                  onChange={handleEmailCheck}
                />
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
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
                  placeholder="아이디(영문 또는 숫자 6~20자리)"
                  maxlength="20"
                  onChange={handleIdentificationErrorCheck}
                />
                {identificationError && (
                  <p style={{ color: 'red' }}>{identificationError}</p>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-4 d-flex align-items-center">
              <div className="form-outline passwd ">
                <input
                  className="signup-input"
                  type="password"
                  name="passwd"
                  id="passwd"
                  placeholder="비밀번호(영문,숫자,!@#$% 포함 8~20자)"
                  maxlength="20"
                  onChange={handlePasswdCheck}
                />
                {passwdError && <p style={{ color: 'red' }}>{passwdError}</p>}
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
                  maxlength="6"
                  onChange={handleBirthCheck}
                />
                {birthError && <p style={{ color: 'red' }}>{birthError}</p>}
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline">
                <input
                  className="signup-input"
                  type="text"
                  id="phoneNumber"
                  placeholder="전화번호"
                  maxlength="13"
                  onChange={handlePhoneCheck}
                />
                {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
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
