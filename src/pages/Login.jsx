import React from "react";
import { useLoaderData, useNavigate, Link, redirect } from "react-router-dom";
import { auth } from "../api";
import { signInWithEmailAndPassword } from "firebase/auth";

export function loader({ request }) {
  if (localStorage.getItem("login")) return redirect("/logout");
  // We have passed message in query string from requireAuth function.
  // We are catching that query here.
  const message = new URL(request.url).searchParams.get("message");
  return message;
}

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const message = useLoaderData();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      console.log(email, password);
      await signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          localStorage.setItem("login", JSON.stringify("true"));
          navigate("/login");
        })
        .catch((err) => setError(err.message));
    }
  }

  return (
    <div className="login-form">
      <h1>Log in to your account</h1>
      {message && <h3 className="need-to-login">{message}</h3>}
      <form>
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
          Don't have an account <Link to="/signup">Sign Up</Link>
        </p>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
