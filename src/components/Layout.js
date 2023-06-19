import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
