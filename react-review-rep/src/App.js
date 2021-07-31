import logo from "./logo.svg";
import "./App.css";

import {
  CreateMessage,
  CreatePost,
  DeletePost,
  DisplayPosts,
  EditPost,
  HomePage,
  Login,
  Logout,
  Register,
  SearchPosts,
} from "./components";

 import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Route exact path = "/" component = {HomePage} />
        <Route path = "/CreatePost" component = {CreatePost} />
        {/* <CreateMessage />
        <DeletePost />
        <DisplayPosts />
        <EditPost />
    
        <Login />
        <Logout /> */}
        <Route path="/Register" component={Register}/>
        {/* <SearchPosts /> */}
      </header>
    </div>
  );
}

export default App;
