import React, {Component} from "react";
import axios from "axios";
 
 
class AdminLogin extends Component {
 
 state= {
     condition:true
 }
 onClickRegister(){
     this.setState({condition:false})
 }
 
 onClickLogin(){
    this.setState({condition:true})
 }
onSubmitLogin(e){
    e.preventDefault();
    axios
  .post('http://localhost:1337/auth/local', {
    identifier: e.target.elements.email.value,
    password: e.target.elements.password.value,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
}
 
 onSubmitRegister(e){
     e.preventDefault();
     axios
  .post('http://localhost:1337/auth/local/register', {
    username: e.target.elements.username.value,
    email: e.target.elements.email.value,
    password: e.target.elements.password.value,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
 }
    render(){
        return(
            <div>
             
 
         {this.state.condition  && <form   onSubmit={this.onSubmitLogin.bind(this)}>
                    <input type="email"   name="email" placeholder="your email"/>
                    <input type="password" name="password" placeholder="your password" />
                    
                </form>}
               
           {!this.state.condition && <form onSubmit={this.onSubmitRegister.bind(this)}>
                    <input type="text" name="username" placeholder="chose a username"/>
                     <input type="email" name="email" placeholder="enter your email" />
                    <input type="password" name="password" placeholder="chose a password" />
 
                    
 
                </form>}
 
{/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}
<button className="btn btn-primary" onClick={this.onClickLogin.bind(this)}>Login</button>
<button className="btn btn-primary" onClick={this.onClickRegister.bind(this)}>Register</button>
               
 
            </div>
        )
    }
}
 
export default AdminLogin;