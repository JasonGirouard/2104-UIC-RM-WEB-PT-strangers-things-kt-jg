import React, { useEffect, useState, useContext} from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import {RegisterUser} from "./utils";
import ReactDOM from "react-dom";
import { store } from "../state";

const Register = () => {
    const { state, dispatch } = useContext(store);

    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const creds = {
            username,
            password,
        }
        RegisterUser(creds)


        // this should update the registerUserError array
    //     dispatch({
    //     type: "addResponses",
    //     value: result // fix me
    //   })

    }

    const updateUsername = (event) => {
        setUsername(event.target.value)
    }

    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

useEffect(() => {
    if(registerUserError !== ['']){
        console.log('inside the user error log')
        return <h2>Whoops, that's a dealbreaker</h2>
    }

// WHY DOESNT IT KNOW WHAT REGISTER USER ERROR IS WHEN ITS DEFINED IN THE state? 
}, registerUserError)





// note that we need a useEffect to update whenever errorMessage updates


    return (
        <div>
            <NavBar />
            
            <form onSubmit={onFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={updateUsername} />
        </label>
        <label>
          Password:
          <input type="text" value={password} onChange={updatePassword} />
        </label>

        <button type="submit"> Login </button>
      </form>
            
        </div>
    );
};

export default Register;