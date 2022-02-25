import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";


import HomePage from "./components/home/HomePage";
import FooterComponent from "./components/shared/footer/FooterComponent";
import NavbarComponent from "./components/shared/navbar/NavbarComponent";
import Proyectos from "./components/proyectos/Proyectos";

import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const {user,isAuthenticated}= useAuth0();



  return (
   

      <Router>
        

        <Switch>
          <Route path="/" exact>
            <HomePage />
            <FooterComponent />
          </Route>
        </Switch>

        <Switch>
          <Route path="/proyectos" exact>
          <NavbarComponent />
            <br />
            <Proyectos />
            <br />
            <FooterComponent />
          </Route>
        </Switch>

  

      </Router>
  
  );
}

export default App;
