import React, { useState } from 'react';
import '../style/reset.css';
import '../style/main.css';
import ListItem from './ListItem';
import noPic from '../resources/icons/no_image.gif';
import axios from 'axios';

function List(props) {
  const locationData = props.locationData ? props.locationData : '데이터 없음';
  const token = localStorage.getItem('token');
  const [bookmarkItems, setBookmarkItems] = useState();

  const callBookmark = async () => {
    await axios({
      url: 'https://api.bodam.site:8080/bookmark/list',
      method: 'post',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        const data = response.data;
        setBookmarkItems(
          Array.from(data).map((item) => {
            return (
              <ListItem
                key={item.context_id}
                picture={item.url !== '' ? item.url : noPic}
                name={item.name}
                contentid={item.context_id}
              />
            );
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  callBookmark();

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
      <ul className="list-wrapper">
        {props.title === '찜한 관광지' ? bookmarkItems : listItems}
      </ul>
    </article>
  );
}

export default List;
