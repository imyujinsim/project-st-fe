import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/reset.css';
import '../style/card.css';
import axios from 'axios';

function ListItem(props) {
  useEffect(() => {
    const data = props.contentid;

    const useOnHandleClickLike = (e) => {
      e.preventDefault();

      const wishlist = [];
      if (
        wishlist.filter(
          (InwishlistItem) => InwishlistItem.id === e.target.id
        )[0]
      ) {
        e.target.classList.add('checked');
      }

      if (
        !wishlist.filter(
          (InwishlistItem) => InwishlistItem.id === e.target.id
        )[0]
      ) {
        console.log('like clicked');
        e.target.classList.add('checked');
        // 디비에 넣는 코드
      } else {
        console.log('like canceled');
        e.target.classList.remove('checked');
        // 디비에서 빼는 코드
      }
      return;
    };
  }, []);

  // function click(e) {
  //   e.preventDefault();
  //   if (e.target.classList.contains('checked')) {
  //     e.target.classList.remove('checked');
  //     // 데이터베이스에서 삭제
  //   } else {
  //     e.target.classList.add('checked');
  //     // 데이터베이스에 추가

  //     console.log(e.target.id);
  //     console.log(props.picture);
  //     console.log(props.name);
  //   }
  // }

  return (
    <Link
      to={`/detail/${data}`}
      onClick={() => {
        window.localStorage.setItem('detail', props.name);
        window.localStorage.setItem('contentId', data);
      }}
    >
      <li className="list-item" data-target="card" id={data}>
        <a href="">
          <img src={props.picture} alt={props.name} />
          <h3>{props.name}</h3>
        </a>

        <button
          className="bookmark"
          id={data}
          onClick={(e) => {
            useOnHandleClickLike(e);
          }}
        ></button>
      </li>
    </Link>
  );
}

export default ListItem;
