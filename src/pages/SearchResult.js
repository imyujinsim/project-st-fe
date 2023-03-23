import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Search from '../component/Search';
import Result from '../searchResult/Result';
import axios from 'axios';
// import { createProxyMiddleware } from 'http-proxy-middleware';

export default function SearchResult() {
  const key = encodeURIComponent(process.env.REACT_APP_TOUR);
  const [data, setData] = useState('');

  useEffect(() => {
    // axios 안돼요ㅠㅠㅠㅠㅠ
    const getData = async () => {
      await axios
        .get('/api', {
          baseURL: '/searchKeyword1',
          params: {
            numOfRows: 10,
            pageNo: 1,
            MobileOS: 'ETC',
            MobileApp: 'STTour',
            _type: 'json',
            listYN: 'Y',
            arrange: 'A',
            keyword: 'busan',
            contentTypeId: 12,
            serviceKey: key,
          },
        })
        .then((res) => setData(res));
    };
    void getData();
  }, []);

  return (
    <>
      <Header />
      <hr />
      <Search />
      <Result data={data} />
      <Footer />
    </>
  );
}

// async function getData() {
//   try {
//     await axios
//       .get('/searchKeyword1', {
//         baseURL: 'https://apis.data.go.kr/B551011/KorService1',
//         params: {
//           numOfRows: '10',
//           pageNo: '1',
//           MobileOS: 'ETC',
//           MobileApp: 'STTour',
//           _type: 'json',
//           listYN: 'Y',
//           arrange: 'A',
//           keyword: 'busan',
//           contentTypeId: '12',
//           serviceKey: key,
//         },
//       })
//       .then((result) => console.log(result.data))
//       .catch(console.log);
//   } catch (error) {
//     console.error(error);
//   }
// }
