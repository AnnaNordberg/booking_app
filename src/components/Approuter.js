import React from "react";


import { BrowserRouter, Route, Switch} from "react-router-dom";

import Booking from "./Booking";
import Navbar from "./Navbar"
import Form from "./Form";
import Pagenotfound from "./Pagenotfound";
import App from "./App";
import Adminform from "./Adminform";
import "./Style.css";
import AdminLogin from "./Auth/AdminLogin";


const Approute = ()=>{

    return (
        <div>
             
            <BrowserRouter>

                 <Navbar/>
                 <Switch>
                 <Route path="/" component={App} exact ></Route>
                 <Route path="/Booking" component= {Booking} exact></Route>
                 <Route path="/Form" exact component= {Form}></Route>
                 <Route path="/Admin" exact component= {Adminform}></Route> 
                 <Route path="/AdminLogin" exact component= {AdminLogin}></Route>
                 <Route component={Pagenotfound}></Route>
                 </Switch>
            </BrowserRouter>
            
              
        </div>
    )
}

export default Approute;