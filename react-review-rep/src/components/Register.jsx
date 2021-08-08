import React, { useState } from "react";
import NavBar from "./NavBar";
import { RegisterUser } from "./utils";
import APIResponseMessage from "./APIResponseMessage";

const Register = () => {
  const [APIResponse, setAPIResponse] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const creds = {
      username,
      password,
    };
    const response = await RegisterUser(creds);
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
      <div className = "Register">
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

        <button type="submit" className = "message"> Register </button>
      </form>
      </div>

      <APIResponseMessage message={APIResponse} />
    </div>
  );
};

export default Register;
