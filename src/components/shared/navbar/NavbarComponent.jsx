import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { useAuth0 } from "@auth0/auth0-react";

import './estilosPropios.css'


function NavbarComponent(){

const { loginWithRedirect } = useAuth0();
const { logout } = useAuth0();
const {user,isAuthenticated}= useAuth0();



return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      
      <label class="navbar-brand" href="">
        Sistema de gestion de repositorio
      </label>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link
              to="/proyectos"
              className="nav-link active"
              aria-current="page"
            >
              {" "}
              Mi Repositorio
            </Link>
          </li>

          <li class="botonLogOut">
          <Button
            className="btn btn-danger"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </Button>{" "}
          </li>
         

        </ul>
      </div>
    </div>
  </nav>
); 
};


export default NavbarComponent;