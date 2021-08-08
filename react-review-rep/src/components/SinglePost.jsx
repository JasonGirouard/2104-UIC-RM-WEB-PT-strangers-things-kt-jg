import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../state";
import { deletePost } from "./utils";
import "../App.css";

const SinglePost = ({ post, isAuthor }) => {
  const { dispatch } = useContext(store);
  let token = localStorage.getItem("token");
  

  if (post.isAuthor === true || isAuthor === true) {
    return (
      <div className="Post">
        {post.active === false ? <h5>Deleted</h5> : null}
        <h2>{post.title}</h2>
        <h3>{post.price}</h3>
        <p>{post.description}</p>
        <h6>Created at: {post.createdAt}</h6>
        <h6>Last updated at: {post.updatedAt}</h6>

        <Link to={`/Post_ID/${post._id}`}>
          <button className = "message"
            onClick={() => {
              dispatch({
                type: "activePost",
                value: post,
              });
              localStorage.setItem("currentPost", post);
            }}
          >
            Post Details
          </button>
        </Link>

        <button className = "delete"
          onClick={() => {
            deletePost(post._id, token);
          }}
        >
          Delete Post
        </button>

      </div>
    );
  } else {
    return (
      <div className="Post">
        <h2>{post.title}</h2>
        <h3>{post.price}</h3>
        <p>{post.description}</p>

        <Link to={`/Post_ID/${post._id}`}>
          <button className = "message"
            onClick={() => {
              dispatch({
                type: "activePost",
                value: post,
              });
              localStorage.setItem("currentPost", post);
            }}
          >
            Send Message
          </button>
        </Link>
      </div>
    );
  }
};

export default SinglePost;
