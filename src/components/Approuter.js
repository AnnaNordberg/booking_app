import React from "react";


import { BrowserRouter, Route, Switch} from "react-router-dom";
import "../Style.css";
import Booking from "./Pages/Booking";
import Navbar from "./Pages/Navbar"
import Form from "./Pages/Form";
import Pagenotfound from "./Pages/Pagenotfound";
import App from "./App";
import AdminPage from "./AuthAdmin/AdminPage";
import FirebaseTest from "./Firebase/FirebaseTest";
import UserPage from "./AuthUser/UserPage";
import Contact from "./Pages/Contact";



const Approute = ()=>{

    return (
       
        <div className="">
             
            <BrowserRouter>

                 <Navbar/>
                 <Switch>
                 <Route path="/" component={App} exact ></Route>
                 <Route path="/Booking" component= {Booking} exact></Route>
                 <Route path="/Form" exact component= {Form}></Route>
                 <Route path="/AdminPage" exact component={AdminPage}></Route>
                 <Route path="/FirebaseTest" exact component={FirebaseTest}></Route>
                 <Route path="/Userpage" exact component= {UserPage}></Route>
                 <Route path="/Contact" exact component= {Contact}></Route>
                 <Route component={Pagenotfound}></Route>
                 
                 </Switch>
            </BrowserRouter>
            
              
        </div>

        
    )
}

export default Approute;