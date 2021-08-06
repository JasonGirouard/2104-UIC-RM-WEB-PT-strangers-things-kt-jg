import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { createPost } from "./utils";
import APIResponseMessage from "./APIResponseMessage";

const CreatePost =  () => {
    let response = {};
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Price, setPrice] = useState("");
    const [Location, setLocation] = useState("");
    const [willDeliver, setwillDeliver] = useState(false);
    const [APIResponse, setAPIResponse] = useState(response);

    const onFormSubmit = async (event) => {
        event.preventDefault();
        console.log("in the form submit");


        console.log('token here ',localStorage.getItem("token"))

        

        let token = localStorage.getItem("token");
        let post = {title: Title,description: Description,price: Price,location:Location,willDeliver: willDeliver}

        response = await createPost(post,token);
        setAPIResponse(response);

    }

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
      <h3>In Create Post</h3>

      {/* if the user is not logged in, send them to the login page */}
      {!JSON.parse(localStorage.getItem("isLoggedIn"))
        ? (window.location.pathname = "/Login")
        : null}

      <form onSubmit={onFormSubmit}>
        <label>Title:<input type="text" value={Title} onChange={updateTitle} /></label> <br />
        <label>Description:<input type="text" value={Description} onChange={updateDescription} /></label><br />
        <label>Price:<input type="text" value={Price} onChange={updatePrice} /></label><br />
        <label>Location:<input type="text" value={Location} onChange={updateLocation} /></label><br />
        <label>Will you deliver?:<input type="boolean" value={willDeliver} onChange={updatewillDeliver} /></label><br />

        <button type="submit"
        
        > Post </button>
      </form>

      <APIResponseMessage message={APIResponse} />


    </div>
  );
};

export default CreatePost;
