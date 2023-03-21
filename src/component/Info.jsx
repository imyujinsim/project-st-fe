import React from "react";
import logo from "../resources/logo.png";
import "../style/reset.css";
import "../style/info.css";
import ListItem from "./ListItem";
import List from "./List";
function Info(props) {
  return (
    <div class="info">
      <h1>상세정보</h1>
      <table>
        <th class="letf">
          {/* <h1>상세정보</h1> */}
          <section>
            <img
              src="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
              alt="해운대"
            />
          </section>
        </th>
        <th class="right">
          <h1>해운대</h1>
          <h2>전화번호</h2>
          <h2>주소</h2>
          <h2>개장시간</h2>
          <h2>입장료</h2>
        </th>
      </table>
    </div>
  );
}
export default Info;
