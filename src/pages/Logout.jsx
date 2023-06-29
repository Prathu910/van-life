import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../api";
import { loginContext } from "../App";

const Logout = () => {
  const navigate = useNavigate();
  const { toggleLogin } = React.useContext(loginContext);
  function handleClick() {
    localStorage.removeItem("login");
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log("error during signout");
      });
    toggleLogin();
  }
  return (
    <div className="logout-container">
      <h1>Click this button to Logout</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Logout;
