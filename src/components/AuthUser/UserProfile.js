// testa skapa:  Dashboard
//admin profile
import React, {Component} from "react";

import firebase from "../Firebase/FirebaseConfig";

//navigate("/userprofile")



class UserProfile extends Component{
    
    logOut(){
       
       localStorage.clear();
       window.location.reload(false);
       firebase.auth().signOut();
    }


deleteAccount(){
    const userfromLocal = localStorage.getItem("user");
    console.log(userfromLocal);
    var user = firebase.auth().currentUser;
    console.log(user);

   user.delete().then(function() {
  // User deleted.
}).catch(function(error) {
  // An error happened.
});

}
    render(){
        return(
            <div className="AppDiv">
                <h3>Welcome {this.props.userData}!</h3>

                <button className="btn btn-primary" onClick={this.deleteAccount.bind(this)}> Radera konto</button>
                 <button className="btn btn-primary" onClick={this.logOut.bind(this)}> Logout</button>
                 
            </div>
        )
    }
}


export default UserProfile;


