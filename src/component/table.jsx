import React from "react";
import logo from "../resources/logo.png";
import "../style/reset.css";
import bootstrap from "bootstrap";

function Table(props) {
  return (
    <table class="table table-sm review-table">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>게시글1</td>
          <td>artistJay</td>
          <td>2022-03-19</td>
        </tr>
        <tr>
          <td>2</td>
          <td>게시글2</td>
          <td>artistJay</td>
          <td>2022-03-19</td>
        </tr>
        <tr>
          <td>3</td>
          <td>게시글2</td>
          <td>artistJay</td>
          <td>2022-03-19</td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table;
