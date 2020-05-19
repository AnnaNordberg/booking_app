import React, { Component } from "react";
import firebase from "../Firebase/FirebaseConfig";

class Contact extends Component{


onSubmitForm(e){
    e.preventDefault();

    const db = firebase.firestore();
    const docRef = db.collection("contact").doc("messages");
    
    docRef.set({   
        username : e.target.elements.username.value,
        email : e.target.elements.email.value,
        message : e.target.elements.message.value
    })
}
    render(){
        return(
               <div className="AppDiv">
               <div className="ContactFormDiv">    
                  <h3>Got a question? Contact us!</h3> 
                    <form onSubmit={this.onSubmitForm.bind(this)}>
                        <input type="text" placeholder="username" name="username" />
                        <input type="email" placeholder="email" name="email" />
                        <textarea placeholder="your message..." rows="6" cols="40" name="message"/>
                        <br />    
                        <button className="btn btn-primary">Send!</button>
                    </form>
                    </div>
               </div>
        )
    }
}

export default Contact;