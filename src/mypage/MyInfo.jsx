import React from 'react';
import '../style/myinfo.css';

function MyInfo(props) {
  return (
    <section className="user-information">
      <h1>내 정보</h1>
      <table className="user-info">
        <tbody>
          <tr>
            <th>
              <b>이름</b>
            </th>
            <td>심유진</td>
          </tr>
          <tr>
            <th>
              <b>아이디</b>
            </th>
            <td>yujin2345</td>
          </tr>
          <tr>
            <th>
              <b>전화번호</b>
            </th>
            <td>010-2034-3882</td>
          </tr>
          <tr>
            <th>
              <b>생년월일</b>
            </th>
            <td>1996.10.02</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default MyInfo;
