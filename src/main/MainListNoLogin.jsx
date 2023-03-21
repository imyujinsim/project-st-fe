import React from 'react';
import '../style/reset.css';
import '../style/main.css';
import List from '../component/List';
import NoLogIn from './NoLogIn';

function MainListNoLogin(props) {
  return (
    <section>
      <List title="내 지역 관광지" />
      <List title="내 지역 관광지" />
      <NoLogIn />
    </section>
  );
}

export default MainListNoLogin;
