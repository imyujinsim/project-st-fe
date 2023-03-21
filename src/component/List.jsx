import React from 'react';
import '../style/reset.css';
import '../style/list.css';
import ListItem from './ListItem';

function List(props) {
  return (
    <article class="wrapper list">
      <h1>{props.title}</h1>
      <ul>
        <ListItem
          picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
          name="해운대"
        />
        <ListItem
          picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
          name="해운대"
        />
        <ListItem
          picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
          name="해운대"
        />
        <ListItem
          picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
          name="해운대"
        />
        <ListItem
          picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
          name="해운대"
        />
      </ul>
    </article>
  );
}

export default List;
