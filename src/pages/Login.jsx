import React from "react";
import { Form } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-form">
      <h1>Sign in to your account</h1>
      <Form>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

export default Login;
