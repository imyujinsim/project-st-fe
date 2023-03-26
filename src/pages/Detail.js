import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Info from '../component/Info';
import ReviewTable from '../component/ReviewTable';
import InfoAlbum from '../component/InfoAlbum';
import KakaoMap from '../component/KakaoMap';

function Detail(props) {
  const key = decodeURIComponent(process.env.REACT_APP_TOUR);
  const [data, setData] = useState('');
  const [intro, setIntro] = useState('');
  const [detail, setDetail] = useState('');

  useEffect(() => {
    const contentId = window.localStorage.getItem('contentId');

    const getData = async () => {
      await axios
        .get('/KorService1/detailImage1', {
          baseURL: 'https://apis.data.go.kr/B551011',
          params: {
            MobileOS: 'ETC',
            MobileApp: 'STTour',
            _type: 'json',
            imageYN: 'Y',
            subImageYN: 'Y',
            numOfRows: 4,
            pageNo: 1,
            contentId: contentId,
            serviceKey: key,
          },
        })
        .then((result) => {
          // console.log(result);
          setData(result.data.response.body.items.item);
          // console.log(data);
        });
    };
    void getData();

    const getIntro = async () => {
      await axios
        .get('/KorService1/detailIntro1', {
          baseURL: 'https://apis.data.go.kr/B551011',
          params: {
            MobileOS: 'ETC',
            MobileApp: 'STTour',
            _type: 'json',
            numOfRows: 1,
            pageNo: 1,
            contentId: contentId,
            contentTypeId: 12,
            serviceKey: key,
          },
        })
        .then((result) => {
          // console.log(result);
          setIntro(result.data.response.body.items.item);
          // console.log(data);
        });
    };
    void getIntro();

    const getDetail = async () => {
      await axios
        .get('/KorService1/detailCommon1', {
          baseURL: 'https://apis.data.go.kr/B551011',
          params: {
            MobileOS: 'ETC',
            MobileApp: 'STTour',
            _type: 'json',
            numOfRows: 1,
            pageNo: 1,
            contentId: contentId,
            contentTypeId: 12,
            serviceKey: key,
            defaultYN: 'Y',
            firstImageYN: 'N',
            areacodeYN: 'N',
            catcodeYN: 'N',
            addrinfoYN: 'Y',
            mapinfoYN: 'Y',
            overviewYN: 'N',
          },
        })
        .then((result) => {
          // console.log(result);
          setDetail(result.data.response.body.items.item[0]);
          // console.log(data);
        });
    };
    void getDetail();
  }, []);

  return (
    <>
      <Header />
      <hr />
      <InfoAlbum data={data} />
      <Info intro={intro} detail={detail} />
      <ReviewTable />
      <KakaoMap detail={detail} />
      <Footer />
    </>
  );
}

export default Detail;

// function Detail(props) {
//   const key = decodeURIComponent(process.env.REACT_APP_TOUR);
//   const [imgData, setImgData] = useState('');

//   useEffect(() => {
//     const getImgData = async () => {
//       await axios
//         .get('PhotoGalleryService1/gallerySearchList1', {
//           baseURL: 'https://apis.data.go.kr/B551011',
//           params: {
//             numOfRows: 20,
//             pageNo: 1,
//             MobileOS: 'ETC',
//             MobileApp: 'STTour',
//             _type: 'json',
//             title: encodeURIComponent(window.localStorage.getItem('detail')),
//             serviceKey: key,
//           },
//         })
//         .then((result) => {
//           setImgData(result.data.response.body.items.item);
//           console.log(imgData);
//         });
//     };
//     void getImgData();
//   }, []);

//   return (
//     <>
//       <Header />
//       <hr />
//       <InfoAlbum imgData={imgData} />
//       <Info />
//       <ReviewTable />
//       <KakaoMap />
//       <Footer />
//     </>
//   );
// }
