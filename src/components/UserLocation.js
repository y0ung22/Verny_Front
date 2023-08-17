import React, { useState, useEffect } from "react";
import axios from "axios";
import useGeolocation from "react-hook-geolocation";

function UserLocation() {
  const [userLocation, setUserLocation] = useState(null);
  const BASE_URL = "https://yewon1209.pythonanywhere.com";
  const geolocation = useGeolocation(); // 사용자 위치 정보 훅

  const getLocation = () => {
    if (geolocation.error) {
      console.error(
        "사용자 위치 정보를 받아오지 못했습니다.",
        geolocation.error
      );
      return;
    }

    if (geolocation.latitude && geolocation.longitude) {
      setUserLocation({
        lat: geolocation.latitude,
        lng: geolocation.longitude,
      });

      // 위치 정보를 백엔드로 전달
      const { latitude, longitude } = geolocation;
      axios
        .post(`${BASE_URL}/map/my`, { latitude, longitude })
        .then((response) => {
          console.log("위치 정보 전송 성공:", response.data);
        })
        .catch((error) => {
          console.error("위치 정보 전송 실패:", error);
        });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (geolocation.error) {
      // 위치 정보 허용 거부 시 알림
      alert(
        "위치 정보를 사용하려면 브라우저 설정에서 위치 정보를 허용해주세요."
      );
    }
  }, [geolocation.error]);

  return <></>;
}

export default UserLocation;
