import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import HomePage from "./components/home/HomePage";
import FooterComponent from "./components/shared/footer/FooterComponent";
import NavbarComponent from "./components/shared/navbar/NavbarComponent";
import Proyectos from "./components/proyectos/Proyectos";

function App() {

  return (
   
      <Router>
        
        <Switch>
          <Route path="/" exact>
            <HomePage />
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
