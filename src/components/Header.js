import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    borderBottom: "2px solid white",
    fontWeight: "bolder",
  };
  return (
    <header className="">
      <div className="logo">
        <NavLink to="/">
          <h1>#VANLIFE</h1>
        </NavLink>
      </div>
      <div className="links">
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="login"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
