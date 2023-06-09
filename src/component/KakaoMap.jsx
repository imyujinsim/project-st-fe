import React, { useEffect } from 'react';
import '../style/map.css';

const { kakao } = window;

const KakaoMap = (props) => {
  const detail = props.detail;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      const latitude = detail.mapy ? detail.mapy : detail.mapy;
      const longitude = detail.mapx ? detail.mapx : detail.mapx;

      let myLati = pos.coords.latitude;
      let myLong = pos.coords.longitude;
      console.log(longitude);

      const container = document.getElementById('myMap');
      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);

      // 마커가 표시될 위치입니다
      var markerPosition = new kakao.maps.LatLng(latitude, longitude);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
      // marker.setMap(null);

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      var mapTypeControl = new kakao.maps.MapTypeControl();

      // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
      // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    });
  }, [detail]);

  return (
    <div class="myMap">
      <h1> 지도 </h1>
      <div className="map-container">
        <div
          class="map"
          id="myMap"
          style={{
            width: '600px',
            height: '300px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default KakaoMap;
