import React, { useEffect, useState } from 'react';
import '../style/reset.css';
import '../style/main.css';
import List from '../component/List';
import axios from 'axios';
import Area from '../component/Area';

function MainList(props) {
  const key = decodeURIComponent(process.env.REACT_APP_TOUR);
  const [locationData, setLocationData] = useState('');
  useEffect(() => {
    const getLocationData = async () => {
      await axios
        .get('/KorService1/locationBasedList1', {
          baseURL: 'https://apis.data.go.kr/B551011',
          params: {
            numOfRows: 5,
            pageNo: 1,
            MobileOS: 'ETC',
            MobileApp: 'STTour',
            _type: 'json',
            listYN: 'Y',
            arrange: 'A',
            mapX: 126.981611,
            mapY: 37.568477,
            radius: 10000,
            contentTypeId: 12,
            serviceKey: key,
          },
        })
        .then((result) => {
          setLocationData(result.data.response.body.items.item);
        });
    };
    void getLocationData();
  }, []);

  return (
    <section>
      <List title="내 지역 관광지" locationData={locationData} />
      <Area title="지역별 관광지" />
      <List title="찜한 관광지" />
    </section>
  );
}

export default MainList;
