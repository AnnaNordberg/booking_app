import React, { Component } from 'react';
import Modal from "react-modal";
import "../../Style.css";

const customStyles = {
  content : {
    background: "white",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 


export default class BookingForm extends Component {

    state = {
            name: "enter your name",
            appointmentTime: "enter a time",
            mobile: "x7x0000000"
        }


handleOnChange = (e)=>{
       this.setState({[e.target.name]: e.target.value})  
}

 handleOnSubmit(e){
        e.preventDefault()

        console.log("spara den i databasen")
        // ALLA värden som du får från användare ska sparas i databasen
    }
    render() {
        return (
            <div>
                <Modal 
          isOpen={this.props.openModal}
          onRequestClose={this.props.closeModal}
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Boking form" >
          <h2 >Make a booking</h2>
          <button className="btn btn-primary" onClick={this.props.closeModal}>close</button>
          <div>Please enter your booking information</div>
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <input value={this.state.name} onChange={this.handleOnChange} type={"text"}   name={"name"}></input>
                    <input value={this.state.appointmentTime} onChange={this.handleOnChange} type={"text"}  name={"appointmentTime"}></input>
                    <input value={this.state.mobile} onChange={this.handleOnChange} placeholder="phonenumber" type={"number"}  name={"mobile"}></input>
                    <button className="btn btn-primary" onClick={this.props.closeModal}>Confirm</button>
                </form>
                 </Modal>
            </div>
           
        )
    }
}