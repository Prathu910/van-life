import React from "react";
import { Link, Outlet } from "react-router-dom";

const HostVansDetailsLayout = () => {
  return (
    <>
      <Link to=".">Dashboard</Link>
      <Link to="pricing">Pricing</Link>
      <Link to="photos">Photos</Link>
      <Outlet />
    </>
  );
};

export default HostVansDetailsLayout;
