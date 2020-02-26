import React from "react";
import { Link } from "react-router-dom";
import LogoPic from "../images/friends.jpg";
import "./welcome.css"


export default class WelcomePage extends React.Component {
    render(){
        return (
           <div>

                <div className="navLinks">
                <Link style={{textDecoration: "none", color:"white"}} to={"/home"}>Home</Link>
                <Link  style={{textDecoration: "none", color:"white"}}to={"/login"}>Login</Link>
                </div>
                <img src={LogoPic} alt="picture of the cast of friends" />

           </div>
        )
    }
}