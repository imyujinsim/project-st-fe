import React from 'react';
import logo from '../resources/logo.png';
import '../style/reset.css';
import '../style/info.css';
import TourInfo from './TourInfo';

function Info(props) {
  const detail = window.localStorage.getItem('detail');

  return (
    <div className="info">
      <h1>{detail}</h1>
      <TourInfo intro={props.intro} detailData={props.detail} />
      <hr />
    </div>
  );
}
export default Info;
