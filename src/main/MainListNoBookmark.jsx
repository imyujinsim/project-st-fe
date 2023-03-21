import React from 'react';
import '../style/reset.css';
import '../style/main.css';
import List from '../component/List';
import NoBookmark from './NoBookmark';

function MainListNoBookmark(props) {
  return (
    <section>
      <List title="내 지역 관광지" />
      <List title="내 지역 관광지" />
      <NoBookmark />
    </section>
  );
}

export default MainListNoBookmark;
