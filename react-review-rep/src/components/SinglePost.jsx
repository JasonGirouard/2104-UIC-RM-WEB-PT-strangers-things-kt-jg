import React from "react";
import {Link} from "react-router-dom";

const SinglePost = ({ post }) => {
  return (
    <div
      style={{
        padding: "1px",
        backgroundColor: "lightgray",
        margin: "10px",
      }}
    >
      <h2>{post.title}</h2>
      <h3>{post.price}</h3>
      <p>{post.description}</p>
    </div>
  );
};

export default SinglePost;