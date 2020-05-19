import React, {Component} from "react";
import firebase from "../Firebase/FirebaseConfig";
import Header from "../Pages/Header";


class UserLogin extends Component {

//via props
 state= {
     condition:true, 
     user:""
 }
 onClickRegister(){
     this.setState({condition:false})
 }

 onClickLogin(){
    this.setState({condition:true})
 }
onSubmitLogin(e){
    e.preventDefault();

const email= e.target.elements.email.value;
const password = e.target.elements.password.value;

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res)=>{

     this.props.userCredential(res.user.email);
     this.props.userCredential(res.user.displayName)
    
    })
    
    
}


 onSubmitRegister(e){
   
     const email= e.target.elements.email.value;
     const password= e.target.elements.password.value;
     const displayName = e.target.elements.username.value;
      e.preventDefault();

     firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then( (res)=>{

         res.user.sendEmailVerification()
         this.props.userCredential(res.user.email)
         this.props.showDisplayName(displayName)
     })
     //.then(()=>{
     /*      firebase.auth().onAuthStateChanged((user)=>{
            user.updateProfile({
         displayName :username
     })
  console.log("display name"+ this.state.displayName)}) */
    // })

 // aktivera verifering av email
 
 }


 resetPassword(e){
     var auth = firebase.auth();
var emailAddress = e.target.elements.resetEmail.value;

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  console.log("email sent")
})
e.preventDefault();
 }
    render(){
        return(
            
            <div> 
             <Header></Header>    
           <div className="UserLoginDiv">       
         {this.state.condition  &&
         <div> 
         <div className="UserLoginForm">
            <h2>Login</h2>
         <form   onSubmit={this.onSubmitLogin.bind(this)}>
                    <input type="email" placeholder="email"   name="email"/>
                    <input type="password" placeholder="password" name="password" />
                    <button className="btn btn-primary">Login</button>  
                </form>
            </div>
        <div className="UserResetDiv">    
             <h2>Forgot your password?</h2>
             <form onSubmit={this.resetPassword.bind(this)}>
                 <input type="email" placeholder="email" name="resetEmail"></input>
                 <button className="btn btn-primary" >Reset password </button>
             </form>
        </div>       
               
               
                 </div>
                
                }
                
               
           {!this.state.condition &&

           <div>
               <h2>Register</h2>
            <form onSubmit={this.onSubmitRegister.bind(this)}>
                     <input type="text" placeholder="username" name="username"/>
                     <input type="email" placeholder="email" name="email" />
                     <input type="password" placeholder="password" name="password" />

                    <button className="btn btn-primary" >Register</button>

                </form>
                
                </div>
                
                
                }
         </div>

{/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}
<button className="btn btn-primary" onClick={this.onClickLogin.bind(this)}>Login</button>
<button className="btn btn-primary" onClick={this.onClickRegister.bind(this)}>Register</button>
                

            </div>
        )
    }
}

export default UserLogin;