import React, { Component } from "react";
import axios from "axios";
import firebase from "../Firebase/FirebaseConfig";

class UserBookings extends Component {
  state = {
    products: [],
    chosenProduct: [],
    status: null,
    image: "",
  };

  async componentDidMount() {
    axios.get("http://localhost:1337/products").then((res) => {
      this.setState({ products: res.data });
    });
  }

  onClickGetBookings(){
    const db = firebase.firestore();
    const docRef = db.collection("booking")
    .doc(firebase.auth().currentUser.uid.toString())
    docRef.get()
    .then( booking => {
        if (booking.exists) {
            var getBooking = document.getElementById('get_booking')
            var btn_booking = document.getElementById('btn_booking')
            getBooking.querySelector(".title").innerHTML = booking.data().name;
            getBooking.querySelector(".description").innerHTML = booking.data().description;
            getBooking.querySelector(".price").innerHTML = booking.data().price;

            console.log("Det finns:", booking.data())
            btn_booking.remove()
        } else {
            console.log("error")
        }

        })  
}
              
  render() {
    return (
        <div className="AppDiv">
              <button id="btn_booking" className="btn btn-primary" onClick= {this.onClickGetBookings.bind(this)}>Show my Bookings!</button>
            <div className="myBookingsDiv">  
            <div className="get_booking" id="get_booking"> 
            <h3 className="title"></h3>
            <p className="description"></p>
            <p className="price"></p>
            </div>
            </div>
            </div>
    )
    }

}
  export default UserBookings;


 /*<div className={"products_preview"}>
  {this.state.products.map((product) => (
    <div className={"card__preview"} key={product.id}>
      <div className={"card__body"}>
        <h3 className={"card__title"}>{product.title}</h3>
        <p className={"card__price"}>{product.price}kr</p>
      </div>
    </div>
  ))}
</div>*/