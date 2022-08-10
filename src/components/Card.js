import React from "react"
import "../main.css"

function Card(props){
//should send the properties as follows: name, price, comment, img
    const cardStyle = {
        height:"50vh",
        paddingLeft:"5%",
        marginBottom: "5%",
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"baseline",
        backgroundColor: "hsl(169, 10%, 50%)",   
        textAlign:"center",
}

    const content = {
        margin:"auto",
    }

    const price = {
        paddingLeft:"20%",
        fontSize:"40px",
        fontWeight:"bold"
    }

    return(
        <div style={cardStyle}>
            <img style={content} src={props.img} alt="cloud" className="cardimg"/>
            <div style={content}>
                <h2> {props.name} </h2>
                <h3> {props.comment} </h3>
            </div>
            <p style={{...content, ...price}}> {props.price} </p>
        </div>
    )
}

export default Card