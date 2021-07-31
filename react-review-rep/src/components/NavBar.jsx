import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {

    return (
        <div>
             <Link to="/">
            <button>Home Page</button>
            </Link>
             
             
             <Link to="/Register">
            <button>Register</button>
            </Link>

            <Link to="/CreatePost">
            <button>CreatePost</button>
            </Link>

            <Link to="/Login">
            <button>Login</button>
            </Link>
        
        </div>
    );
};

export default NavBar;