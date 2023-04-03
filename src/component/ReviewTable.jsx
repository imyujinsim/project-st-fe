import React from 'react';
import axios from 'axios';
import '../style/reset.css';
import '../style/table.css';
import TableItem from './TableItem';
import Modal from './Modal';

function ReviewTable(props) {
  const handleSubmit = async () => {
    await axios({
      url: 'https://api.bodam.site/board/',
      method: 'get',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
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

      <Modal action={'write'} />
    </div>
  );
}

export default ReviewTable;
