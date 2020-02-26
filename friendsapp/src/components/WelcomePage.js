import React from "react";
import { Link } from "react-router-dom";


export default class WelcomePage extends React.Component {
    render(){
        return (
           <div>

                <h1>Welcome Friends</h1>
                <Link to={"/home"}>Home</Link>
                <Link to={"/login"}>Login</Link>

           </div>
        )
    }
}