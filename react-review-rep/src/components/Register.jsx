import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { RegisterUser } from "./utils";
import ReactDOM from "react-dom";
import { store } from "../state";
import APIResponseMessage from "./APIResponseMessage";

const Register = () => {
  const { state, dispatch } = useContext(store);
  let response = {};

  const [APIResponse, setAPIResponse] = useState(response);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const creds = {
      username,
      password,
    };
    response = await RegisterUser(creds);
    setAPIResponse(response);
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
      <h3>Register below:</h3>
      <form onSubmit={onFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={updateUsername} />
        </label>
        <label>
          Password:
          <input type="text" value={password} onChange={updatePassword} />
        </label>

        <button type="submit"> Register </button>
      </form>

      <APIResponseMessage message={APIResponse} />
    </div>
  );
};

export default Register;
