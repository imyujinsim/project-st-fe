import React from 'react';
import '../style/reset.css';
import '../style/main-list.css';
import List from '../component/List';

function MainList(props) {
  return (
    <section>
      <List
        title="내 지역 관광지"
        picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
        name="해운대"
      />
      <List
        title="내 지역 관광지"
        picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
        name="해운대"
      />
      <List
        title="내 지역 관광지"
        picture="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
        name="해운대"
      />
    </section>
  );
}

export default MainList;
