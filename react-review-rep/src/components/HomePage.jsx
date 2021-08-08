/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import NavBar from "./NavBar";
import { getPosts, getUserPostsAndMessages } from "./utils";
import { store } from "../state";
import SinglePost from "./SinglePost";
import SingleMessage from "./SingleMessage";

const HomePage = () => {
  const { dispatch } = useContext(store);
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [userMessages, setUserMessages] = useState([]);

  useEffect(async () => {
    const results = await getPosts();
    setPosts(results);
  }, []);

  useEffect(async () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const results = await getUserPostsAndMessages(token);

      console.log("results of user", results);
      // add isAuthor quality to results returned from getUserPosts
      let tempPosts = results.data.posts 
      tempPosts.forEach((post) => (
        post.isAuthor = true
      ) )

      // filter userMessages to only show messages that we received, not sent
      let tempMessages = results.data.messages 
      tempMessages = tempMessages.filter(message => message.fromUser.username !== localStorage.getItem("username"))
      setUserPosts(tempPosts);
      setUserMessages(tempMessages);
      //console.log(results)
    } else {
      const results = await getPosts();
      setPosts(results);

      dispatch({
        type: "Posts",
        value: posts,
      });
    }
  }, []);

  return (
    <div>
      <NavBar />

      
      {userPosts.length !== 0 && posts.length !== 0 ? <h1> Posts:</h1> : <h1> You have no posts</h1>}

      {localStorage.getItem("token") === ""
        ? posts.map((singlePost, index) => (
            <SinglePost post={singlePost} key={index} />
          ))
        : null}

      {localStorage.getItem("token") !== ""
        ? userPosts.map((singlePost, index) => (
            <SinglePost post={singlePost} isAuthor={true} key={index} />
          ))
        : null}
        {localStorage.getItem("token") !== "" && userMessages.length !== 0 ? <h1> Messages Received:</h1> : <h1> You have no messages received</h1> }

      {localStorage.getItem("token") !== ""
        ? userMessages.map((Message, index) => (
            <SingleMessage message={Message} key={index} />
          ))
        : null}
    </div>
  );
};

export default HomePage;
