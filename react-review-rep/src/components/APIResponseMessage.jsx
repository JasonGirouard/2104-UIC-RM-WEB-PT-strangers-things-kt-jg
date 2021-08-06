import React from "react";
import { Link } from "react-router-dom";

const APIResponseMessage = ({ message }) => {
  return Object.keys(message).length === 0 ? 
    null :
  message.success == true && message.data.message == null ?

  (
    <div
      style={{
        padding: "1px",
        backgroundColor: "lightgray",
        margin: "10px",
      }}
    >
      <h2>Success</h2>
    </div>
  ) : 



  message.data  ?
  (
    <div
      style={{
        padding: "1px",
        backgroundColor: "lightgray",
        margin: "10px",
      }}
    >
      <h2>{message.data.message}</h2>
    </div>
  ) : 
  message.error  ?
  
  (
    <div
      style={{
        padding: "1px",
        backgroundColor: "lightgray",
        margin: "10px",
      }}
    >
      
      <h2>{message.error.message}</h2>
    </div>
  ) : 
  null
  

};

export default APIResponseMessage;
