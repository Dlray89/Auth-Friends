import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from "./components/home";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">

<Switch>
<Route path="/login" component={Login} />
<Route path="/" component={Home} />
<PrivateRoute exact path="./protected" />
</Switch>
    </div>
  );
}

export default App;
