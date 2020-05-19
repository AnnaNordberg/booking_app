import React, {Component} from "react";
import firebase from "../Firebase/FirebaseConfig";
import "../../Style.css";



class Card extends Component {

    onClickSaveToFireStore(){

       const docRef= firebase.firestore().collection("booking").doc(this.props.docId.toString())

       docRef.set({
           name: this.props.title,
           description: this.props.description,
           price: this.props.price
       })
     

    }
    
    render(){
    return (
        <div className="CardDiv">   
        <div className={"card"} style={{ width: "20rem" ,height: "28rem" }}>
            <img src={this.props.image} className={"card-img-top"} alt={"Picture"} style={{ width: "20rem" ,height: "15rem" }}/>
            <div className={"card-body"}>
                <h5 className={"card-title"}> {this.props.title}</h5>
                <p className={"card-text"}>{this.props.description} </p>
                <button className={"btn btn-primary"} onClick={this.onClickSaveToFireStore.bind(this)}>Reserve</button>
                <span>{this.props.price}</span>
            </div>
        </div>
        </div>
        

    )
}}

export default Card;