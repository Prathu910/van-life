import React from "react";
import { NavLink } from "react-router-dom";

const HostNav = () => {
  const activeStyle = {
    borderBottom: "2px solid black",
    fontWeight: "bolder",
  };
  return (
    <div className="host-nav">
      <NavLink
        to="/host"
        end
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="income"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Income
      </NavLink>
      <NavLink
        to="vans"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Vans
      </NavLink>
      <NavLink
        to="reviews"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Reviews
      </NavLink>
    </div>
  );
};

export default HostNav;
