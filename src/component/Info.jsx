import React from 'react';
import logo from '../resources/logo.png';
import '../style/reset.css';
import '../style/info.css';
import TourInfo from './TourInfo';

function Info(props) {
  return (
    <div class="info">
      <h1>해운대</h1>
      <TourInfo />
      <hr />
    </div>
  );
}
export default Info;
