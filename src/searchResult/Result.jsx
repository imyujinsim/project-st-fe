import React from 'react';
import ListItem from '../component/ListItem';
import '../style/search-result.css';

function Result(props) {
  console.log(props.data);
  return (
    <div className="search-result-page">
      <ul className="result-list">
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
        <ListItem
          picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
          name="해운대"
        />
        <ListItem
          picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
          name="해운대"
        />
      </ul>
    </div>
  );
}

export default Result;
