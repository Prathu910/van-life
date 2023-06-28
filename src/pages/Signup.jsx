import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../api";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (email && password && username) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          localStorage.setItem("login", JSON.stringify("true"));
          navigate("/");
        })
        .catch((err) => setError(err.message));
    }
  }

  return (
    <div className="login-form">
      <h1>Sign in to your account</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <b>{error}</b>}
        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
