import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import {getPosts} from "./utils";
import SinglePost from "./SinglePost";



//const test = testResponsePosts.posts




const HomePage = () => {


   const [posts, setPosts] = useState([]);
   
 useEffect(async () => {
    const results = await getPosts();
    setPosts(results)
 },[])
   // getPosts()

    // const Posts = getPosts()
   
     return (
        <div>
            <NavBar />
            In Home Page 

            {posts.map((singlePost) => (
                <SinglePost post = {singlePost}/>))}
                
        </div>
    );
};

export default HomePage;