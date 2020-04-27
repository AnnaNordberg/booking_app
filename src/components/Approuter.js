import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Card from "./Card";
import Booking from "./Booking";
import Navbar from "./Navbar";
import Form from "./Form";
import Pagenotfound from "./Pagenotfound";
import "./Style.css";

const Approuter = () => {
    return (
        <div className="body">
                <BrowserRouter>
                < Navbar />
                <Switch>
                <Route path="/Card" component={Card} exact   ></Route>
                <Route path="/Booking" component={Booking} exact   ></Route>
                <Route path="/Form" component={Form} exact   ></Route>
                <Route component={Pagenotfound}></Route>
                </Switch>
                </BrowserRouter>
                
        </div>

    )
}

export default Approuter;