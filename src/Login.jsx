import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loggedInUser = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const signUpUser = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      {/* <Link>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link> */}
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
            type="password"
          />
          <button
            onClick={loggedInUser}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
          <p>By signing-in, you agree to Amazon's Terms and Conditions</p>
          <button onClick={signUpUser} className="login__registerButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
