import React from "react";
import "../main.css"
import Card from "./Card"
import cloud from "../img/Controller-3.png"
import omega from "../img/Controller-2.png"
import galaxy from "../img/Controller-1.png"

function LandingPage(){
    return(
    <div className = "Main">
        <div className = "slideshow">
            <h1>slideShow in progress. be patient</h1>
        </div>
        <div className = "cards">
            <h2>Featured controllers</h2>
            <Card name= "Cloud" price="$69.69" comment="subtle and simple while still being a game changer" img={cloud}/>
            <Card name= "omega" price="$100" comment="who wants to be an alpha when you can be an omega?" img={omega}/>
            <Card name= "Galaxy" price="$too much" comment="The whole galaxy at your finger tips. dont drop it" img={galaxy}/>
        </div>
        <img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves"  width="250" />
    </div>
    )
}

export default LandingPage;
