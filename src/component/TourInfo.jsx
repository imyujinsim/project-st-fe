import React from 'react';
import '../style/info.css';

function TourInfo(props) {
  return (
    <table class="user-info">
      <tbody>
        <tr>
          <th>전화번호</th>
          <td>01027863812</td>
        </tr>
        <tr>
          <th>주소</th>
          <td>부산~</td>
        </tr>
        <tr>
          <th>개장시간</th>
          <td>09시</td>
        </tr>
        <tr>
          <th>입장료</th>
          <td>1억</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TourInfo;
