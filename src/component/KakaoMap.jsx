import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/map.css";

const { kakao } = window;

const KakaoMap = ({ location }) => {
  const key = decodeURIComponent(process.env.REACT_APP_TOUR);
  const [data, setData] = useState([]);

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(
      location.latitude,
      location.longitude
    );
    const marker = new kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);

    const getData = async () => {
      await axios
        .get("/searchKeyword1", {
          baseURL: "https://apis.data.go.kr/B551011/KorService1",
          params: {
            numOfRows: 20,
            pageNo: 1,
            MobileOS: "ETC",
            MobileApp: "STTour",
            _type: "json",
            listYN: "Y",
            arrange: "A",
            keyword: location.contentid,
            contentTypeId: 12,
            serviceKey: key,
          },
        })
        .then((response) => {
          const data = response.data.searchKeyword;
          setData(data);

          for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const latLng = new kakao.maps.LatLng(item.latitude, item.longitude);
            const marker = new kakao.maps.Marker({ position: latLng });
            marker.setMap(map);
          }
        });
    };

    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    getData();
  }, [key, location.contentid, location.latitude, location.longitude]);

  return (
    <div className="myMap">
      <h1>지도</h1>
      <div className="map-container">
        <div
          className="map"
          id="myMap"
          style={{ width: "600px", height: "300px" }}
        ></div>
      </div>
      {data.map((item) => (
        <div key={item.contentid}>
          <h2>{item.title}</h2>
          <p>{item.addr1}</p>
          <p>{item.tel}</p>
          <p>{item.overview}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default KakaoMap;
