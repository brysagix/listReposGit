import React from 'react';
import { Link } from 'react-router-dom';



function NavbarComponent(){
return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="">
        Sistema de gestion de repositorio
      </a>

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
        </ul>
      </div>
    </div>
  </nav>
); 
};


export default NavbarComponent;