import React from "react";
import "./Style.css";



const Card = (props) => {
    

    return (
        <div className="CardDiv">   
        <div className={"card"} style={{ width: "20rem" ,height: "28rem" }}>
            <img src={props.image} className={"card-img-top"} alt={"Picture"} style={{ width: "20rem" ,height: "15rem" }}/>
            <div className={"card-body"}>
                <h5 className={"card-title"}> {props.title}</h5>
                <p className={"card-text"}>{props.description} </p>
                <button className={"btn btn-primary"}>Reserve</button>
                <span>{props.price}</span>
            </div>
        </div>
        </div>
        

    )
}

export default Card;