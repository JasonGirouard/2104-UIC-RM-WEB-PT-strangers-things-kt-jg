import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { store } from "../state";

const NavBar = () => {
  const { state, dispatch } = useContext(store);

  const LogOutUser = () => {
    dispatch({
      type: "isLoggedIn",
      value: false,
    });
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", false);
    window.location.pathname = "/";
  };

  return (
    <div>
      <Link to="/">
        <button>Home Page</button>
      </Link>

      <Link to="/CreatePost">
        <button>CreatePost</button>
      </Link>

      {!JSON.parse(localStorage.getItem("isLoggedIn")) ? (
        <Link to="/Register">
          <button>Register</button>
        </Link>
      ) : null}

      {!JSON.parse(localStorage.getItem("isLoggedIn")) ? (
        <Link to="/Login">
          <button>Login</button>
        </Link>
      ) : null}

      {JSON.parse(localStorage.getItem("isLoggedIn")) ? (
        <button
          onClick={() => {
            LogOutUser();
          }}
        >
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default NavBar;
