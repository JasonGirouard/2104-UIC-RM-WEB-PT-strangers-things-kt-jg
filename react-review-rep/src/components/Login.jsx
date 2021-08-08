import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { LoginUser } from "./utils";
import APIResponseMessage from "./APIResponseMessage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [APIResponse, setAPIResponse] = useState({});

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const creds = {
      username,
      password,
    };
    const response = await LoginUser(creds);
    setAPIResponse(response);

    if (response.success === true) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username",username)

    //  send to homepage after 1.5 seconds
    // should adjust to use redirect but dont know how to at the moment
     
      setTimeout(() => {
       // <Redirect to = "/" />
         window.location.pathname = "/";
      }, 1500);
    }
  };

  const updateUsername = (event) => {
    setUsername(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className = "Login">
      <h3>Login:</h3>
      <form onSubmit={onFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={updateUsername} />
        </label>
        <label>
          Password:
          <input type="text" value={password} onChange={updatePassword} />
        </label>

        <button type="submit" className = "message"> Login </button>
      </form>
      <h3>Don't have an account?</h3>
      <Link to="/Register">
        <button className = "message">Click here to Register</button>
      </Link>
      </div>

      <APIResponseMessage message={APIResponse} />
    </div>
  );
};

export default Login;
