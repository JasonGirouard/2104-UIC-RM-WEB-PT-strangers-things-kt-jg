import React from "react";
import { Link } from "react-router-dom";

const APIResponseMessage = ({ message }) => {
  return Object.keys(message).length == 0 ? (
    <div></div>
  ) : message.success == true ? (
    <div
      style={{
        padding: "1px",
        backgroundColor: "lightgray",
        margin: "10px",
      }}
    >
      <h2>{message.data.message}</h2>
    </div>
  ) : (
    <div
      style={{
        padding: "1px",
        backgroundColor: "lightgray",
        margin: "10px",
      }}
    >
      <h2>{message.error.message}</h2>
    </div>
  );
};

export default APIResponseMessage;
