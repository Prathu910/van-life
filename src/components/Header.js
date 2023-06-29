import React from "react";
import { NavLink } from "react-router-dom";
import { loginContext } from "../App";

const Header = () => {
  const { loginStatus, toggleLogin } = React.useContext(loginContext);
  const activeStyle = {
    borderBottom: "2px solid white",
    fontWeight: "bolder",
  };
  React.useEffect(() => {
    toggleLogin();
  });
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
          to={loginStatus ? `logout` : `login`}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          {loginStatus ? `Logout` : `Login`}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
