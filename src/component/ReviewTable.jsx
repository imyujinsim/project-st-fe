import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/reset.css';
import '../style/table.css';
import TableItem from './TableItem';

function ReviewTable(props) {
  const token = localStorage.getItem('token');
  const contentId = localStorage.getItem('contentId');

  const [count, setCount] = useState(0);
  const [reviewData, setReviewData] = useState();

  const handleSubmit = async (author, passwd, title, review) => {
    await axios({
      url: 'https://api.bodam.site:8080/board/save',
      method: 'post',
      data: {
        boardWriter: author,
        boardPass: passwd,
        boardTitle: title,
        boardContents: review,
        boardHits: 0,
        boardCreatedTime: ' ',
        boardUpdatedTime: ' ',
        context_id: contentId,
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
        setCount((count += 1));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getReviewData = async () => {
    await axios({
      url: 'https://api.bodam.site:8080/board/',
      method: 'get',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response);
        setReviewData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getReviewData();
  }, []);

  useEffect(() => {
    //   getReviewData();
  }, [count]);

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
        id="myBtnw"
        onClick={() => {
          const modal = document.querySelector('#myModalw');
          modal.classList.remove('hide');
        }}
      >
        글쓰기
      </button>

      <div id="myModalw" className="modalw hide write">
        <div className="modal-contentw">
          <span
            className="closew"
            onClick={(e) => {
              const modal = document.querySelector('#myModalw');
              console.log(e.target);
              modal.classList.add('hide');
              console.log('clicked');
            }}
          >
            &times;
          </span>
          <div className="form-dataw">
            <h2>리뷰 작성</h2>
            <form
              action="."
              method="post"
              className="reviewFormw"
              onSubmit={(event) => {
                event.preventDefault();
                const author = document.querySelector('.authorw');
                const passwd = document.querySelector('.passwordw');
                const title = document.querySelector('.titlew');
                const review = document.querySelector('.review-inputw');
                console.log('submitted');
                handleSubmit(author, passwd, title, review);
                console.log('handle submit');
                const modal = document.querySelector('#myModalw');
                modal.classList.add('hide');
              }}
              enctype="multipart/form-data"
            >
              <div className="review-roww">
                <input
                  type="text"
                  name="boardWriter"
                  placeholder="작성자"
                  className="authorw"
                />{' '}
                <br />
                <input
                  type="text"
                  name="boardPass"
                  placeholder="비밀번호"
                  className="passwordw"
                />{' '}
                <br />
              </div>
              <input
                type="text"
                name="boardTitle"
                placeholder="제목"
                className="titlew"
              />{' '}
              <br />
              <textarea
                name="boardContents"
                cols="30"
                rows="5"
                placeholder="내용 입력"
                className="review-inputw"
              ></textarea>
              <br />
              <input
                className="submitBtnw"
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
