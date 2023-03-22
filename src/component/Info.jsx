import React from 'react';
import logo from '../resources/logo.png';
import '../style/reset.css';
import '../style/info.css';
import ListItem from './ListItem';
import List from './List';
import ReviewTable from './ReviewTable';
import InfoAlbum from './InfoAlbum';
function Info(props) {
  return (
    <section className="info">
      <InfoAlbum />
      <div className="info-info"></div>
      <ReviewTable />
      <div id="map"></div>
    </section>
  );
}
export default Info;
