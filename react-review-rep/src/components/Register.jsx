import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import {RegisterUser} from "./utils";
import ReactDOM from "react-dom";



const Register = () => {

    return (
        <div>
            <NavBar />
            In Register
            <button onClick={() => {RegisterUser()}}>
                Submit
            </button>
            
        </div>
    );
};

export default Register;