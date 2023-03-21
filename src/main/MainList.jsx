import React from 'react';
import '../style/reset.css';
import '../style/main-list.css';
import List from '../component/List';

function MainList(props) {
  return (
    <section>
      <List title="내 지역 관광지" />
      <List title="내 지역 관광지" />
      <List title="내 지역 관광지" />
    </section>
  );
}

export default MainList;
