import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <div className="logo">
        <Link to="/">
          <h1>#VANLIFE</h1>
        </Link>
      </div>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </header>
  );
};

export default Header;
