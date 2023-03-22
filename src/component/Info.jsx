import React from "react";
import logo from "../resources/logo.png";
import "../style/reset.css";
import "../style/info.css";

function Info(props) {
  return (
    <div class="info">
      <table class="user-info">
        <h1>해운대</h1>
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
    </div>
  );
}
export default Info;
