import React from "react";
import { NavLink } from "react-router-dom";

const HostNav = () => {
  return (
    <div className="host-nav">
      <NavLink to="/host">Dashboard</NavLink>
      <NavLink to="income">Income</NavLink>
      <NavLink to="vans">Vans</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
    </div>
  );
};

export default HostNav;
