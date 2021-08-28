import React from "react";
import logo from "../img/Pentagram.png"

const barStyles = {
    display: "flex",
    paddingTop: "2%",
    paddingBottom: "2%",
    width: "100%",
    margin: "auto",
    padding: "0",
    backgroundColor: "hsl(169, 60%, 60%)", // blue
    borderBottomStyle:"solid",
    borderColor: "black",
    borderWidth:"5px"
}

const barItem = {
    display: "inline",
    flex: "1",
    margin: "auto"
}

function Navbar(){


    return(
        <div>
            <ul style = {barStyles}>
                <li style = {barItem}> <a href="home.html"> <img src= {logo} alt="logo" /> </a> </li>
                <li style = {barItem}> <a href="shop.html">Shop</a> </li>
                <li style = {barItem}> <a href="contact.html">Contact</a> </li>
                <li style = {barItem}> <a href="customize.html">Customize</a> </li>
            </ul>
        </div>
    );
}

export default Navbar;