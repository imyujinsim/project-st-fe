import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/reset.css';
import '../style/card.css';
import axios from 'axios';

function ListItem(props) {
  const data = props.contentid;
  const [like, setLike] = useState(false);

  useEffect(async () => {
    const fetchData = async () => {
      const res = await axios.get();
      if (res.data.type === 'liked') setLike(true);
    };
    fetchData();
  }, []);

  function click(e) {
    e.preventDefault();
    if (e.target.classList.contains('checked')) {
      e.target.classList.remove('checked');
      // 데이터베이스에서 삭제
    } else {
      e.target.classList.add('checked');
      // 데이터베이스에 추가
      // const postData = async () => {
      //   const res = await axios.get();
      //   if (res.data.type === 'liked') setLike(true);
      // };
      console.log(e.target.id);
      console.log(props.picture);
      console.log(props.name);
    }
  }

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

        <button className="bookmark" id={data} onClick={click}></button>
      </li>
    </Link>
  );
}

export default ListItem;
