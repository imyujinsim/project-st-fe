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
      <ul className="list-wrapper">
        <ListItem
          picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
          name="해운대"
          index="1"
        />
        <ListItem
          picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
          name="해운대"
          index="2"
        />
        <ListItem
          picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
          name="해운대"
          index="3"
        />
        <ListItem
          picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
          name="해운대"
          index="4"
        />
        <ListItem
          picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
          name="해운대"
          index="5"
        />
      </ul>
    </article>
  );
}

export default List;
