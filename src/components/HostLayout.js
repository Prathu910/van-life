import React from "react";
import HostNav from "./HostNav";
import { Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <div className="host-container">
      <HostNav />
      <Outlet />
    </div>
  );
};

export default HostLayout;
