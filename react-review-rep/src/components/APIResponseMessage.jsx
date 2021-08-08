import React from "react";

const APIResponseMessage = ({ message }) => {
  if (Object.keys(message).length === 0) {
    return <div></div>;
  }
  if (message.success === false) {
    return (
      <div className = "error">
        <h2>{message.error.message}</h2>
      </div>
    );
  }
  if (message.success === true) {
    return (
      <div className = "success">
        <h2>Success</h2>
      </div>
    );
  }
};

export default APIResponseMessage;
