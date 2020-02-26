import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import FriendList from "./components/FriendsList";
import WelcomePage from "./components/WelcomePage";
function App() {
  return (
    <>

<Switch>
<Route exact path="/" component={WelcomePage} />
<Route path="/login" component={Login} />
<Route path="/home" component={Home} />
<Route exact path="/protected" component={FriendList} />
<PrivateRoute exact path="/protected" />
</Switch>
    </>
  );
}

export default App;
