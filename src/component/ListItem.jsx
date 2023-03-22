import React, { useEffect } from 'react';
import '../style/reset.css';
import '../style/card.css';

// const icon = document.getElementById('one');

// function checkBookmark() {
// icon.classList.toggle('checked');
// if (icon.classList.contains('checked')) {
//   // checked라는 클래스가 있으면 할 일
//   icon.classList.toggle('checked');
//   // 데이터베이스에서 북마크 저장한거 삭제
// } else {
//   // checked라는 클래스가 없으면 할 일
//   icon.classList.add('checked');
//   // 데이터베이스에 북마크 저장했다고 넣기
// }
// }

// icon.addEventListener('click', checkBookmark);

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
    <li className="card" data-target="card">
      <a href="">
        <img src={props.picture} alt={props.name} />
        <h3>{props.name}</h3>
      </a>
      <button className="bookmark" id={index} onClick={click}></button>
    </li>
  );
}

export default ListItem;
