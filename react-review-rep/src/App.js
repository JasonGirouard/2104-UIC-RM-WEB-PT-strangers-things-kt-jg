import React, { useContext } from "react";
import { store } from "./state";
import "./App.css";

import {
  CreatePost,
  HomePage,
  Login,
  PostDetails,
  Register,
  SearchPosts,
} from "./components";

import { Switch, Route } from "react-router-dom";

function App() {
  const { state } = useContext(store);
  console.log("state here: ", state);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Switch>
        <Route path="/CreatePost" component={CreatePost} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
        <Route path="/Search" component={SearchPosts} />
        <Route path="/Post_ID/:activePostId" component={PostDetails} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
