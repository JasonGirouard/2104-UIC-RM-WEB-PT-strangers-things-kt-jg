import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { getPosts, getUserPostsAndMessages } from "./utils";
import { store } from "../state";
import SinglePost from "./SinglePost";

const HomePage = () => {
  const { state, dispatch } = useContext(store);
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [userMessages, setUserMessages] = useState([]);

  useEffect(async () => {
    const results = await getPosts();
    setPosts(results);
  }, []);

  useEffect(async () => {
    
    if (JSON.parse(localStorage.getItem("isLoggedIn")) !== "") {
      
    const token = (localStorage.getItem("token"))
    const results = await getUserPostsAndMessages(token);
    console.log(results)
    }
  }, []);

  return (
    <div>
      <NavBar />
      In Home Page
      {posts.map((singlePost) => (
        <SinglePost post={singlePost} />
      ))}
    </div>
  );
};

export default HomePage;
