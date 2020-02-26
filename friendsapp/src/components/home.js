import React from  "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="Contianer">
            <button><Link to='/'>Home</Link></button>
            <button><Link to='/login'>Login</Link></button>
       
        <div className="Intro">
            <p>
            Home Section
            </p>
        </div>
        
        </div>
    )

}
export default Home;