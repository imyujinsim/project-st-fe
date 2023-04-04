import React, { useRef } from 'react';
import axios from 'axios';

function TableItem(props) {
  // const accordion = document.getElementsByClassName('container');

  // for (let i = 0; i < accordion.length; i++) {
  //   accordion[i].addEventListener('click', function () {
  //     this.classList.toggle('active');
  //   });
  // }

  const token = localStorage.getItem('token');

  const edit = document.querySelector('.edit');
  const remove = document.querySelector('.remove');

  const handleEdit = async (author, passwd, title, review, id) => {
    const contextId = localStorage.getItem('contentId');
    const token = localStorage.getItem('token');
    await axios({
      url: `https://api.bodam.site:8080/board/update/${id}`,
      method: 'put',
      data: {
        boardWriter: author,
        boardPass: passwd,
        boardTitle: title,
        boardContents: review,
        context_id: contextId,
        id: id,
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

  const deleteData = async (id) => {
    const id = id;
    await axios({
      url: `https://api.bodam.site:8080/board/delete/${id}`,
      method: 'delete',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        id: id,
      },
    })
      .then(console.log)
      .catch(console.log);
  };

  // const { [`${props.id}modal`]: modalRef } = useRef(null);

  return (
    <>
      <div
        class="container"
        id={props.id}
        onClick={(event) => {
          const accordion = event.target.parentNode.parentNode;
          if (accordion.classList.contains('container')) {
            accordion.classList.toggle('active');
          }
        }}
      >
        <div class="label">
          <p>{props.id}</p>
          <p>{props.title}</p>
          <p>{props.author}</p>
        </div>
        <div class="content active">
          {props.content}
          <br />
          <div className="icons">
            <p
              className="edit"
              onClick={(event) => {
                // const modal = document.getElementById(props.id + 'modal');
                // modal.classList.remove('hide');
                // const modal = modalRef.current.parentNode.parentNode;
                // modal.classList.remove('hide');
                // const modalName = props.id + 'modal';
                const modal = event.target.parentNode.parentNode.nextSibling;
                if (modal.classList.contains('modal')) {
                  console.log(modal);
                  modal.classList.toggle('hide');
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M18.4,4.4l1.2,1.2L6.2,19H5v-1.2L18.4,4.4 M18.4,2c-0.3,0-0.5,0.1-0.7,0.3L3,17v4h4L21.7,6.3c0.4-0.4,0.4-1,0-1.4l-2.6-2.6 C18.9,2.1,18.7,2,18.4,2L18.4,2z"></path>
                <path
                  d="M15.8 4.3H17.8V9.2H15.8z"
                  transform="rotate(-45.001 16.75 6.75)"
                ></path>
              </svg>
            </p>
            <p
              className="remove"
              onClick={(e) => {
                const id = Number(e.target.parentNode.parentNode.parentNode.id);
                console.log(id);
                if (window.confirm('삭제하시겠습니까?')) {
                  // 삭제하는 코드
                  deleteData(id);
                  console.log('삭제');
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
              </svg>
            </p>
          </div>

          <div id={`${props.id + 'modal'} myModal`} className="modal hide edit">
            <div className="modal-content">
              <span
                className="close"
                onClick={(e) => {
                  // const modal = modalRef.current.parentNode.parentNode;
                  // console.log(modal);
                  // const modalName = props.id + 'modal';
                  // const modal = e.target.parentNode.parentNode.parentNode;
                  const modal = document.getElementById(
                    `${props.id + 'modal'}`
                  );
                  console.log(modal);
                  // modal.classList.toggle('hide');
                  // console.log('clicked');
                }}
              >
                &times;
              </span>
              <div className="form-data">
                <h2>리뷰 작성</h2>
                <form
                  action="."
                  method="put"
                  className="reviewForm"
                  id={props.id}
                  onSubmit={(event) => {
                    event.preventDefault();
                    console.log(event.target);
                    const author = document.querySelector('.author').value;
                    const passwd = document.querySelector('.password').value;
                    const title = document.querySelector('.title').value;
                    const review =
                      document.querySelector('.review-input').value;
                    const id = Number(event.target.id);
                    console.log(id);
                    handleEdit(author, passwd, title, review, id);
                    // const modal = document.querySelector('#myModal');
                    // modal.classList.add('hide');
                    // const modal = modalRef;
                    // const modal = event.target.parentNode.parentNode.parentNode;
                    const modal = document.getElementById(
                      `${props.id + 'modal'}`
                    );
                    console.log(modal);
                    // modal.classList.toggle('hide');
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
        </div>
      </div>
      <hr />
    </>
  );
}

export default TableItem;
