import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { LoginUser } from "./utils";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const creds = {
            username,
            password,
        }
        LoginUser(creds)
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

      
    </div>
  );
};

export default Login;
