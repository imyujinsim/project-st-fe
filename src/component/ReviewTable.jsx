import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/reset.css';
import '../style/table.css';
import TableItem from './TableItem';
import Modal from './Modal';

function ReviewTable(props) {
  const [count, setCount] = useState(0);
  const [reviewData, setReviewData] = useState();

  const token = localStorage.getItem('token');

  const getReview = async () => {
    await axios({
      url: 'https://api.bodam.site:8080/board/',
      method: 'get',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setReviewData(response.data);
        // 응답 수 만큼 카운트 늘리기
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getReview();
  }, []);

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
        // 카운트 하나 늘려주기
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const review = Array.isArray(reviewData)
    ? reviewData
        .filter((item) => item !== undefined && item !== null)
        .map((item) => {
          return (
            <TableItem
              id={item.id}
              title={item.boardTitle}
              author={item.boardWriter}
              content={item.boardContents}
            />
          );
        })
    : null;

  return (
    <div className="accordion-body">
      <h1>리뷰</h1>
      <div className="accordion">
        <hr />
        {review}
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
      <Modal action={write} />
    </div>
  );
}

export default ReviewTable;
