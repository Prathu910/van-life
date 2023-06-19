import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanDetailedInfo = () => {
  const currentVan = useOutletContext();
  return (
    <div className="detailed-info">
      <h4>
        Name: <span>{currentVan.name}</span>
      </h4>
      <h4>
        Category: <span>{currentVan.type}</span>
      </h4>
      <h4>
        Description: <span>{currentVan.description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </div>
  );
};

export default HostVanDetailedInfo;
