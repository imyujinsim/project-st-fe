import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/reset.css';
import '../style/table.css';
import TableItem from './TableItem';

function ReviewTable(props) {
  const token = localStorage.getItem('token');
  const contentId = localStorage.getItem('contentId');

  const [count, setCount] = useState(0);

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

  useEffect(() => {
    getReviewData();
  }, [count]);

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
                const target = event.target;
                console.log(target);
                console.log('submitted');
                handleSubmit();
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
