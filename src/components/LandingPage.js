import React from "react";
import "../main.css"
import controller from "../img/Controller-1.png"

function LandingPage(){
    return(
        <div className = "body"> 
            <h1>
                Welcome to CHANGE ME LATER, changing 
                the game one controller at a time 
            </h1>
            <div className = "slideshow">
                <img src={controller} alt = "slideshow"/>
            </div>
        </div>
    )
}

export default LandingPage;
