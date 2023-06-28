import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../api";

const Logout = () => {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("login");
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log("error during signout");
      });
  }
  return (
    <div className="logout-container">
      <h1>Click this button to Logout</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Logout;
