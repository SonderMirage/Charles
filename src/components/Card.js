import React from "react"
import "../main.css"

function Card(props){
//should send the properties as follows: name, price, comment, img
    const cardStyle = {
        marginTop: "5%",
        marginBottom: "5%",
        display: "flex",
        justifyContent: "spaceBetween",
        backgroundColor: "hsl(169, 10%, 50%)",   
}

    const content = {
        display: "flex",
        flexDirection: "column",
    }

    return(
        <div style={cardStyle}>
            <img src={props.img} alt="cloud" className="cardimg"/>
            <div style={content}>
                <h2>{props.name}</h2>
                <h3>{props.comment}</h3>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default Card