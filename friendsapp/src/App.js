import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from "./components/home";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import FriendList from "./components/friendsList";
function App() {
  return (
    <div className="App">

<Switch>
<Route path="/" component={Home} />
<Route path="/login" component={Login} />
<PrivateRoute exact path="./protected" component={FriendList} />
</Switch>
    </div>
  );
}

export default App;
