import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { LoginUser } from "./utils";
import APIResponseMessage from "./APIResponseMessage";

const Login = () => {
    let response = {};
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [APIResponse, setAPIResponse] = useState(response);

    const onFormSubmit = async (event) => {
        event.preventDefault();
        const creds = {
            username,
            password,
        }
        response = await LoginUser(creds)
        setAPIResponse(response)
    }

    const updateUsername = (event) => {
        setUsername(event.target.value)
    }

    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

  return (
    <div>
      <NavBar />
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

      <APIResponseMessage message = {APIResponse}/>

      
    </div>
  );
};

export default Login;
