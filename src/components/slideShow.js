import React from "react";
import { slider1Data } from "./slide1Data";

function slideShow(){
    return(
        <div>
            {slider1Data.map( (image,index) (function(){
                return(
                    <img src={slider1Data.image} alt="controllers" />
                )
            }))}
        </div>
    )
}

export default slideShow