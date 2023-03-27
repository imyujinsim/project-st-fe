import React from 'react';
import '../style/info-album.css';
import noPic from '../resources/icons/no_image.gif';

function InfoAlbum(props) {
  const data = props.data;
  console.log(data);

  const pictures = [];
  const alts = [];
  if (data) {
    Array.from(data).map((item) => {
      pictures.push(item.originimgurl);
      alts.push(item.imgname);
    });
  } else {
    console.log('데이터 없음');
  }
  // console.log(pictures);

  return (
    <div className="album-container">
      <h1>상세 정보</h1>
      <div className="album">
        <table>
          <tbody>
            <tr>
              <td rowSpan={2} className="one album-pic">
                <img
                  src={pictures[0] ? pictures[0] : noPic}
                  alt={alts[0] ? alts[0] : ''}
                />
              </td>
              <td colSpan={2} className="two album-pic">
                <img
                  src={pictures[1] ? pictures[1] : noPic}
                  alt={alts[0] ? alts[0] : ''}
                />
              </td>
            </tr>
            <tr>
              <td className="three album-pic">
                <img
                  src={pictures[2] ? pictures[2] : noPic}
                  alt={alts[0] ? alts[0] : ''}
                />
              </td>
              <td className="four album-pic">
                <img
                  src={pictures[3] ? pictures[3] : noPic}
                  alt={alts[0] ? alts[0] : ''}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoAlbum;
