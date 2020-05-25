import React from "react";
import {Link} from "react-router-dom";



const Navbar = ()=>{

    return(
        <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
  <Link className={"btn btn-primary btn-nav"} to="/">BALI</Link>
  <button className={"navbar-toggler"} type={"button"} >
    <span className={"navbar-toggler-icon"}></span>
  </button>
  <div className={"collapse navbar-collapse"} id={"navbarNavAltMarkup"}>
    <div className={"navbar-nav"}>
      <Link className={"nav-item nav-link active"} to="/">Home <span className="sr-only">(current)</span></Link>
      <Link className={"nav-item nav-link"} to="/UserPage">My page</Link>
      {/* <Link className={"nav-item nav-link"} to="/Form">Make a booking!</Link> */}
      {/* <Link className={"nav-item nav-link"} to="/Booking">My Bookings</Link> */}
      <Link className={"nav-item nav-link"} to="/Contact">Contact</Link>
      <Link className={"nav-item nav-link"} to="/AdminPage">Admin</Link>
      
    </div>
  </div>
</nav>
    )
}

export default Navbar; 