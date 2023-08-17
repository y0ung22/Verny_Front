import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function UserLocation() {
  const [userLocation, setUserLocation] = useState(null);

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });

          // 위치 정보를 백엔드로 전달
          const { latitude, longitude } = position.coords;
          axios
            .post(`${BASE_URL}/map/my`, { latitude, longitude })
            .then((response) => {
              console.log("위치 정보 전송 성공:", response.data);
            })
            .catch((error) => {
              console.error("위치 정보 전송 실패:", error);
            });
        },
        (err) => {
          console.error("사용자 위치 정보를 받아오지 못했습니다.", err);
        }
      );
    }
  }, []);

  return <></>;
}

export default UserLocation;
