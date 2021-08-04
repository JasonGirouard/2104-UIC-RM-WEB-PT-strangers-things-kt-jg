import React, { useEffect, useState, useContext} from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import {RegisterUser} from "./utils";
import ReactDOM from "react-dom";
import { store } from "../state";
import APIResponseMessage from "./APIResponseMessage";



const Register = () => {
    const { state, dispatch } = useContext(store);
    let response = {};
    
    // response.message = {};
    // response.message.error = '';
   // console.log(state.registerUserError,'registerUserError')
    
    const [APIResponse, setAPIResponse] = useState(response);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onFormSubmit = async (event) => {
        event.preventDefault();
        const creds = {
            username,
            password,
        }
        console.log('response before',APIResponse)
        response = await RegisterUser(creds)
        setAPIResponse(response)
        console.log('response after',APIResponse)

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

// useEffect(() => {
//     if(state.registerUserError.length > 0){
//         console.log('inside the user error log')
//        // return <h2>Whoops, that's a dealbreaker</h2>
//     }

// // WHY DOESNT IT KNOW WHAT REGISTER USER ERROR IS WHEN ITS DEFINED IN THE state? 
// }, state.registerUserError)





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

      <APIResponseMessage message = {APIResponse}/>
            
        </div>
        
    );
};

export default Register;