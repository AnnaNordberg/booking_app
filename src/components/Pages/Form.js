import React, { Component } from "react";
import "../../Style.css";

class Form extends Component {

    constructor(props) {
        super(props);

        
        this.state = {
            name: undefined,
            appointmentTime: undefined,
            mobile: undefined
        }

    
    }
    
   


    handleOnChangeName = (e) => {
        this.setState({ name: e.target.value })

    }
    handleOnChangeTime = (e) => {
        this.setState({ appointmentTime: e.target.value })
    }
    handleOnChangeMobile = (e) => {
        this.setState({ mobile: e.target.value })
    }



    //skapa en metod 
    handleOnSubmit(e) {
        e.preventDefault()


        
    }
   


    render() {
        return (
            <div className="body">
            <div className="AppDiv">
                <h1>Book an appointment here!</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <input type={"text"} placeholder={"ange ditt name"} onChange={this.handleOnChangeName}></input>
                    <input type={"text"} placeholder={"ange önskat datum"} onChange={this.handleOnChangeTime}></input>
                    <input type={"number"} placeholder={"ange telefon nummer"} onChange={this.handleOnChangeMobile}></input>
                    <button className="btn btn-primary" type={"submit"} onSubmit={this.handleOnSubmit}>Confirm</button>
                </form>
                

                <div>  {this.state.name}</div>
                <div>  {this.state.appointmentTime}</div>
                <div>  {this.state.mobile}</div>
            </div>
            </div>
        )
    }

}

export default Form;