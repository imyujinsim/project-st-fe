import React, { useEffect } from 'react';
// import '../style/MapTest.css';

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      let latitude = pos.coords.latitude;
      let longitude = pos.coords.longitude;
      console.log('현재 위치는 : ' + latitude + ', ' + longitude);

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
    });
  }, []);

  return (
    <div class="myMap">
      <h1> 지 도 </h1>
      <div
        class="map"
        id="myMap"
        style={{
          width: '500px',
          height: '500px',
        }}
      ></div>
    </div>
  );
};

export default KakaoMap;
