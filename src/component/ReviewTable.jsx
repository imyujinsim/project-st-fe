import React from 'react';
import axios from 'axios';
import '../style/reset.css';
import '../style/table.css';
import TableItem from './TableItem';

function ReviewTable(props) {
  const token = localStorage.getItem('token');

  const handleSubmit = async () => {
    await axios({
      url: 'https://api.bodam.site:8080/board/save',
      method: 'post',
      data: {
        boardWriter: '유진',
        boardPass: '1234',
        boardTitle: '너무 좋아요',
        boardContents: '잘 다녀왔어요 여행 좋아요!',
        boardHits: 0,
        boardCreatedTime: ' ',
        boardUpdatedTime: ' ',
      },
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
                onSubmit={() => {
                  console.log(submitted);
                  handleSubmit();
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewTable;
