import React from 'react';
import axios from 'axios';
import Modal from './Modal';

function TableItem(props) {
  // const accordion = document.getElementsByClassName('container');

  // for (let i = 0; i < accordion.length; i++) {
  //   accordion[i].addEventListener('click', function () {
  //     this.classList.toggle('active');
  //   });
  // }

  const edit = document.querySelector('.edit');
  const remove = document.querySelector('.remove');

  const token = localStorage.getItem('token');

  return (
    <>
      <div
        class="container"
        onClick={(event) => {
          const accordion = event.currentTarget;
          accordion.classList.toggle('active');
        }}
      >
        <div class="label">
          <p>{props.id}</p>
          <p>{props.title}</p>
          <p>{props.author}</p>
        </div>
        <div class="content">
          {props.content}
          <br />
          <div className="icons">
            <p
              className="edit"
              onClick={() => {
                const modal = document.querySelector('#myModal');
                modal.classList.remove('hide');
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
              onClick={() => {
                if (
                  window.prompt('삭제하시겠습니까? 비밀번호를 입력하세요') ===
                  props.data.boardPass
                ) {
                  // 삭제하는 코드
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
        </div>
        <Modal />
      </div>
      <hr />
    </>
  );
}

export default TableItem;
