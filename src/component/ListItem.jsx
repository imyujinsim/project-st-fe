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
      <input type="checkbox" id="check-{props.index}" />
      <label htmlFor="check"></label>
    </li>
  );
}

export default ListItem;
