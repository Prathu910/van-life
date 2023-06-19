import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVansPhotos = () => {
  const currentVan = useOutletContext();
  return (
    <div className="photos">
      <img src={currentVan.imageUrl} alt="available-img" />
    </div>
  );
};

export default HostVansPhotos;
