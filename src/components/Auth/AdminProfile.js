import React, {Component} from "react";



class AdminProfile extends Component{
    
    logOut(){
        localStorage.clear();
        window.location.reload(false);
    }
    render(){
        return(
            <div>
                Profile info {this.props.userData}

                 <button className="button" onClick={this.logOut.bind(this)}> Logout</button>
                 
            </div>
        )
    }
}


export default AdminProfile;