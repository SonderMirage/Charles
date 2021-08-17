import React from "react";
import logo from "../img/Pentagram.png"

const barStyles = {
    display:"flex",
    verticalAlign:"center",
    height: "7%", /* 100% Full-height */
    width: "100%", /* 0 width - change this with JavaScript */
    position: "fixed", /* Stay in place */
    zIndex: "1", /* Stay on top */
    top: "0", /* Stay at the top */
    backgroundColor: "hsl(169, 60%, 60%)", /* purple*/
}

const barItem = {
    paddingTop:"2.5%",
    display:"inline",
    paddingLeft:"13%",
    paddingRight:"11%",
    textDecoration:"none",
}



function Navbar(){
    return(
        <div>
            <ul style = {barStyles}>
                <li style = {barItem}><a href="home.html">home</a></li>
                <li style = {barItem}><a href="shop.html">Shop</a></li>
                <li style = {barItem}><a href="contact.html">Contact</a></li>
                <li style = {barItem}><a href="customize.html">Customize</a></li>
            </ul>
        </div>
    );
}

export default Navbar;