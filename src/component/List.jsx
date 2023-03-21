import React from 'react';
import '../style/reset.css';
import '../style/list.css';

function List(props) {
  return (
    <article class="wrapper list">
      <h1>{props.title}</h1>
      <ul class="carousel" data-target="carousel">
        <li class="card" data-target="card">
          <a href="">
            <img src={props.picture} alt={props.name} />
            <h3>{props.name}</h3>
          </a>
        </li>
        <li class="card" data-target="card">
          <a href="">
            <img src={props.picture} alt={props.name} />
            <h3>{props.name}</h3>
          </a>
        </li>
        <li class="card" data-target="card">
          <a href="">
            <img src={props.picture} alt={props.name} />
            <h3>{props.name}</h3>
          </a>
        </li>
        <li class="card" data-target="card">
          <a href="">
            <img src={props.picture} alt={props.name} />
            <h3>{props.name}</h3>
          </a>
        </li>
        <li class="card" data-target="card">
          <a href="">
            <img src={props.picture} alt={props.name} />
            <h3>{props.name}</h3>
          </a>
        </li>
      </ul>
    </article>
  );
}

export default List;
