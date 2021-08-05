import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../state";

const Logout = () => {
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
  };

  return <div></div>;
};

export default Logout;
