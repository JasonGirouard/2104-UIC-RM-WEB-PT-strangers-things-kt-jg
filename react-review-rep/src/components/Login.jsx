import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { LoginUser } from "./utils";
import { store } from "../state";
import APIResponseMessage from "./APIResponseMessage";

const Login = () => {
  const { state, dispatch } = useContext(store);

  let response = {};
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [APIResponse, setAPIResponse] = useState(response);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const creds = {
      username,
      password,
    };
    response = await LoginUser(creds);
    setAPIResponse(response);
    console.log(response);

    if (response.success == true) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("token", response.data.token);
      console.log(localStorage.getItem("token"))
      // the dispatch function is working, but in order to persist isLoggedin upon refresh, im also storing it in localStorage
      localStorage.setItem("isLoggedIn", true);
      dispatch({
        type: "isLoggedIn",
        value: true,
      });
      // send to homepage after 1.5 seconds
      setTimeout(() => {
        window.location.pathname = "/";
      }, 1500);
    }
  };
  console.log("isLoggedIn", state.isLoggedIn);

  const updateUsername = (event) => {
    setUsername(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <NavBar />
      <h3>Login below:</h3>
      <form onSubmit={onFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={updateUsername} />
        </label>
        <label>
          Password:
          <input type="text" value={password} onChange={updatePassword} />
        </label>

        <button type="submit"> Login </button>
      </form>
      <h3>Don't have an account?</h3>
      <Link to="/Register">
        <button>Click here to Register</button>
      </Link>

      <APIResponseMessage message={APIResponse} />
    </div>
  );
};

export default Login;
