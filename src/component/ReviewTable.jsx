import React from "react";
import "../style/reset.css";
import "../style/table.css";
import TableItem from "./TableItem";

function ReviewTable(props) {
  return (
    <div className="accordion-body">
      <h1>리뷰</h1>
      <div className="accordion">
        <hr />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
      </div>
      <button
        id="myBtn"
        onClick={() => {
          const modal = document.querySelector('#myModal');
          modal.classList.remove('hide');
        }}
      >
        글쓰기
      </button>

      <div id="myModal" class="modal hide">
        <div class="modal-content">
          <span
            class="close"
            onClick={() => {
              const modal = document.querySelector('#myModal');
              modal.classList.add('hide');
              console.log('clicked');
            }}
          >
            &times;
          </span>
          <div className="form-data">
            <h2>리뷰 작성</h2>
            <form
              action="/board/save"
              method="post"
              enctype="multipart/form-data"
              className="reviewForm"
            >
              <div className="review-row">
                <input
                  type="text"
                  name="boardWriter"
                  placeholder="작성자"
                  className="author"
                />{' '}
                <br />
                <input
                  type="text"
                  name="boardPass"
                  placeholder="비밀번호"
                  className="password"
                />{' '}
                <br />
              </div>
              <input
                type="text"
                name="boardTitle"
                placeholder="제목"
                className="title"
              />{' '}
              <br />
              <textarea
                name="boardContents"
                cols="30"
                rows="5"
                placeholder="내용 입력"
                className="content"
              ></textarea>
              <br />
              <input
                type="submit"
                value="글작성"
                className="submitBtn"
                onClick={(event) => {
                  event.preventDefault();
                  const modal = document.querySelector('#myModal');
                  modal.classList.add('hide');
                }}
              />
            </form>
          </div>
        </div>
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
