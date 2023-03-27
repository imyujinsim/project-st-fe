import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/reset.css';
import '../style/card.css';
import '../style/main.css';
import seoul from '../resources/seoul.jpg';
import busan from '../resources/busan.jpg';
import jeju from '../resources/jeju.png';
import jeonju from '../resources/jeonju.png';
import gyeongju from '../resources/gyeongju.png';

function Area(props) {
  const areaList = [
    {
      name: '서울',
      image: seoul,
      code: 'seoul',
    },
    {
      name: '부산',
      image: busan,
      code: 'busan',
    },
    {
      name: '제주도',
      image: jeju,
      code: 'jeju',
    },
    {
      name: '전주',
      image: jeonju,
      code: 'jeonju',
    },
    {
      name: '경주',
      image: gyeongju,
      code: 'gyeongju',
    },
  ];

  const listItems = Array.from(areaList).map((item) => {
    return (
      <Link
        to={`/result`}
        onClick={() => {
          window.localStorage.setItem('query', item.name);
        }}
      >
        <li className="list-item" data-target="card" id={item.code}>
          <a href="">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </a>
        </li>
        <div className="empty"></div>
      </Link>
    );
  });

  return (
    <article className="wrapper list list-main">
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <ul className="list-wrapper">{listItems}</ul>
    </article>
  );
}

export default Area;
