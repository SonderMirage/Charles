import { findByLabelText } from "@testing-library/react"
import React from "react"

function Slideshow (props)
{
    //css of the carousel object
    const carousel = {
        display: "flex",

    }

    //carousel function
    carousel = (props) => {

        return "Hi";
    }

    //main return function
    return(
        <div className="carousel" style={carousel}>
            <p>HI</p>
        </div>
    )
}

export default Slideshow