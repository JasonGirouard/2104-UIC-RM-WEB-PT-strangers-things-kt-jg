/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import NavBar from "./NavBar";
import { getPosts } from "./utils";
import { store } from "../state";
import SinglePost from "./SinglePost";

const Search = () => {
  const { dispatch } = useContext(store);
  const [posts, setPosts] = useState([]);
  const [searchString, setsearchString] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  let token = localStorage.getItem("token");

  function postMatches(post, searchString) {
    let postTitle = post.title.toLowerCase();
    let postDescription = post.description.toLowerCase();
    let text = searchString.toLowerCase();
    if (postTitle.includes(text)) {
      return true;
    }
    if (postDescription.includes(text)) {
      return true;
    }
    return false;
  }
  const postsToDisplay = searchString.length ? filteredPosts : posts;

  useEffect(async () => {
    const results = await getPosts(token);
    setPosts(results);

    dispatch({
      type: "Posts",
      value: posts,
    });
  }, []);

  const updateSearch = (event) => {
    setsearchString(event.target.value);
    const filteredPosts = posts.filter((post) =>
      postMatches(post, searchString)
    );
    setFilteredPosts(filteredPosts);
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={() => {}}>
        <label>
          Search:
          <input
            type="text"
            placeholder={"Results are returned as you type"}
            value={searchString}
            onChange={updateSearch}
          />
        </label>
      </form>

      {postsToDisplay.map((singlePost, index) => (
        <SinglePost post={singlePost} key={index} />
      ))}
    </div>
  );
};

export default Search;
