import React, { useState } from "react";
import NavBar from "./NavBar";
import { createPost } from "./utils";
import APIResponseMessage from "./APIResponseMessage";

const CreatePost = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Location, setLocation] = useState("");
  const [willDeliver, setwillDeliver] = useState(false);
  const [APIResponse, setAPIResponse] = useState({});

  const onFormSubmit = async (event) => {
    event.preventDefault();
    let token = localStorage.getItem("token");
    let post = {
      title: Title,
      description: Description,
      price: Price,
      location: Location,
      willDeliver: willDeliver,
    };
    const response = await createPost(post, token);
    setAPIResponse(response);
  };

  const updateTitle = (event) => {
    setTitle(event.target.value);
  };

  const updateDescription = (event) => {
    setDescription(event.target.value);
  };

  const updatePrice = (event) => {
    setPrice(event.target.value);
  };
  const updateLocation = (event) => {
    setLocation(event.target.value);
  };
  const updatewillDeliver = (event) => {
    setwillDeliver(event.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className = "CreatePostForm">
      <h3>Create Post</h3>

      {/* if the user is not logged in, send them to the login page */}
      {!localStorage.getItem("token")
        ? (window.location.pathname = "/Login")
        : null}

      <form onSubmit={onFormSubmit}>
        <label>
          Title:
          <input type="text" value={Title} onChange={updateTitle} />
        </label>{" "}
        <br />
        <label>
          Description:
          <input type="text" value={Description} onChange={updateDescription} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={Price} onChange={updatePrice} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={Location} onChange={updateLocation} />
        </label>
        <br />
        <label>
          Will you deliver?:
          <input
            type="boolean"
            value={willDeliver}
            onChange={updatewillDeliver}
          />
        </label>
        <br />
        <button type="submit" className = "message"> Post </button>
      </form>
      </div>

      <APIResponseMessage message={APIResponse} />
    </div>
  );
};

export default CreatePost;
