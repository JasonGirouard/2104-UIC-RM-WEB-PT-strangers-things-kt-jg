import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const LogOutUser = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("username","")
    window.location.pathname = "/";
  };

  return (
    <div className = "Nav">

      <Link to="/">
        <button>Home Page</button>
      </Link>

      <Link to="/Search">
        <button>Search</button>
      </Link>

      <Link to="/CreatePost">
        <button>CreatePost</button>
      </Link>

      {!localStorage.getItem("token") ? (
        <Link to="/Register">
          <button>Register</button>
        </Link>
      ) : null}

      {!localStorage.getItem("token") ? (
        <Link to="/Login">
          <button>Login</button>
        </Link>
      ) : null}

      {localStorage.getItem("token") ? (
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
