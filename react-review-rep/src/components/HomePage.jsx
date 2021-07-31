import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => {

    return (
        <div>
            
            <p>In Home Page</p>
            

            <Link to="/Register">
            <button>Register</button>
            </Link>

            <Link to="/CreatePost">
            <button>CreatePost</button>
            </Link>
            
        </div>
    );
};

export default HomePage;