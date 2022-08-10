
//import the meain react component and subsecuent components for use in landing page
import React from "react";
import "../main.css"
import Card from "./Card"
import cloud from "../img/Controller-3.png"
import omega from "../img/Controller-2.png"
import galaxy from "../img/Controller-1.png"
import Slideshow from "./Slideshow"

//css for featured category
const featured = {
    fontFamily:"'Source Sans Pro', sans-serif",
    fontSize:"50px",
    textAlign:"center",
    marginTop:"1%"
}

//main landing page function
function LandingPage(){
    return(
    <div className = "Main">
        <div className = "Cards">
            <h2 style = {featured}>Featured controllers</h2>
            <Card name= "Cloud" price="$69.69" comment="Subtle and simple while still being a game changer.
                Features custom rubber bumpers, full-metal joystick garunteed to never break and a one of
                a kind graphic" img={cloud}/>
            <Card name= "omega" price="$100" comment="who wants to be an alpha when you can be an omega?
                limited run ps4 exclusive controller with custom tinted buttons and keypad, full metal joystick
                and unique god of war touch pad." img={omega}/>
            <Card name= "Galaxy" price="$Too much" comment="The whole galaxy at your finger tips. dont drop it.
            unique 1 of 1 controller. This will be the only one made and will come with a custom signature
            by yours truly along with a metal back plate which garuntees it's legitimacy." img={galaxy}/>
        </div>
        
        <img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves"  width="250" />
    </div>
    )
}

export default LandingPage;
