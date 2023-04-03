import React from 'react';
import '../style/reset.css';
import '../style/table.css';
import TableItem from '../component/TableItem';
import Modal from '../component/Modal';

function Myreview(props) {
  return (
    <div className="accordion-body">
      <h1>나의 리뷰</h1>
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

      <Modal action={'edit'} />
    </div>
  );
}
export default Myreview;
