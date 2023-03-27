import React from 'react';
import '../style/info.css';

function TourInfo(props) {
  const intro = props.intro[0] ? props.intro[0] : '정보 없음';
  const detail = props.detailData ? props.detailData : '정보 없음';
  console.log(detail);
  const noInfo = '정보 없음';
  return (
    <table class="tour-info">
      <tbody class="tour-info-table">
        <tr>
          <th>전화번호</th>
          <td>{intro.infocenter ? intro.infocenter : noInfo}</td>
        </tr>
        <tr>
          <th>주소</th>
          <td>{detail.addr1 ? detail.addr1 : noInfo}</td>
        </tr>
        <tr>
          <th>개장시간</th>
          <td>{intro.usetime ? intro.usetime : noInfo}</td>
        </tr>
        <tr>
          <th>주차 가능 여부</th>
          <td>{intro.parking ? intro.parking : noInfo}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TourInfo;
