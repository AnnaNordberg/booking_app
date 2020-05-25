import React, { Component } from "react";
import AdminProfile from "./AdminProfile";
import AdminLogin from "./AdminLogin";
import Header from "../Pages/Header";
import "../../Style.css";


class AdminPage extends Component {
    state = {
        user: null || localStorage.getItem("user"),
        jwt: null
    }
    callback(user, jwt) {
        this.setState({ user: user.email, jwt: jwt })
        localStorage.setItem("jwt", this.state.jwt)
        localStorage.setItem("user", this.state.user)
    }




    render() {

        const loggedIn = this.state.user || localStorage.getItem("jwt");
        return (
            <div>
            
            <div className="AppDiv">
            <Header/>
                
                {!loggedIn ?
                    <AdminLogin userCredential={this.callback.bind(this)} /> :
                    <AdminProfile userData={this.state.user} />
                }
            </div>
            </div>
        )
    }
}

export default AdminPage;