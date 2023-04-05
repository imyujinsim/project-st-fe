import React, { useState, useEffect } from 'react';
import logo from '../resources/logo.png';
import '../style/reset.css';
import '../style/agree.css';

function AgreeCheck(props) {
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
    }
  };
  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (ageCheck === true && useCheck === true && marketingCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck, marketingCheck]);

  const handleSubmit = (event) => {
    if (ageCheck && useCheck) {
    } else {
      event.preventDefault();
      alert('가입을 위해 필수사항에 동의를 해주세요.');
    }
  };

  return (
    <section className="signup">
      <div className="signup-wrapper">
        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 logo-wrapper">
          <img src={logo} width={300} />
        </h3>
        <form
          action="/signup"
          method="GET"
          className="agree-form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="row">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="checkAll"
                name="checkAll"
                checked={allCheck}
                onChange={allBtnEvent}
              />
              <label htmlFor="checkAll">
                실버타이거 이용약관, 개인정보 수집 및 이용, 위치정보
                이용약관(선택), 프로모션 정보 수신(선택)에 모두 동의합니다.
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="termsOfService"
                name="agreement"
                value="termsOfService"
                checked={ageCheck}
                onChange={ageBtnEvent}
              />
              <label htmlFor="termsOfService" className="required">
                이용약관 동의
              </label>
            </div>
            <div className="form-detail">
              <p>
                실버타이거에 오신 여러분을 환영합니다. 실버타이거 서비스 및
                제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한
                실버타이거 서비스의 이용과 관련하여 실버타이거 서비스를 제공하는
                실버타이거 주식회사(이하 실버타이거)와 이를 이용하는 실버타이거
                서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러
                여러분의 실버타이거 서비스 이용에 도움이 될 수 있는 유익한
                정보를 포함하고 있습니다.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="form-group">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="privacyPolicy"
                name="agreement"
                value="privacyPolicy"
                checked={useCheck}
                onChange={useBtnEvent}
              />
              <label htmlFor="privacyPolicy" className="required">
                개인정보 수집 및 이용 동의
              </label>
            </div>
            <div className="form-detail">
              <p>
                실버타이거 개인정보보호법에 따라 회원가입 신청하시는 분께
                수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적,
                개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시
                불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여
                주시기 바랍니다.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="form-group">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="allowPromotions"
                name="agreement"
                value="allowPromotions"
                checked={marketingCheck}
                onChange={marketingBtnEvent}
              />
              <label htmlFor="allowPromotions">프로모션 정보 수신 동의</label>
            </div>
            <div className="form-detail">
              <p>
                제공하는 이벤트/혜택 등 다양한 정보를 휴대전화(앱 알림 또는
                문자), 이메일로 받아보실 수 있습니다. 일부 서비스(별도 회원
                체계로 운영하거나 가입 이후 추가 가입하여 이용하는 서비스 등)의
                경우, 개별 서비스에 대해 별도 수신 동의를 받을 수 있으며,
                이때에도 수신 동의에 대해 별도로 안내하고 동의를 받습니다.
              </p>
            </div>
          </div>

          <button type="submit" className="next-button">
            확인
          </button>
        </form>
      </div>
    </section>
  );
}

export default AgreeCheck;
