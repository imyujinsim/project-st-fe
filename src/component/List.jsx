import React from 'react';
import '../style/reset.css';
import '../style/main.css';
import ListItem from './ListItem';

function List(props) {
  return (
    <article className="wrapper list list-main">
      <div className="title">
        <h1>{props.title}</h1>
      </div>
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
