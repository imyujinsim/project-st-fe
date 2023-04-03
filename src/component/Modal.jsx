import React from 'react';
import axios from 'axios';

function Modal(props) {
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

  const handleEdit = async () => {
    await axios({
      url: 'https://api.bodam.site:8080/board/update',
      method: 'put',
      data: {
        boardWriter: '유진 수정',
        boardPass: '1234',
        boardTitle: '너무 좋아요 수정했어요',
        boardContents: '잘 다녀왔어요 여행 좋아요! 수정했어요',
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
    <div id="myModal" className={`modal hide ${props.action}`}>
      <div className="modal-content">
        <span
          className="close"
          onClick={(e) => {
            const modal = document.querySelector('#myModal');
            console.log(e.target);
            modal.classList.add('hide');
            console.log('clicked');
          }}
        >
          &times;
        </span>
        <div className="form-data">
          <h2>리뷰 작성</h2>
          <form
            action="."
            method="post"
            className="reviewForm"
            onSubmit={(event) => {
              event.preventDefault();
              console.log('submitted');
              if (event.target.classList.contains('edit')) {
                handleEdit();
              } else if (event.target.classList.contains('write')) {
                handleSubmit();
              }
              const modal = document.querySelector('#myModal');
              modal.classList.add('hide');
            }}
            enctype="multipart/form-data"
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
              className="review-input"
            ></textarea>
            <br />
            <input
              className="submitBtn"
              type="submit"
              value="작성"
              onClick={console.log('submitted')}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
