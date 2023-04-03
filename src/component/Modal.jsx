import React from 'react';

function Modal(props) {
  return (
    <div id="myModal" className="modal hide">
      <div className="modal-content">
        <span
          className="close"
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
            action="."
            method="post"
            className="reviewForm"
            onSubmit={(event) => {
              event.preventDefault();
              console.log('submitted');
              props.handleSubmit();
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
            <input className="submitBtn" type="submit" value="작성" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
