import React from "react";

const barStyles = {
  height: "100%", /* 100% Full-height */
  width: "7%", /* 0 width - change this with JavaScript */
  position: "fixed", /* Stay in place */
  zIndex: "1", /* Stay on top */
  top: "0", /* Stay at the top */
  backgroundColor: "hsl(169, 60%, 80%)", /* purple*/
  overflowX: "hidden", /* Disable horizontal scroll */
  padding: "35% 1% 35% 1%"//padding for contents in the navbar
}

const barItem = {
    paddingTop: "30%",//individual item padding within the navbar
    paddingBottom: "30%"//individual adding within the navbar
}


function Todo(){
    return(
        <div style = {barStyles} className = "navTag">
            <h3 style = {barItem}>Home</h3>
            <h3 style = {barItem}>Shop</h3>
            <h3 style = {barItem}>About</h3>
        </div>
    );
}

export default Todo;