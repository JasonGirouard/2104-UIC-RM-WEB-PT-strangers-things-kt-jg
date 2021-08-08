import React, {  useContext } from "react";
import { store } from "../state";


const SingleMessage = ({ message }) => {
  const { state } = useContext(store);

 
  // if the message is returned from getUserPostsandMessages, it will have a Post property
  // if the message array is being read from the post itself, it will not
  if(message.hasOwnProperty('post')){
  return (
    <div className = "renderMessage">
      <h2>Message: {message.content}</h2>
      <p>Regarding Post: {message.post.title}</p>
      <p>From User: {message.fromUser.username}</p>
    </div>
  );
  }
  else {
    return (
      <div className = "renderMessage">
        <h2>Message: {message.content}</h2>
        <p>Regarding Post: {state.activePost.title}</p>
        <p>From User: {message.fromUser.username}</p>
      </div>
    );



  }
};

export default SingleMessage;
