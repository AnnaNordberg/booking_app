import React, { Component } from "react";
import firebase from "../Firebase/FirebaseConfig";

class UserUpdate extends Component {

    state = {
        condition: true,
        user: ""
    }


    onClickUpdateUsername() {
        var user = firebase.auth().currentUser;
         user.updateProfile({
            displayName: "Jake",
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });

    }


    render() {
        return (
            <div>
                <form>
                <input type="text" name="displayName" placeholder="Enter new username" />
                    <button id="btn_updateUsername" className="btn btn-primary" onClick={this.onClickUpdateUsername.bind(this)}>Update Username</button>
                </form>
                
                
            </div>
        )
    }




}


export default UserUpdate;