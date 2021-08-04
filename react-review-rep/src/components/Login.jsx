import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import {LoginUser} from "./utils";

const Login = () => {

    return (
        <div>
            <NavBar />
            In Login
            <button onClick={() => {LoginUser()}}>
                Submit
            </button>

        </div>
    );
};

export default Login;