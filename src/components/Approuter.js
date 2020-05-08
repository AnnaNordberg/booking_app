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
import AdminPage from "./AdminPage";


const Approute = ()=>{

    return (
        <div className="body">
             
            <BrowserRouter>

                 <Navbar/>
                 <Switch>
                 <Route path="/" component={App} exact ></Route>
                 <Route path="/Booking" component= {Booking} exact></Route>
                 <Route path="/Form" exact component= {Form}></Route>
                 <Route path="/Admin" exact component= {Adminform}></Route> 
                 <Route path="/AdminLogin" exact component= {AdminLogin}></Route>
                 <Route path="/AdminPage" exact component={AdminPage}></Route>
                 <Route component={Pagenotfound}></Route>
                 </Switch>
            </BrowserRouter>
            
              
        </div>
    )
}

export default Approute;