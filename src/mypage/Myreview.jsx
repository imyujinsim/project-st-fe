import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/reset.css';
import '../style/table.css';
import TableItem from '../component/TableItem';
import Modal from '../component/Modal';

function Myreview(props) {
  const token = localStorage.getItem('token');

  const [count, setCount] = useState(0);
  const [reviewData, setReviewData] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    const getReviewData = async () => {
      try {
        const response = await axios.get(
          `https://api.bodam.site:8080/board/mylist/`,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
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
      <h1>나의 리뷰</h1>
      <div className="accordion">
        <hr />
        {reviewList}
      </div>

      <Modal action={'edit'} />
    </div>
  );
}
export default Myreview;
