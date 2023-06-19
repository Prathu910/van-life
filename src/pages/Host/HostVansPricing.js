import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVansPricing = () => {
  const currentVan = useOutletContext();
  return (
    <div className="pricing">
      <h3>{`$${currentVan.price}/Day`}</h3>
    </div>
  );
};

export default HostVansPricing;
