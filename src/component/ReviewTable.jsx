import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/reset.css';
import '../style/table.css';
import TableItem from './TableItem';

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

  const review = Array.from(reviewData).map((item) => {
    <TableItem data={item} />;
  });

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
    </div>
  );
}

export default ReviewTable;
