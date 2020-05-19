import React, { Component } from "react";

import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin";
import firebase from "../Firebase/FirebaseConfig";

class UserPage extends Component {
    state = {
        user: null || localStorage.getItem("user"),
        displayName: ""

    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(
     user=> this.setState({user: user.email, displayName:user.displayName})
        )
        
    }

    render() {

        const loggedIn = this.state.user || localStorage.getItem("user");
        return (
            <div className="AppDiv">
                    
                {!loggedIn ?
                    <UserLogin userCredential={(user) => {
                        localStorage.setItem("user", this.state.user)
                        this.setState({ user: user.email })
                    }}
                    showDisplayName={ (username)=>{
                        console.log("displyaname from parent" + username)

                         firebase.auth().onAuthStateChanged((user)=>{
                           user.updateProfile({
                               displayName :username
                           }).then( ()=>{
                               this.setState({
                                    displayName: user.displayName
                                })
                
                              console.log("display name"+ this.state.displayName)
                           })

                        })

                    } }
                    /> :
                    <UserProfile userData={this.state.displayName || this.state.user} />
                }
              
            </div>
        )
    }
}

export default UserPage;