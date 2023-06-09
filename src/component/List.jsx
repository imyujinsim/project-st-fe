import React, { useEffect, useState } from 'react';
import '../style/reset.css';
import '../style/main.css';
import ListItem from './ListItem';

function List(props) {
  const locationData = props.locationData ? props.locationData : '데이터 없음';
  const token = localStorage.getItem('token');
  const noPic =
    'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg';
  const [bookmarkItems, setBookmarkItems] = useState([]);

  const localBookmark = JSON.parse(localStorage.getItem('bookmark') || '[]');

  useEffect(() => {
    const bookmark = Array.from(localBookmark).map((item) => {
      return (
        <ListItem
          key={item.context_id}
          picture={item.url !== '' ? item.url : noPic}
          name={item.name}
          contentid={item.context_id}
        />
      );
    });
    setBookmarkItems(bookmark);
  }, [localBookmark, bookmarkItems]);

  const listItems = Array.from(locationData).map((item) => {
    return (
      <ListItem
        key={item.contentid}
        picture={item.firstimage !== '' ? item.firstimage : noPic}
        name={item.title}
        contentid={item.contentid}
        isExists={props.setIsExists}
      />
    );
  });

  return (
    <article className="wrapper list list-main">
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <ul className="list-wrapper">
        {props.title === '찜한 관광지' ? bookmarkItems : listItems}
      </ul>
    </article>
  );
}

export default List;
