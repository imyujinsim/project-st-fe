import React, { useEffect } from 'react';
import '../style/reset.css';
import '../style/main.css';
import ListItem from './ListItem';
import noPic from '../resources/icons/no_image.gif';

function List(props) {
  const locationData = props.locationData ? props.locationData : '데이터 없음';

  const listItems = Array.from(locationData).map((item) => {
    return (
      <ListItem
        key={item.contentid}
        picture={item.firstimage !== '' ? item.firstimage : noPic}
        name={item.title}
        contentid={item.contentid}
      />
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

export default List;
