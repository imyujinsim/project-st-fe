import React from 'react';
import '../style/info-album.css';

function InfoAlbum(props) {
  const data = props.data;
  console.log(data);
  const noPic =
    'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg';

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
