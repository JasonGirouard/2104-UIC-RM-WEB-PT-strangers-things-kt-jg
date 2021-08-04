import logo from "./logo.svg";
import {StateProvider} from './state';
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
  NavBar,
  Register,
  SearchPosts,
  SinglePost,
} from "./components";

 import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <StateProvider>
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
        <Route path="/Login" component={Login} />
        {/* <SearchPosts /> */}
      </header>
    </div>
    </StateProvider>
  );
}

export default App;
