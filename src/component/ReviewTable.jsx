import React from 'react';
import '../style/reset.css';
import '../style/table.css';
import TableItem from './TableItem';

function ReviewTable(props) {
  return (
    <div className="review-container">
      <h1>리뷰</h1>
      <div className="review">
        <table className="table">
          <thead>
            <tr className="th">
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ReviewTable;
