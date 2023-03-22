import React from 'react';
import one from '../resources/1.jpg';
import two from '../resources/2.jpeg';
import three from '../resources/3.jpg';
import '../style/info-album.css';

function InfoAlbum(props) {
  return (
    <div className="album-container">
      <h1>상세 정보</h1>
      <div className="album">
        <table>
          <tbody>
            <tr>
              <td rowSpan={2} className="one album-pic">
                <img src={one} alt="" />
              </td>
              <td colSpan={2} className="two album-pic">
                <img src={two} alt="" />
              </td>
            </tr>
            <tr>
              <td className="three album-pic">
                <img src={three} alt="" />
              </td>
              <td className="four album-pic">
                <img src={three} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoAlbum;
