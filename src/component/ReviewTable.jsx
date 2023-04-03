import React from 'react';
import axios from 'axios';
import '../style/reset.css';
import '../style/table.css';
import TableItem from './TableItem';
import Modal from './Modal';

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

      <Modal submit={handleSubmit} />
    </div>
  );
}

export default ReviewTable;
