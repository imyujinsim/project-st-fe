import React from "react";
import "../style/reset.css";
import "../style/table.css";
import TableItem from "./TableItem";

function ReviewTable(props) {
  const [showModal, setShowModal] = React.useState(false);
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
      <div>
        <input
          type="button"
          className="review-write"
          defaultValue="글쓰기"
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-header">리뷰를 작성하세요.</div>
          <div className="modal-body">
            <form>
              <input type="text" placeholder="제목을 입력하세요"></input>
              <input type="text" placeholder="내용을 입력하세요"></input>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              취소
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => alert("리뷰가 저장되었습니다.")}
            >
              저장
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ReviewTable;
