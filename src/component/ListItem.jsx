import React from 'react';

function ListItem(props) {
  return (
    <li class="card" data-target="card">
      <a href="">
        <img src={props.picture} alt={props.name} />
        <h3>{props.name}</h3>
      </a>
    </li>
  );
}

export default ListItem;
