import React, { useState, useContext } from "react";
import { store } from "../state";
import NavBar from "./NavBar";
import { sendPostMessage } from "./utils";
import APIResponseMessage from "./APIResponseMessage";
import SingleMessage from "./SingleMessage";
import { deletePost } from "./utils";

const PostDetails = (props) => {
  const { state } = useContext(store);
  const [message, setMessage] = useState("");
  const [APIResponse, setAPIResponse] = useState({});
  console.log('active post object', state.activePost)

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const response = await sendPostMessage(
      state.activePost._id,
      localStorage.getItem("token"),
      message
    );
    setAPIResponse(response);
  };

  const updateMessage = (event) => {
    setMessage(event.target.value);
  };

  //  let currPost = localStorage.getItem("currentPost")

  if (Object.keys(state.activePost).length === 0) {
    return (
      <div>
        <NavBar />
      </div>
    );
  } 
  if(state.activePost.isAuthor === true && state.activePost.messages.length >0) {return <div>
        <NavBar />
        <div className="Post">
        {state.activePost.active === false ? <h5>Deleted</h5> : null}
          <h2>{state.activePost.title}</h2>
          <h3>{state.activePost.price}</h3>
          <p>{state.activePost.description}</p>
          <h6>Created at: {state.activePost.createdAt}</h6>
          <h6>Last updated at: {state.activePost.updatedAt}</h6>
          {state.activePost.active === true ?  
      <button className = "delete"
      onClick={() => {
        deletePost(state.activePost._id,  localStorage.getItem("token"));
      }}
    >

      Delete Post
    </button>
    : null}
        </div>
        <div>
        {state.activePost.messages.map((Message, index) => (
        <SingleMessage message={Message} key={index} />
      ))}
          <APIResponseMessage message={APIResponse} />
        </div>
      </div>

  }
  if(state.activePost.isAuthor === true && state.activePost.messages.length ===0) {return <div>
    <NavBar />
    <div className="Post">
    {state.activePost.active === false ? <h5>Deleted</h5> : null}
      <h2>{state.activePost.title}</h2>
      <h3>{state.activePost.price}</h3>
      <p>{state.activePost.description}</p>
      <h6>Created at: {state.activePost.createdAt}</h6>
      <h6>Last updated at: {state.activePost.updatedAt}</h6>
      
      {state.activePost.active === true ?  
      <button className = "delete"
      onClick={() => {
        deletePost(state.activePost._id,  localStorage.getItem("token"));
      }}
    >
      Delete Post
    </button>
    : null}
    </div>
    <div>
   
      <APIResponseMessage message={APIResponse} />
    </div>
  </div>

}
  
  
  else {
    return (

        // note we should include indication of deletion
      <div>
        <NavBar />
        <div className="Post">
        {state.activePost.active === false ? <h5>Deleted</h5> : null}
          <h2>{state.activePost.title}</h2>
          <h3>{state.activePost.price}</h3>
          <p>{state.activePost.description}</p>
          <h6>Created at: {state.activePost.createdAt}</h6>
          <h6>Last updated at: {state.activePost.updatedAt}</h6>
        </div>
        <div>
          <form onSubmit={onFormSubmit}>
            <label>
              Message:
              <input type="text" value={message} onChange={updateMessage} />
            </label>

            <button type="submit" className="message">
              {" "}
              Send Message{" "}
            </button>
          </form>
          <APIResponseMessage message={APIResponse} />
        </div>
      </div>
    );
  }
};

export default PostDetails;
