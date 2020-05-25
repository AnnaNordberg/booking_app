import React, { Component } from "react";
import axios from "axios";
import firebase from "../Firebase/FirebaseConfig";

class UserMessage extends Component{

    state={
        condition: true,
        user:""
    }

    onClickGetMessage(){
        const db = firebase.firestore();
        const docRef = db.collection("contact")
        .doc(firebase.auth().currentUser.uid.toString())
        docRef.get()
        .then( contact => {
            if (contact.exists) {
                var getMessage = document.getElementById('get_message')
                var btn_message = document.getElementById('btn_message')
                getMessage.querySelector(".username").innerHTML = contact.data().username;
                getMessage.querySelector(".message").innerHTML = contact.data().message;
      
                console.log("Message excists!", contact.data())
                btn_message.remove()
            } else {
                console.log("error")
            }
      
            })  
      }


render(){
    return(
        <div className="myMessageDiv">
        <h4>Show my latest sent message</h4>
        <button id="btn_message" className="btn btn-primary" onClick= {this.onClickGetMessage.bind(this)}>Show my messages!</button>   
        <div className="get_message" id="get_message">
        <p className="username"></p>      
        <p className="message"></p> 
        
        </div>  
        </div>
    )
}
}

export default UserMessage;