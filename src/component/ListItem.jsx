import React from 'react';
import '../style/reset.css';
import '../style/card.css';

function ListItem(props) {
  return (
    <li className="card" data-target="card">
      <a href="">
        <img src={props.picture} alt={props.name} />
        <h3>{props.name}</h3>
      </a>
    </li>
  );
}

export default ListItem;
