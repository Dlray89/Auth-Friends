import React from  "react";
import { Link } from "react-router-dom";
import "./home.css";
import Pic1 from "../images/friendspic1.jpg";
import Pic2 from "../images/friendspic2.jpg";
import Pic3 from "../images/friendspic3.jpg";
import Pic4 from "../images/friendspic4.jpg";

function Home(){
    return(
        <div className="Contianer">
        <div className="btnBox">
          <Link style={{textDecoration: "none", color:"white"}} to='/'>Home</Link>
          <Link style={{textDecoration: "none", color:"white"}} to='/login'>Login</Link>
            </div>
       
        <div className="Intro">
            <h1>
            Welcome
            </h1>
            <div className="introP">
            <p>Welcome to the F-R-I-E-N-D-S <br />
            Fan page.</p>
            <p>Here where you can see pictures and videos
            all in one spot. <br /> They are also having a reunion soon
            and we are super excited for that.</p>
            <p>To see episodes for this wonder login to see what we got going on!</p>
            </div>

            
            <div className="PicContainer">
                <img className="Pic1" src={Pic1} alt="pic fo friendsthe show" />
                <img  className="Pic2" src={Pic2} alt="pic fo friendsthe show" />
                <img className="Pic3" src={Pic3} alt="pic fo friendsthe show" />
                <img className="Pic4" src={Pic4} alt="pic fo friendsthe show" />
            </div>
        </div>
        
        </div>
    )

}
export default Home;