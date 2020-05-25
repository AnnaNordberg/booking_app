
import React, {Component} from "react";

import firebase from "../Firebase/FirebaseConfig";
import UserBookings from "../Pages/UserBookings";
import UserMessage from "../Pages/UserMessage";
import UserUpdate from "../Pages/UserUpdate";

class UserProfile extends Component{
    
    logOut(){
       
       localStorage.clear();
       window.location.reload(false);
       firebase.auth().signOut();
    }


    deleteAccount(){
        var user = firebase.auth().currentUser;

        if(user){
            user.delete().then(function() {
        // User deleted.
            localStorage.clear();
            window.location.reload(false);
            console.log("User deleted");
        }).catch(function(error) {
        // An error happened.
        console.log("Error");
        });

        }
    }

    render(){
        return(
            <div className="AppDiv">
                <h3>Welcome {this.props.userData}!</h3>
                <button className="btn btn-primary btnDelete" onClick={this.deleteAccount.bind(this)}> Delete account</button>
                <button className="btn btn-primary btnLogout" onClick={this.logOut.bind(this)}> Logout</button>

                <UserBookings/>

                <UserMessage/>

               {/*  <UserUpdate/> */}

                
                 
            </div>
        )
    }
}


export default UserProfile;


