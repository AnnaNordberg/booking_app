import React, {Component} from "react";
import firebase from "./FirebaseConfig";


class FirebaseTest extends Component {

    onClickFirebase(){
        const docRef= firebase.firestore().collection("booking").doc("info")

        docRef.get().then(booking =>{
            if (booking.exists) {
                console.log("document data: " , booking.data())
            }
            else {
                console.log ("error")
            }
        })
      
    }

    render() {
        return (
            <div>
                <button onClick= {this.onClickFirebase.bind(this)}>En knapp</button>
            </div>
        )
    } 
    
}

export default FirebaseTest;