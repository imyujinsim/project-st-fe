import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/reset.css';
import '../style/table.css';
import TableItem from './TableItem';

function ReviewTable(props) {
  const token = localStorage.getItem('token');
  const contentId = localStorage.getItem('contentId');

  const [count, setCount] = useState(0);
  const [reviewData, setReviewData] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  const handleSubmit = async (author, passwd, title, review) => {
    try {
      const response = await axios.post(
        'https://api.bodam.site:8080/board/save',
        {
          boardWriter: author,
          boardPass: passwd,
          boardTitle: title,
          boardContents: review,
          boardHits: 0,
          boardCreatedTime: ' ',
          boardUpdatedTime: ' ',
          context_id: contentId,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      console.log(response);
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getReviewData = async () => {
      try {
        const response = await axios.get(
          `https://api.bodam.site:8080/board/context/${contentId}`,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          }
        );
        console.log(response);
        setReviewData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getReviewData();
  }, [count]);

  useEffect(() => {
    const reviews = reviewData
      .filter((item) => item !== undefined && item !== null)
      .map((item) => {
        return (
          <TableItem
            key={item.id}
            id={item.id}
            title={item.boardTitle}
            author={item.boardWriter}
            content={item.boardContents}
          />
        );
      });
    setReviewList(reviews);
  }, [reviewData]);

  return (
    <div className="accordion-body">
      <h1>리뷰</h1>
      <div className="accordion">
        <hr />
        {reviewList}
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
                const author = document.querySelector('.authorw').value;
                const passwd = document.querySelector('.passwordw').value;
                const title = document.querySelector('.titlew').value;
                const review = document.querySelector('.review-inputw').value;
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
