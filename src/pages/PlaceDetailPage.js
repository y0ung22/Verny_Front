import React from "react";

const PlaceDetailPage = ({ place }) => {
  return (
    <div>
      <h2>{place.name}</h2>
      <p>카테고리: {place.category}</p>
      <p>주소: {place.address}</p>
      {/* 추가적인 상세 정보 표시 */}
    </div>
  );
};

export default PlaceDetailPage;
