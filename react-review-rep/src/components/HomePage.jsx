import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import {getPosts} from "./utils";
import SinglePost from "./SinglePost";

//const test = testResponsePosts.posts




const HomePage = () => {

    

    

   // getPosts()

    // const Posts = getPosts()
   
     return (
        <div>
            <NavBar />
            In Home Page 
            {/* {Posts.map((singlePost) => (
                <SinglePost post = {singlePost}/>))} */}


            <button onClick={async () => {
                // const Posts = getPosts()
                // console.log('Posts',Posts)
                try {console.log('before post')
                    const Posts =  await getPosts();
                
                    
                    console.log('Posts In Homepage',Posts[0])
                    console.log('after post')
                
                }
                catch(err){console.log(err)}
                
                


                // Posts.map((singlePost) => (
                //     <SinglePost post = {singlePost}/>))

            }}
                   >
                Test Get Posts
            </button>
            


      
   

           
            
        </div>
    );
};

export default HomePage;