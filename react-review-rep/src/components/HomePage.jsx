import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { getPosts } from "./utils";
import { store } from "../state";
import SinglePost from "./SinglePost";

const HomePage = () => {
  const { state, dispatch } = useContext(store);
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const results = await getPosts();
    setPosts(results);
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
