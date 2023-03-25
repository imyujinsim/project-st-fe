import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Search from '../component/Search';
import MainList from '../main/MainList';
import axios from 'axios';
import { handleMainSubmit } from './handleEvent';

function Main(props) {
  const key = decodeURIComponent(process.env.REACT_APP_TOUR);
  const [data, setData] = useState('');
  // const [value, setValue] = useState('');
  // console.log(value);
  const [value, setValue] = useState('');
  console.log(value);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('/searchKeyword1', {
          baseURL: 'https://apis.data.go.kr/B551011/KorService1',
          params: {
            numOfRows: 20,
            pageNo: 1,
            MobileOS: 'ETC',
            MobileApp: 'STTour',
            _type: 'json',
            listYN: 'Y',
            arrange: 'A',
            keyword: value,
            contentTypeId: 12,
            serviceKey: key,
          },
        })
        .then((result) => {
          setData(result.data.response.body.items.item);
          console.log(result);
        });
    };
    void getData();
  }, [value]);

  const handleMainSubmit = (event) => {
    const query = event.target[0].value;
    setValue(query);

    window.localStorage.setItem('query', query);
  };

  return (
    <>
      <Header />
      <hr />
      <Search setValue={setValue} onsubmit={handleMainSubmit} />
      <MainList data={data} />
      <Footer />
    </>
  );
}

export default Main;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
