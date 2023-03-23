import React from 'react';
import '../style/reset.css';
import '../style/card.css';

function ListItem(props) {
  const index = props.index;

  function click(e) {
    if (e.target.classList.contains('checked')) {
      e.target.classList.remove('checked');
      // 데이터베이스에서 삭제
    } else {
      e.target.classList.add('checked');
      // 데이터베이스에 추가
      console.log(e.target.id);
    }
  }

  return (
    <li className="list-item" data-target="card">
      <a href="">
        <img src={props.picture} alt={props.name} />
        <h3>{props.name}</h3>
      </a>
      <button className="bookmark" id={index} onClick={click}></button>
    </li>
  );
}

export default ListItem;
