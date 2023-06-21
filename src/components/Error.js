import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-container">
      <h1>Error Occured for fetching data</h1>
      <Link to="/">
        <button>Go Back To Home</button>
      </Link>
    </div>
  );
};

export default Error;
