import React, {Component} from "react";
import BookingForm from "./BookingForm";
import firebase from "../Firebase/FirebaseConfig";
import "../../Style.css";



class Card extends Component {
    /*     state = {
        user: null || localStorage.getItem("user"),
        displayName: ""

    } */

    state = {
        openModal:false,
        confirmation:""
    }
openModalEvent(){
    this.setState( {openModal: !this.state.openModal})
}
closeModalEvent(){
    this.setState({openModal:false})
}


   /*  onClickSaveToFireStore(){

       const docRef= firebase.firestore().collection("booking").doc(firebase.auth().currentUser.uid.toString())

       docRef.set({
           name: this.props.title,
           description: this.props.description,
           price: this.props.price
       })
    }

    componentDidMount(){
        firebase.auth()
        .onAuthStateChanged(

            user=>{ if(user) { this.setState({

            user: user.email, 
            displayName: user.displayName

            })} else {

            this.setState({user: localStorage.getItem("user")})
            } 
            }
         )
    } */
    
    render(){
        // const loggedIn = this.state.user || localStorage.getItem("user");
    return (
        <div className="CardDiv"> {/* <div>Tack for din bokning. Din bokningstid är {this.state.confirmation}</div>   */}    
        <div className={"card"} style={{ width: "20rem" ,height: "28rem" }}>
        <BookingForm openModal={this.state.openModal}  closeModal= {this.closeModalEvent.bind(this)}
              Callback={ (time)=>{
                  this.setState({ confirmation: time}) }}/>   
            <img src={this.props.image} className={"card-img-top"} alt={"Picture"} style={{ width: "20rem" ,height: "15rem" }}/>
            <div className={"card-body"}>
                <h5 className={"card-title"}> {this.props.title}</h5>
                <p className={"card-text"}>{this.props.description} </p>
            <button className={"btn btn-primary"}onClick={this.openModalEvent.bind(this)} >Confirm</button>   
{/*         {!loggedIn ?
        (<button className={"btn btn-primary"} >Sign in first</button>)
        : 
        (<button className={"btn btn-primary"} onClick={this.onClickSaveToFireStore.bind(this)}>Reserve</button>) 
            }    */}   
         <span>{this.props.price}</span>
            </div>
        </div>
        </div>
    )
}}

export default Card;