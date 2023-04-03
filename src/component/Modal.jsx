import React from 'react';
import axios from 'axios';

function Modal(props) {
  const token = localStorage.getItem('token');

  const handleSubmit = async () => {
    await axios({
      url: 'https://api.bodam.site:8080/board/update',
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
    <div id="myModal" className="modal hide">
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
              handleSubmit();
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
              className="content"
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
